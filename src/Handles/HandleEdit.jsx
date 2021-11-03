import FetchData from "../FetchData";
import { firestore } from "firebase";
import {
    doc,
    updateDoc,
  } from "firebase/firestore";

const HandleEdit = (e) => {
    updateDoc(doc(firestore, "Tweets", e.id), {
      ...e,
      lastUpdate: new Date()
    }).then(() => {
      FetchData();
    });
  };

  export default HandleEdit;