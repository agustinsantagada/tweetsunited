import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import  AutenticatorGoogle  from "./AutenticatorGoogle"
import  NickPage from "./NickPage"
import "./Styles/LaunchPage.css"

export default function LaunchPage () {

  const { user } = useContext(AppContext);
  
  return (
    <div className="lp-bkg">
      <img src="https://firebasestorage.googleapis.com/v0/b/tweets-acamica.appspot.com/o/logo.svg?alt=media&token=29e857a5-1586-42c8-9257-999a763be2d1" className="logo" alt="logo" />
      <div className="lp-div">
      <h1 className="lp-tlt">Hello Buddy!!</h1>
      <div className="lp-tltl">Bienvenido, a DevsUnited! Te invitamos a loguearte con tu cuenta favorita. </div>
      <div className="lp-tltl">Please, sign in here: </div>
      {!user ? <AutenticatorGoogle className="auth-google"/> : <NickPage/>}   
      </div>     
    </div>
  )}




