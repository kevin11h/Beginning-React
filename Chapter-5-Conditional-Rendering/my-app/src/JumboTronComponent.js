import React, { Component } from 'react';

import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Jumbotron>

          <h1>Hello, World!</h1>
          <p>{this.props.children}</p>
          <p>This is a simple hero unit, a simple jumbotron-style component for alling extra attention to a featured content orinformation. </p> 
          <p><Button bsStyle="primary"> Learn more</Button></p>
        </Jumbotron>

      </div>
    );

  }
}

export default JumboTronComponent;
