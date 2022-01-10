import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapTweet from "./MapTweet"
import NewTweet from "./NewTweet"
import UserBar from "./UserBar"
import ProfilePage from "./ProfilePage"
import "./Styles/ProfileBar.css"

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