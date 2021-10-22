import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };



  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        history.replace(from);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const handleGoogleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        const user = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(user)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      {user.isSignedIn ? (
        <h1 style={{ textAlign: "center" }}>Welcome {user.name}</h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>Log In to continue</h1>
      )}
      {user.isSignedIn ? (
        <button onClick={handleGoogleSignOut} className="login-btn">
          Log Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="login-btn">
          Log In with Google
        </button>
      )}
    </div>
  );
};

export default Login;
