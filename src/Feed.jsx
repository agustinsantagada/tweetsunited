import React from "react";
import NewTweet  from "./NewTweet"
import MapTweet from "./MapTweet"
import MapTweetUser from "./MapTweetUser"

export default function Autenticator () {

  return (
    <div>
     <MapTweetUser />
     <NewTweet />
     <MapTweet />
    </div>
  );
}