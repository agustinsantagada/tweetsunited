import React, { useEffect, useContext } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import HandleSubmit from "./Handles/HandleSubmit";
import { firestore } from "./Firebase"
import { AppContext } from "./AppContext"

export default function NewPost() {

  const { user, text, setText, fecha, setTweets } = useContext(AppContext);
  
  // const HandleSubmit = (text, user, setTweets) => {

  //   const fetchData = () => {
  //   const tweetsCollection = collection(firestore, "Tweets");
  //   const tweetsCreation = [];
  //   getDocs(tweetsCollection).then((results) => {
  //     results.forEach((e) => {
  //       console.log(e.id);
  //       // console.log(e.data());
  //       tweetsCreation.push({ ...e.data(), id: e.id });
  //     });
  //     setTweets(tweetsCreation);
  //   });
  // };

  //   if (text.length > 3 && text.length > 3) {
  //   console.log("Hola", user, text)
  //   const tweetsCollection = collection(firestore, "tweets");
  //   addDoc(tweetsCollection, {
  //       fecha: new Date(),
  //       user: user.displayName,
  //       text: text
  //   }).then((resultado) => {
  //       fetchData()
  //       console.log("ENTRANDO")
  //   });
  //   }
  // };

  return (
    <div>
      <form 
      onSubmit={(event)=>{event.preventDefault(); HandleSubmit(text, user, fecha, setTweets)
        
        // .then(()=>{FetchaData()})
      }}
        >
        <textarea
          type="text"
          placeholder="Mensaje de texto"
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