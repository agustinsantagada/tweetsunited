import React, { useEffect,useState } from "react";
import { AppContext } from "../Context/AppContext"
import { useContext } from "react";
import { getTweetsByUser }  from "../Hooks/FirebaseActions"
import { removeTweetsLikes }  from "../Hooks/FirebaseActions"
import { updateTweetsLike }  from "../Hooks/FirebaseActions"
import NotFound from "../Components/NotFound"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import "../Styles/MapTweets.css"

const MapTweetUser = () => {

  const { user, tweetsUser, setTweetsUser } = useContext(AppContext)

  const [style, setStyle] = useState("cont2");
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    const tweetsAqui = await getTweetsByUser(user.uid);
    console.log("Viene el user", user.uid)
    setTweetsUser(tweetsAqui)
  }

  useEffect(()=> {
    fetchData();
  }, [])

  const handleDelete = async (tweet) => {
    await removeTweetsLikes(tweet);
    
    fetchData();
  }

  const handleLike = async (tweet) => {
    await updateTweetsLike(tweet, {
      favourite: true,
      counter:
      typeof tweet.counter === "number" ? tweet.counter + 1 : 1
    })
      fetchData();
  };

  const handleUnLike = async (tweet) => {
    await updateTweetsLike(tweet, {
      favourite: false,
      counter:
      tweet.user === user.uid && typeof tweet.counter === "number" ? tweet.counter - 1 : 2
    })
      fetchData();
  };



  if (loading === true) {
    return ( 
      <div className="spinner"></div>
    ) } else if (loading ===  false) {
      return (
        <div className="App">
          <div>
            {tweetsUser.map((tweet, index) => {
              console.log("Viene el tweeeter", tweet)
              return (
                <div className="MapTweet-tweet" key={tweet.nickName}>
                  <div className="MapTweet-photo-container">
                    <img className="MapTweet-photo" src={tweet.image} width="50px" alt="" />
                  </div>
                 <div className="tweet-box">
                  <div className="tweet-top"> 
                  <div className="tweet-top-date-user"> 
                    <h3 className="tweet-user" style={{
                      backgroundColor: tweet.color.hex}}>{tweet.nickName}</h3>
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
          )
        } else { return (<NotFound/>) }
    }

export default MapTweetUser


