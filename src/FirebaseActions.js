import { firestore } from "./Firebase";
import {
    collection,
    doc,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    where
  } from "firebase/firestore";

  const tweetsCollection = collection(firestore, "tweets")
  
export const getTweets = async () => {
      const tweetsCreation = [];
      const tweetsSnapshot = await getDocs(tweetsCollection);
      tweetsSnapshot.forEach((tweet) => {
        tweetsCreation.push({...tweet.data(), id: tweet.id});
      });
      return tweetsCreation;
};

export const addTweet = async (tweet) => {
    const newTweet = await addDoc(tweetsCollection, tweet);
    return newTweet;
};

export const removeTweets = async (tweet) => {
    const postDoc = doc(tweetsCollection, tweet.id)
    const delTweet = await deleteDoc(postDoc);
    return delTweet;
};

export const updateTweets = async (tweet, upd ) => {
  const postDoc = doc(tweetsCollection, tweet.id)
  const updTweet = await updateDoc(postDoc, upd)
  return updTweet;
};

// export const getTweetsByUser = async (userId) => {
//   const tweetsCreation = [];
//   const filteredTweetsCollection = query(tweetsCollection, where("user.id", "==", userId));
//   const filteredTweetsSnapshot = await getDocs(filteredTweetsCollection);
//   filteredTweetsSnapshot.forEach((tweet) => {
//     if (tweet.data().user.id === userId) {
//     tweetsCreation.push({...tweet.data(), id: tweet.id});
//     }
//   });
//   return tweetsCreation;
// };



