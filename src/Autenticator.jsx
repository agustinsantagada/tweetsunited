import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import  AutenticatorGoogle  from "./AutenticatorGoogle"
import  Feed from "./Feed"

export default function Autenticator () {

  const { user } = useContext(AppContext);
  
  return (
    <div>
      {!user ? <AutenticatorGoogle/> : <Feed/>}
    </div>
  );
}




