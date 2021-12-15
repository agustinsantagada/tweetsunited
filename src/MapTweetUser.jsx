import React, { useEffect } from "react";
import { AppContext } from "./AppContext"
import { useContext } from "react";
import { firestore } from "./Firebase";
// import { getTweetsByUser }  from "./FirebaseActions"
import { removeTweets }  from "./FirebaseActions"
import { updateTweets }  from "./FirebaseActions"
import {
    collection,
    getDocs,
    query,
    where
  } from "firebase/firestore";


const MapTweetUser = () => {

  const { user, tweets, setTweets } = useContext(AppContext)

  const tweetsCollection = collection(firestore, "tweets")

//     const getTweetsByUser = async (userId) => {
//     const tweetsCreation = [];
//     console.log("USER", user.uid)
//     const filteredTweetsCollection = query(tweetsCollection, where("user.uid", "==", userId));
//     const filteredTweetsSnapshot = await getDocs(filteredTweetsCollection);
//     filteredTweetsSnapshot.forEach((tweet) => {
//       if (tweet.data().user.uid === userId) {
//       tweetsCreation.push({...tweet.data(), uid: tweet.uid});
//       }
//     });
//     return tweetsCreation;
//   };

const getTweetsByUser = async (userId) => {
    const tweetsCreation = [];
    const tweetsSnapshot = await getDocs(tweetsCollection);
    tweetsSnapshot.forEach((tweet) => {
        if(tweet.data().user.id === userId){
        tweetsCreation.push({...tweet.data(), id: tweet.id});
        }
    });
    return tweetsCreation;
};


  const fetchData = async () => {
    const tweetsAqui = await getTweetsByUser(user.uid);
    console.log("Viene el user", user.uid)
    setTweets(tweetsAqui)
  }

  useEffect(()=> {
    fetchData();
  }, [])


  const handleDelete = async (tweet) => {
    await removeTweets(tweet);
    fetchData();
  }

  const handleLike = async (tweet) => {
    await updateTweets(tweet, {
      favourite: true,
      counter:
        typeof tweet.counter === "number" ? tweet.counter + 1 : 1
    })
    fetchData();
  };

  const handleUnLike = async (tweet) => {
    await updateTweets(tweet, {
      favourite: true,
      counter:
        typeof tweet.counter === "number" ? tweet.counter - 1 : 1
    })
    fetchData();
    
  };

    return (
      <div className="App">
        <div>
          <h2>Tweets Personales</h2>
          {tweets.map((tweet) => {
            return (
              <div key={tweet.id}>
                <h3>{tweet.displayName}</h3>
                <p>{tweet.text}</p>
                <p>{new Date(tweet.fecha?.seconds * 1000).toLocaleString("en")}</p>
                <h1>{tweet.counter}</h1>
                <button onClick={()=>{handleDelete(tweet)}}>Borrar</button>
                {!tweet.counter && (
                <button onClick={()=>{handleLike(tweet)}}>
                  <span role="img" aria-label="favorito">🧡</span>
                </button>
                )}
               {tweet.counter > 0 && (
                  <button onClick={() => {handleUnLike(tweet)}}>
                    <span role="img" aria-label="No Favorito">🖤</span>
                    UnLike
                    </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

export default MapTweetUser


