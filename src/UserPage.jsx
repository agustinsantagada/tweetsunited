import React, {useContext} from "react";
import { AppContext } from "./AppContext";
import "./Styles/UserPage.css"

const UserPage = ({ photoURL, displayName, logout }) => {

  const { user, color } = useContext(AppContext)

  return (
    <div className="UserPage">
      <div className="UserPage-top">
        <button className="UserPage-back">Back</button>
        <button className="UserPage-logout" onClick={() => { logout() }} >
          Logout
        </button>
      </div>
      <div className="UserPage-user">
        <img className="UserPage-photo" src={user.photoURL} width="50px" alt={displayName} />
        <h2 style={{ backgroundColor: color }} className="UserPage-nick">{user.displayName}</h2>
      </div>
     </div>
  );
};

export default UserPage;
