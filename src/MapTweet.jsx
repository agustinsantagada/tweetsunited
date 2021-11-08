import React, { useEffect } from "react";
import Autenticator from "./Autenticator.jsx";
import HandleSubmit from "./Handles/HandleSubmit";
import HandleDelete from "./Handles/HandleDelete";
import HandleEdit from "./Handles/HandleDelete";
import HandleFavourite from "./Handles/HandleFavorite";
import HandleUnFavourite from "./Handles/HandleUnfavorite";
import { firestore } from "./Firebase"
import { AppContext } from "./AppContext"
import { useContext } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";



const MapTweet = () => {

  const { tweets, setTweets } = useContext(AppContext)
  
       useEffect(() => {
        const tweetsCollection = collection(firestore, "tweets");
        const tweetsCreation = [];

        getDocs(tweetsCollection).then((results) => {
          results.forEach((e) => {
            console.log(e.id);
            tweetsCreation.push({ ...e.data(), 
              id: e.id });
          });
          setTweets(tweetsCreation);
        });
      }, []);

    return (
      <div className="App">
        <div>
          <h2>Listado de tweets</h2>
          {tweets.map((e) => {
            return (
              <div key={e.id}>
                <h3>{e.user}</h3>
                <p>{e.text}</p>
                <p>{new Date(e.fecha?.seconds * 1000).toLocaleString("en")}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

export default MapTweet