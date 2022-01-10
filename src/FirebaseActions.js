import { firestore } from "./Firebase";
import { 
    getAuth, 
    signOut
} from "firebase/auth";
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
  const auth = getAuth();
  
  
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

export const removeTweetsLikes = async (tweet) => {
  const postDoc = doc(tweetsCollection, tweet.user)
  const delTweet = await deleteDoc(postDoc);
  return delTweet;
};

export const updateTweets = async (tweet, upd ) => {
  const postDoc = doc(tweetsCollection, tweet.id)
  const updTweet = await updateDoc(postDoc, upd)
  return updTweet;
};

export const updateTweetsLike = async (tweet, upd ) => {
  const postDoc = doc(tweetsCollection, tweet.user)
  const updTweet = await updateDoc(postDoc, upd)
  return updTweet;
};

export const logout = async (tweets) => {
	await signOut(auth);
  return tweets;
};

export const getTweetsByUser = async (userId) => {
  const tweets = []
  const filteredTweetsCollection = query(tweetsCollection,where("user", "==", userId));
  const filteredTweetsSnapshot = await getDocs(filteredTweetsCollection);
  filteredTweetsSnapshot.forEach((tweet) => {
    if (tweet.data().user === userId) {
      tweets.push({...tweet.data(), user: tweet.id});
    }
  });
  return tweets;
};


export const getTweetsByLikes = async (userId) => {
  const tweets = []
  const filteredTweetsCollection = query(tweetsCollection,where("counter", ">=", 1));
  // const filteredTweetsCollection = query(tweetsCollection, where("user", "==", userId));
  const filteredTweetsSnapshot = await getDocs(filteredTweetsCollection);
  filteredTweetsSnapshot.forEach((tweet) => {
    if (tweet.data().user === userId) {
      tweets.push({...tweet.data(), user: tweet.id});
    }
  });
  return tweets;
};





