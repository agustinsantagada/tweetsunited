import React, { useContext } from "react";
import { AppContext } from "./AppContext"
import { getTweets }  from "./FirebaseActions"
import { addTweet }  from "./FirebaseActions"
import { getTweetsByUser }  from "./FirebaseActions"

export default function NewPost() {

  const { user, text, setText, setTweets, setTweetsUser } = useContext(AppContext);

  const fetchDataUser = async () => {
    const tweetsAqui = await getTweetsByUser(user.uid);
    console.log("Viene el user", user.uid)
    setTweetsUser(tweetsAqui)
  }

  const fetchData = async () => {
    const tweetsAqui = await getTweets();
    // console.log("Viene el NEW USER", user.uid)
    setTweets(tweetsAqui)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTweet({
      user: user.uid,
      fecha: new Date(), 
      displayName: user.displayName,
      text: text
      });
    setText("");
    fetchData();
    fetchDataUser();
  };

  return (
    <div>
      <form>
        <textarea
          type="text"
          placeholder="Mensaje de texto"
          value={text}
          onChange={(tweet) => {setText(tweet.target.value)}}></textarea>
        <button onClick={handleSubmit}>POST!</button>
      </form>
    </div>
  );
}


 // if (text.length > 3 && text.length > 3) {
    // console.log("Hola", user, text)
    // const tweetsCollection = collection(firestore, "tweets");
    // addDoc(tweetsCollection, {
    //     fecha: new Date(),
    //     user: user.displayName,
    //     text: text
    // }).then((resultado) => {
    //     fetchData()
    //     console.log("ENTRANDO")
    // });
    // }