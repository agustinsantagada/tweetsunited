
// import { AppContext } from "./AppContext"
// import { useContext } from "react";
// import { firestore } from "./Firebase"
// import {
//     collection,
//     getDocs,
//   } from "firebase/firestore";

// const fetchData = (setTweets) => {

//     const tweetsCollection = collection(firestore, "Tweets");
//     const tweetsCreation = [];

//     getDocs(tweetsCollection).then((results) => {
//       results.forEach((e) => {
//         console.log(e.id);
//         // console.log(e.data());
//         tweetsCreation.push({ ...e.data(), id: e.id });
//       });
//       setTweets(tweetsCreation);
//     });
//   };

//   export default fetchData;