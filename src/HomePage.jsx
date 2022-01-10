import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MapTweet from "./MapTweet"
import NewTweet from "./NewTweet"
import UserBar from "./UserBar"
import ProfilePage from "./ProfilePage"

export default function HomePage () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route component = {UserBar} path = '/home'  exact/>
            <Route component = {ProfilePage} path = '/ProfilePage'  exact/>
          </Switch>
            <Route component = {NewTweet} path = '/home'  exact/>
            <Route component = {MapTweet} path = '/home'  exact/>  
        </div>
      </BrowserRouter>
    );
  }