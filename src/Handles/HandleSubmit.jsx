import FetchData from "../FetchData";
import { firestore } from "../Firebase";
import { useContext } from "react";
import { AppContext } from "../AppContext"
import {
    collection,
    addDoc,
       } from "firebase/firestore";

const { text, user } = useContext(AppContext)

const handleSubmit = (event) => {

    event.preventDefault();
    if (text.length > 3 && text.length > 3) {
    const tweetsCollection = collection(firestore, "tweets");
    addDoc(tweetsCollection, {
        user: user,
        content: text
    }).then(() => {
        FetchData();
    });
    }
};

export default handleSubmit;