import React, { useState, useEffect } from 'react';
import firebase from "./fire";
import './App.css';

const App = () => {
const [user,setUser] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [emailError,setEmailError] = useState('');
const [passwordError,setPasswordError] = useState('');
const [hasAccount,setHasAccount] = useState(false);

const handleLogin = () =>{
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

const handleSignup = () =>{
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

const handleLogout = () =>{
  
}


  return (
    <div className="App">
      <h1>Login Using Firebase</h1> 
    </div>
  );
}

export default App;
