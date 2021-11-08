import FetchData from "../FetchData";
import { firestore } from "../Firebase";
import { useEffect, useState } from "react";
import { AppContext } from "../AppContext"
import {
    collection,
    addDoc,
    getDocs
       } from "firebase/firestore";



const HandleSubmit = (text, user, setTweets) => {


    const fetchData = (setTweets) => {

        const tweetsCollection = collection(firestore, "Tweets");
        const tweetsCreation = [];
    
        getDocs(tweetsCollection).then((results) => {
          results.forEach((e) => {
            console.log(e.id);
            // console.log(e.data());
            tweetsCreation.push({ ...e.data(), id: e.id });
          });
        //   setTweets(tweetsCreation);
        });
      };


    if (text.length > 3 && text.length > 3) {
    console.log("Hola", user, text)
    const tweetsCollection = collection(firestore, "tweets");
    addDoc(tweetsCollection, {
        fecha: new Date(),
        user: user.displayName,
        text: text
    }).then((resultado) => {
        FetchData()
        console.log("ENTRANDO")
    });
    }
};

export default HandleSubmit;