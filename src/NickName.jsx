import React, { useContext } from "react";
import { AppContext } from "./AppContext"
import ColorPicker from "./ColorPicker"
import "./Styles/NickName.css"

export default function NickName() {

  const { user, nick, setNick, setNickName } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nick.length > 3) {
      setNickName(nick);
  } else {
      alert ("Ingresa un nickname correcto")
      return false
  }
}

  return (
    <div className="np-bkg">
      <img src="https://firebasestorage.googleapis.com/v0/b/tweets-acamica.appspot.com/o/logo.svg?alt=media&token=29e857a5-1586-42c8-9257-999a763be2d1" className="logo" alt="logo" />
      <div className="np-div">
      <h1 className="np-tlt">Bienvenido</h1>
      <div className="np-tlt-user">{user.displayName}</div>
      <form className="np-txtarea">
        <textarea
          type="text"
          className="np-txtarea"
          placeholder="Type your Nickname"
          value={nick}
          onChange={(e) => {setNick(e.target.value)}}></textarea>
      </form>
      <div className="np-tlt-color" >Select tyour favourite color</div>
      <ColorPicker />
      <button className="np-btn" onClick={handleSubmit}>CONTINUE</button>
      </div>
    </div>
  );
}