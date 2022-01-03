import React, {useContext} from "react";
import { AppContext } from "./AppContext";

const UserPage = ({ photoURL, displayName, logout }) => {

  const { user } = useContext(AppContext)

  return (
    <div className="UserPage">
      <img src={user.photoURL} width="50px" alt={displayName} />
      <h2>{user.displayName}</h2>
      <h3>{user.email}</h3>
      <button onClick={() => { logout() }} >
        Logout
      </button>
    </div>
  );
};

export default UserPage;
