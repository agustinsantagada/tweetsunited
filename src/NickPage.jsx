import React from "react";
import { AppContext } from "./AppContext"
import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage"
import NickName from "./NickName"
import "./Styles/NickPage.css"

export default function NickPage () {

  const { nickName } = useContext(AppContext);

  return (
    <BrowserRouter>
    <Switch>
      <div className="np-bkg">
      {!nickName ? 
      <Route component={ NickName } path="/" /> : 
      <Route component = { HomePage } path="/home"/>}
      </div>
      </Switch>
    </BrowserRouter>
  );
  }