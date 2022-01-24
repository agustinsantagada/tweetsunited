import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LogInPage  from "./LogInPage"
import "../Styles/LaunchPage.css"

export default function LaunchPage () {

  return (
    <BrowserRouter>
    <Switch>
      <Route component={ LogInPage } path='/'/>
    </Switch>
    </BrowserRouter>
  )}




