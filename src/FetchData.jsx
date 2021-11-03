
import { AppContext } from "./AppContext"
import { useContext } from "react";

import {
    collection,
    getDocs,
    firestore
  } from "firebase/firestore";

const FetchData = () => {

    const { setTweets } = useContext(AppContext)
    const tweetsCollection = collection(firestore, "Tweets");
    const tweetsCreation = [];

    getDocs(tweetsCollection).then((results) => {
      results.forEach((e) => {
        console.log(e.id);
        // console.log(e.data());
        tweetsCreation.push({ ...e.data(), id: e.id });
      });
      setTweets(tweetsCreation);
    });
  };

  export default FetchData;