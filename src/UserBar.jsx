import React, {useContext} from "react";
import { AppContext } from "./AppContext";
import "./Styles/UserBar.css"

const UserPage = ({ displayName, logout }) => {

  const { user, color } = useContext(AppContext)

  return (
    <div className="UserBar">
      <div className="UserBar-top">
      <button className="UserBar-button" style={{backgroundColor: color.hex}}>
          <img className="UserBar-photo" src={user.photoURL}  alt="" />
      </button>
        <img className="UserBar-logo" src="https://firebasestorage.googleapis.com/v0/b/tweets-acamica.appspot.com/o/DevIcon.svg?alt=media&token=c57729aa-f466-4c2f-8022-935fda96e160"  alt="" />
        <img className="UserBar-text" src="https://firebasestorage.googleapis.com/v0/b/tweets-acamica.appspot.com/o/DevsTxt.svg?alt=media&token=33e5cc36-9ee8-4bd1-a88d-4ee9870f77ff"  alt="" />   
      </div>
    </div>
  );
};

export default UserPage;
