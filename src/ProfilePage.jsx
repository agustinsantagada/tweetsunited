import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserPage from "./UserPage"
import MapTweetUser from "./MapTweetUser"
import MapTweetLikes from "./MapTweetLikes"
import ProfileBar from "./ProfileBar"
import HomePage from "./HomePage"
import LaunchPage from "./LaunchPage"

export default function ProfilePage () {

    return (
    <BrowserRouter>
    <div>
        <Route component = {UserPage} path = {['/ProfilePage', "/favorites"]} />
        <Route component = {ProfileBar} path = {['/ProfilePage', "/favorites"]}  />
        <Switch>
          <Route component = {MapTweetUser} path = '/ProfilePage'  exact/>
          <Route component = {MapTweetLikes} path = '/favorites'  exact/>
          <Route component = {HomePage} path = '/home'/>
          <Route component={ LaunchPage } path = '/' />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }