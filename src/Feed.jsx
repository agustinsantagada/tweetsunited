import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import MapTweet from "./MapTweet";

export default function Autenticator () {

  const { user, setUser } = useContext(AppContext);
  
  return (
    <div>
      Hola
     {/* <MapTweet /> */}
    </div>
  );

}