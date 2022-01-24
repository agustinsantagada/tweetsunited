import React, { useContext } from "react";
import {AppContext} from './AppContext.jsx'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LaunchPage from "../Pages/LaunchPage.jsx"; 
import HomePage from "../Pages/HomePage.jsx";
import NickPage from "../Pages/NickPage.jsx";

function App() {

  const { user } = useContext(AppContext);

  return (
      <BrowserRouter>
      <Switch>
        <div className="App">
          {!user ? <Route component = {LaunchPage} path= "/" exact /> : !user.color || !user.username ? <Route component={NickPage} path="/" /> : <Route component={ HomePage } path="/home"/>}
        </div>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
