import React, { useEffect, useState } from "react"
import { AppContext } from "../Context/AppContext"
import { useContext } from "react";
import { getTweets }  from "../Hooks/FirebaseActions"
import { removeTweets }  from "../Hooks/FirebaseActions"
import { updateTweets }  from "../Hooks/FirebaseActions"
import NotFound from "../Components/NotFound"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import "../Styles/MapTweets.css"
import swal from "sweetalert2";



const MapTweet = () => {

  const { user, tweets, setTweets } = useContext(AppContext)

  const [style, setStyle] = useState("cont2");
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    const tweetsAqui = await getTweets();
    setTweets(tweetsAqui)
  }

  useEffect(()=> {
    fetchData()
  },[])

  const handleDelete = (tweet) => {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00DA76',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      background: '#60265B',
      color: "white"
    }).then((result) => {
      if (result.isConfirmed) {
        removeTweets(tweet);
        fetchData();
        swal.fire({
          background: '#60265B',
          color: "white",
          title: 'Deleted!',
          text:'Your file has been deleted.',
          confirmButtonText: 'Ok',
          icon: 'success'
        })
      }
    })
    
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
          {tweets.map((tweet, index) => {
            return (
              <div className="MapTweet-tweet" key={tweet.id}>
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
                    {!tweet.counter &&  (
                    <button className="tweet-likes-button" onClick={()=>{handleLike(tweet)}}>
                      <span role="img" aria-label="favorito"><FavoriteBorderIcon style={{ fontSize: 12 }}/></span>
                    </button>
                    )}
                  {tweet.counter > 0 &&  (
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

export default MapTweet
