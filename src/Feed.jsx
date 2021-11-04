import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import NewTweet  from "./NewTweet"
import MapTweet from "./MapTweet"

export default function Autenticator () {

  const { user, setUser } = useContext(AppContext);
  
  return (
    <div>
     <NewTweet />
     <MapTweet />
    </div>
  );
}