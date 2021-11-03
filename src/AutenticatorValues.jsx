import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import  BoxedUser  from "./BoxedUser";
import { firestore } from "./Firebase"

export default function AutenticatorValues() {

  const { userLogin, setUser } = useContext(AppContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  

const values = () => {

  signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(result.user);
        console.log("El usuario se logeo", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  
  return (
    <div>
      Aqui va a aparecer la autenticacion
      {!userLogin ? (
        <button onClick={()=>{values()}}>
          Logear con google
        </button>
      ) : (
        <BoxedUser user={userLogin} />
      )}
    </div>
  );
};


