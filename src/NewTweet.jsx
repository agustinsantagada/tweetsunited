import React from "react";
import Autenticator from "./Autenticator.jsx";
import handleSubmit from "./Handles/HandleSubmit";
import HandleDelete from "./Handles/HandleDelete";
import HandleEdit from "./Handles/HandleDelete";
import HandleFavourite from "./Handles/HandleFavorite";
import HandleUnFavourite from "./Handles/HandleUnfavorite";
import { firestore } from "./Firebase"
import { AppContext } from "./AppContext"
import { useContext } from "react";


const NewTweet = () => {

  const { text, setText } = useContext(AppContext)

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <textarea
          type="text"
          placeholder="What's happening?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button>POST!</button>
      </form>
    </div>
  );
}

export default NewTweet;