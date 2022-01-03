import React from "react";
import UserPage from "./UserPage"
import MapTweet from "./MapTweet"
import MapTweetUser from "./MapTweetUser"
import NewTweet from "./NewTweet"


export default function HomePage () {

    return (
      <div>
       <UserPage/>
       <NewTweet/>
       <MapTweet/>
       <MapTweetUser/>
      </div>
    );
  }