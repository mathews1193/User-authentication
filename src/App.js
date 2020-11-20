import React, { useState, useEffect } from 'react';
import firebase from "./fire";
import './App.css';
import fire from './fire';

const App = () => {
const [user,setUser] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [emailError,setEmailError] = useState('');
const [passwordError,setPasswordError] = useState('');
const [hasAccount,setHasAccount] = useState(false);

// clears user input for email and password 
const clearInputs = () =>{
  setEmail('');
  setPassword('');
}

//clears error message from screen
const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}

// login user with email and password
const handleLogin = () =>{ 
  clearErrors();
  firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
    }
  });
};

// signup user with email and password
const handleSignup = () =>{
  clearErrors();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
    }
  });
};

//logout user 
const handleLogout = () =>{
  firebase.auth.signOut();
};

// check to see if user is logged in 
const authListener = () =>{
  fire.auth().onAuthStateChanged(user => {
    if(user){
      clearInputs();
      setUser(user);
    }else {
      setUser('');
    }
  })
};

useEffect(() =>{
  authListener();
}, []);

  return (
    <div className="App">
      <h1>Login Using Firebase</h1> 
    </div>
  );
}

export default App;
