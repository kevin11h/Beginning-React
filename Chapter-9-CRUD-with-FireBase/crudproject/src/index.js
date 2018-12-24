import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCxHGoRy_0_LrWY79nfT3KOHVM0UT1DgCI",
    authDomain: "crudproject-2f2e5.firebaseapp.com",
    databaseURL: "https://crudproject-2f2e5.firebaseio.com",
    projectId: "crudproject-2f2e5",
    storageBucket: "crudproject-2f2e5.appspot.com",
    messagingSenderId: "897085662362"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
