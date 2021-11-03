import FetchData from "../FetchData";
import { firestore } from "firebase";
import {
    doc,
    deleteDoc
  } from "firebase/firestore";



const HandleDelete = (e) => {
    deleteDoc(doc(firestore, "Tweets", e.id)).then(() => {
      FetchData();
    });
  };



  export default HandleDelete;
  