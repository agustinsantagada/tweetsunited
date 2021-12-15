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
      // console.log(auth.currentUser);
      setUserLogin(auth.currentUser);
    });
  }, );


const values = () => {
  signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        setUser(result.user);
        console.log("PRUEBA RESULT", result)
        // console.log("el usuario se logeo", user);
      })

      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   const email = error.email;
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      // });
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