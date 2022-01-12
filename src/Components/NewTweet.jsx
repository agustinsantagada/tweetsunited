import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext"
import { getTweets }  from "../Hooks/FirebaseActions"
import { addTweet }  from "../Hooks/FirebaseActions"
import { getTweetsByUser }  from "../Hooks/FirebaseActions"
import "../Styles/NewTweet.css"

export default function NewPost() {

  const { user, text, nickName, color, setText, setTweets, setTweetsUser } = useContext(AppContext);

  const fetchDataUser = async () => {
    const tweetsAqui = await getTweetsByUser(user.uid);
    console.log("Viene el user", user.uid)
    setTweetsUser(tweetsAqui)
  }

  const fetchData = async () => {
    const tweetsAqui = await getTweets();
    setTweets(tweetsAqui)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTweet({
      user: user.uid,
      fecha: new Date(), 
      displayName: user.displayName,
      nickName: nickName,
      favourite: true,
      counter: 0,      
      text: text,
      image: user.photoURL,
      color: color
      });
    setText("");
    fetchData();
    fetchDataUser();
  };

  return (
    <div className="NewTweet-container">
      <div>
      <img className="NewTweet-photo" src={user.photoURL} width="50px" alt="" />
      </div> 
      <div className="NewTweet-form">
      <form className="NewTweet-txtarea">
        <textarea
          className="NewTweet-txtarea"
          type="text"
          placeholder="Mensaje de texto"
          value={text}
          onChange={(tweet) => {setText(tweet.target.value)}}></textarea>
      </form>
      <button className="NewTweet-button" onClick={handleSubmit}>POST</button>
      </div>
    </div>
  );
}