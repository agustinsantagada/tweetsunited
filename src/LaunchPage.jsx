import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LogInPage  from "./LogInPage"
import  AutenticatorGoogle  from "./AutenticatorGoogle"
import  NickPage from "./NickPage"
import "./Styles/LaunchPage.css"

export default function LaunchPage () {

  return (
    <BrowserRouter>
    <Switch>
      <Route component={ LogInPage }path='/'/>
    </Switch>
    </BrowserRouter>
  )}




