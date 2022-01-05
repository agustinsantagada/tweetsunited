import { firestore } from "./Firebase";
import {
    collection,
    doc,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    orderBy,
    where
  } from "firebase/firestore";
  const tweetsCollection = collection(firestore, "tweets")
  
  
export const getTweets = async () => {
      const tweetsCreation = [];
      const tweetsSnapshot = await getDocs(query(tweetsCollection, orderBy('fecha', "desc")))
      // const tweetsSnapshot = await getDocs(tweetsCollection);
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

export const getTweetsByUser = async (userId) => {
  const tweets = []
  const filteredTweetsCollection = query(tweetsCollection, where("user", "==", userId), orderBy("date"));
  const filteredTweetsSnapshot = await getDocs(filteredTweetsCollection);
  filteredTweetsSnapshot.forEach((tweet) => {
    if (tweet.data().user === userId) {
      tweets.push({...tweet.data(), user: tweet.id});
    }
  });
  return tweets;
};


export const getTweetsByUserLike = async (userId) => {
  const tweets = []
  const filteredTweetsCollection = query(tweetsCollection, where("user", "==", userId), where("favourite", "==", true), orderBy("date"));
  const filteredTweetsSnapshot = await getDocs(filteredTweetsCollection);
  filteredTweetsSnapshot.forEach((tweet) => {
    if (tweet.data().user === userId) {
      tweets.push({...tweet.data(), user: tweet.id});
    }
  });
  return tweets;
};





