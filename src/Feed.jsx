import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import  Feed from "./Feed"

export default function Autenticator () {

  const { user, setUser } = useContext(AppContext);
  
  return (
    <div>
      <Feed />
    </div>
  );

}