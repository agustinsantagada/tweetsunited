import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext"
import { useContext } from "react";
import { getTweets }  from "./FirebaseActions"
import { removeTweets }  from "./FirebaseActions"
import { updateTweets }  from "./FirebaseActions"
import "./Styles/MapTweets.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'


const MapTweet = () => {

  const { color, user, tweets, setTweets, nickName } = useContext(AppContext)

  const [style, setStyle] = useState("cont2");

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

  const changeStyle = () => {
    setStyle("cont2");

  };

    return (
      <div className="App">
        <div>
          {tweets.map((tweet, index) => {
            return (
              <div className="MapTweet-tweet" key={tweet.id}>
                <div className="MapTweet-photo-container">
                  <img className="MapTweet-photo" src={user.photoURL} width="50px" alt="" />
                </div>
               <div className="tweet-box">
                <div className="tweet-top"> 
                <div className="tweet-top-date-user"> 
                  <h3 className="tweet-user" style={{
                    backgroundColor: color.hex}}>{nickName}</h3>
                  <h3 className="tweet-date" >{new Date(tweet.fecha?.seconds * 1000)
                  .toLocaleDateString(undefined, {
                    month: 'short',
                    day:   'numeric',
                })}</h3>
                </div>
                  {tweet.user === user.uid ? 
                      <button className="tweet-delete" onClick={()=>{handleDelete(tweet)}}><DeleteOutlineIcon style={{ fontSize: 12 }}/></button>  
                      : null }  
                </div>
                <div className="tweet-box-container">
                  <p className="tweet-txt">{tweet.text}</p>
                </div>
              <div className="tweet-bottom">   
                    <h1 className={style}>{tweet.counter}</h1>
                    {!tweet.counter && (
                    <button className="tweet-likes-button" onClick={()=>{handleLike(tweet)}}>
                      <span role="img" aria-label="favorito"><FavoriteBorderIcon style={{ fontSize: 12 }}/></span>
                    </button>
                    )}
                  {tweet.counter > 0 && (
                      <button className="tweet-likes-button" onClick={() => {handleUnLike(tweet)}}>
                        <span role="img" aria-label="No Favorito"><FavoriteIcon style={{ fontSize: 12, fill: "red"  }}/></span>
                      </button>
                    )}
              </div>
                </div>
              </div>

            );
          })}
        </div>
        
      </div>
    );
  }

export default MapTweet
