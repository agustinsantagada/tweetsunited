import React, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import  BoxedUser  from "./BoxedUser";
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


  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      setUserLogin(auth.currentUser);
    });
  }, );


const values = () => {
  signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("PRUEBA RESULT", result)
      })
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser(undefined);
      setUserLogin(undefined);
    });
  };
  
  return (
    <div>
      Aquí va a aparecer la autenticación
      {(!user) ? 
        <div>
          <button
            onClick={() => {
              values();
            }}
          >
            Logear con google
          </button>
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