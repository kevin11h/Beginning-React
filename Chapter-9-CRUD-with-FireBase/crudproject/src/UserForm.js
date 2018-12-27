import React, {Component }  from 'react';
import {FormGroup , ControlLabel, FormControl, HelpBlock, Button , Alert} from 'react-bootstrap';
import * as firebase from 'firebase';

class UserForm extends Component {

  errorUsername;
  errorEmail;
  title;
  id;


  constructor(props) {
    super(props);

    this.errorUsername = '';
    this.errorEmail = '';
    this.title = 'New User';
    this.id= this.props.match.params.id

    this.state ={
    	username: '',
    	password: '',
    	usernameTouched: false,
    	emailTouched: false,
    };

    this.handleChange = this.handleChange.bind(this);
  	this.handleBlur = this.handleBlur.bind(this);
  	this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if(this.id) {
      this.title = 'Edit User';
      firebase.database().ref('/' + this.id)
      .on('value', snapshot=> {
        this.setState({
          username: snapshot.val().username,
          email: snapshot.val().email,
        });
      });
    }
  }

  getUserNameValidationState() {
  	const length = this.state.username.length;

  	if(this.state.usernameTouched) {
  		if (length === 0) {
  			this.errorUsername = 'Username is required';
  			return 'error';
  		}
  		else if(length<3) {
  			this.errorUsername = 'Username should be minimum 3 characters';
  			return 'error';	
  		} 
  		else if (this.state.username.indexOf(' ') >= 0) {
  			this.errorUsername = 'Username cannot contain spaces';
  			return 'error';
  		}
  		else {
  			this.Username = '';
  			return 'success';
  		}
  	}
  }

  getEmailValidationState() {
    const length = this.state.email.length;

    if(this.state.emailTouched) {
      if(length===0) {
        this.errorEmail = 'Email is required';
        return 'error';
      }

      else if ( length < 3 ) {
        this.errorEmail = 'Email shoudl be minimum 3 characters';
        return 'error';
      }

      else if ( this.state.email.indexOf('@') === -1) {
        this.errorEmail = 'Email should contain @';
        return 'error';
      }
      else {
        this.errorEmail = '';
        return 'success';
      }
    }
  }

  getPasswordValidationState() {
  	const length = this.state.password.length;
  	if (this.state.passwordTouched) {
  		if (length <3) return 'error';
  		else return 'success';
  	}
  }

  handleBlur(e) {
  	const target = e.target;
  	const name = target.name;

  	this.setState({
  		[name+'Touched']: true

  	});

  }

  handleChange(e) {
  	const target = e.target;
  	const value = target.value;
  	const name= target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
  	this.errorLogin = false;
    event.preventDefault();

  	if (!this.canBeSubmitted()) {
  		event.preventDefault();
  		return;
  	}
  	else {

      if (this.id) {
        firebase.database().ref('/'+this.id).update({
          username: this.state.username,
          email: this.state.email
        })
        .then(() => this.props.history.push('/'))
      }
      else{
        firebase.database().ref('/').push({
          username: this.state.username,
          email: this.state.email
        })
        .then(()=> this.props.history.push('/'));  
      }
      
  	}
  }

  canBeSubmitted() {
      return (
        this.state.usernameTouched && 
        this.state.emailTouched &&
        this.errorUsername.length === 0 && 
        this.errorEmail.length === 0
      );
  }

  render() {

    const isEnabled = this.canBeSubmitted();

    return (
      <form onSubmit={this.handleSubmit} >
        <FormGroup controlId="formBasicText"
         validationState={this.getUserNameValidationState()}>

	        <ControlLabel>User Name</ControlLabel>
	        <FormControl
	          name='username'
	          type="text" 
	          value={this.state.username}
	          placeholder="Enter Username"
	          onChange={this.handleChange}
	          onBlur={this.handleBlur}
	        />

	        <FormControl.Feedback />
	        {this.errorUsername.length > 0 && this.state.usernameTouched &&
	        	<HelpBlock>{this.errorUsername}</HelpBlock> 
          }
	       	

        </FormGroup>

        <FormGroup controlId="formBasicText" 
         validationState={this.getPasswordValidationState()}>
	     
	        <ControlLabel>Email</ControlLabel>
	        <FormControl
	        	name='email'
	        	type='text'
	        	value={this.state.email}
	        	placeholder="Enter eamil"
	        	onChange={this.handleChange}
	        	onBlur={this.handleBlur}
	        />

	        <FormControl.Feedback />
          {  this.errorEmail.length > 0 && this.state.emailTouched && 
	         <HelpBlock>{this.errorEmail}</HelpBlock>
          }

        </FormGroup>
      
        <Button type="submit" disabled={!isEnabled} >
        Submit
        </Button>
      </form>
    );
  }
}

export default UserForm;