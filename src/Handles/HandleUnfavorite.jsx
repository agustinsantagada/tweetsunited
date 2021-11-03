import FetchData from "../FetchData";
import { firestore } from "firebase";
import {
    doc,
    updateDoc,
  } from "firebase/firestore";
  

  const HandleUnFavorite = (e) => {
    updateDoc(doc(firestore, "Tweets", e.id), {
      favorito: false,
      contador: e.contador ? e.contador - 1 : 1
    }).then(() => {
      FetchData();
    });
  };


export default HandleUnFavorite;