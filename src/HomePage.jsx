import React from "react";
import UserPage from "./UserPage"
import MapTweet from "./MapTweet"
import MapTweetUser from "./MapTweetUser"
import NewTweet from "./NewTweet"
import UserBar from "./UserBar"


export default function HomePage () {

    return (
      <div>
       <UserPage/>
       {/* <UserBar />
       <NewTweet/>
       <MapTweet/> */}
       {/* <MapTweetUser/> */}
      </div>
    );
  }