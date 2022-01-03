import React from "react";
import { AppContext } from "./AppContext"
import { useContext } from "react";
import HomePage from "./HomePage"
import NickName from "./NickName"
import "./Styles/NickPage.css"

export default function NickPage () {

  const { nickName } = useContext(AppContext);

  return (
    <div className="np-bkg">
    {!nickName ? <NickName /> : <HomePage/>}
    </div>
  );
  }