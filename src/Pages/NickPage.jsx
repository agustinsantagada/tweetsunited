import React from "react";
import { AppContext } from "../Context/AppContext"
import { useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import HomePage from "../Pages/HomePage"
import NickName from "../Components/NickName"
import "../Styles/NickPage.css"

export default function NickPage () {

  const { nickName } = useContext(AppContext);
  const history = useHistory()

  return (
    <BrowserRouter history={history}>
    <Switch>
      <div className="np-bkg">
      {!nickName ? 
      <Route component={ NickName } path="/" exact/> : 
      <Route component = { HomePage } path="/home"exact/>}
      </div>
      </Switch>
    </BrowserRouter>
  );
  }