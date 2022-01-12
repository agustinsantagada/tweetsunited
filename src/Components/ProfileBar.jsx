import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewTweet from "../Components/NewTweet"
import MapTweet from "../Containers/MapTweet"
import UserBar from "../Pages/UserBar"
import ProfilePage from "../Pages/ProfilePage"
import "../Styles/ProfileBar.css"

export default function ProfileBar () {

    const [option, setOption] = useState('posts')

    const handleStyle = (state) => {
        if (option === state) {
          return { 
            backgroundColor: '#60265B',
            color: '#150714'
         }
        } else {
          return
        }
      }

    return (
        <div>
            <nav>
                <ul className="ProfileBar-bar">
                    <li className="ProfileBar-bar-list">
                        <Link className="ProfileBar-user"  
                        onClick = {() => {setOption('posts')}} 
                        style = {handleStyle('posts')} 
                        to="/ProfilePage">
                            POSTS
                        </Link>
                     </li>   
                        <li className="ProfileBar-bar-list">
                        <Link className="ProfileBar-favorites" 
                        onClick = {() => {setOption('favorites')}} 
                        style = {handleStyle('favorites')}  
                        to="/favorites">
                            FAVORITES
                        </Link>    
                    </li>
                </ul>
            </nav>
        </div>
    );
  }