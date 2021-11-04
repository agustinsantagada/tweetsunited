import FetchData from "../FetchData";
import { firestore } from "../Firebase";
import {
    doc,
    updateDoc,
  } from "@firebase/firestore";
  
  const HandleFavorite = (e) => {
    updateDoc(doc(firestore, "Tweets", e.id), {
      favorito: true,
      contador: e.contador ? e.contador + 1 : 1
    }).then(() => {
      FetchData();
    });
  };

  export default HandleFavorite;