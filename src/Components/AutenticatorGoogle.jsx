import GoogleButton from 'react-google-button'
import BoxedUser from "../Pages/UserPage";
import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { 
  getAuth, 
  signOut,
  signInWithPopup, 
  GoogleAuthProvider,  
  setPersistence, 
  browserLocalPersistence } from "firebase/auth";
import "../Styles/AuthGoogle.css"
  

const AutenticatorGoogle = () => {

  const { setUserLogin, user, setUser, error } = useContext(AppContext);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const history = useHistory()


  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      console.log(auth.currentUser);
      setUserLogin(auth.currentUser);
    });
  }, );


const values = () => {
  signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
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
         <button className="google-button" onClick={() => {
              values();
            }}>Sign Up with Google</button>
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