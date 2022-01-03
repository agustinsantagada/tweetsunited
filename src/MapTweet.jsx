import React, { useEffect } from "react";
import { AppContext } from "./AppContext"
import { useContext } from "react";
import { getTweets }  from "./FirebaseActions"
import { removeTweets }  from "./FirebaseActions"
import { updateTweets }  from "./FirebaseActions"


const MapTweet = () => {

  const { id, user, tweets, setTweets } = useContext(AppContext)

  const fetchData = async () => {
    const tweetsAqui = await getTweets();
    setTweets(tweetsAqui)
  }

  useEffect(()=> {
    fetchData()
  },[])

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
          <h2>Listado de tweets</h2>
          {tweets.map((tweet, index) => {
            console.log(user)
            return (
              <div key={tweet.id}>
                <h3>{tweet.displayName}</h3>
                <p>{tweet.text}</p>
                <p>{new Date(tweet.fecha?.seconds * 1000).toLocaleString("en")}</p>
                <h1>{tweet.counter}</h1>
                
                {tweet.user === user.uid ? 
                <button onClick={()=>{handleDelete(tweet)}}>Borrar</button>  
                : null }  
          
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

export default MapTweet
