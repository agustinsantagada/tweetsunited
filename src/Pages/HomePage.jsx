import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MapTweet from "../Containers/MapTweet"
import NewTweet from "../Components/NewTweet"
import UserBar from "../Pages/UserBar"
import ProfilePage from "../Pages/ProfilePage"

export default function HomePage () {
    return (
      <BrowserRouter>
        <div className="HomePage">
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