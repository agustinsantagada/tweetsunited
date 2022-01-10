import "./Styles/AuthGoogle.css"
import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import  BoxedUser  from "./UserPage";
import { useHistory } from "react-router-dom";
import GoogleButton from 'react-google-button'
import { 
  getAuth, 
  signOut,
  signInWithPopup, 
  GoogleAuthProvider,  
  setPersistence, 
  browserLocalPersistence } from "firebase/auth";
  

const AutenticatorGoogle = () => {

  const { setUserLogin, user, setUser, error } = useContext(AppContext);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const history = useHistory()


  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      // console.log(auth.currentUser);
      setUserLogin(auth.currentUser);
    });
  }, );


const values = () => {
  signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(result.user);
        history.push("/")
      })
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser(undefined);
      setUserLogin(undefined);
      history.push("/")
      
    });
  };
  
  return (
    <div>
      {(!user) ? 
        <div className="gSignInWrapper">
          <GoogleButton
            className="google-btn"
            onClick={() => {
              values();
            }}
          >
            Logear con google
          </GoogleButton>
          <div>{error}</div>
        </div>
       : 
        <BoxedUser {...user} 
        logout={logout} 
        />
      }
    </div>
  );
};

export default AutenticatorGoogle