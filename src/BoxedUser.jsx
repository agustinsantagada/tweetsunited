import React from "react";

const BoxedUser = ({ photoURL, email, displayName, logout }) => {
  return (
    <div className="boxedUser">
      <img src={photoURL} width="50px" alt={displayName} />
      <h2>{displayName}</h2>
      <h3>{email}</h3>
      <button onClick={() => { logout() }} >
        Logout
      </button>
    </div>
  );
};

export default BoxedUser;
