import FetchData from "../FetchData";
import { firestore } from "firebase";
import { useContext } from "react";
import { AppContext } from "./AppContext"
import {
    collection,
    addDoc,
  } from "firebase/firestore";


const HandleSubmit = (event) => {
    const { text, user } = useContext(AppContext)

    event.preventDefault();
    console.log(text, user);
    if (text.length > 3 && text.length > 3) {
    const tweetsCollection = collection(firestore, "Tweets");
    addDoc(tweetsCollection, {
        user,
        text
    }).then(() => {
        FetchData();
    });
    }
};

export default HandleSubmit;