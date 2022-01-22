import React, { useState, createContext} from "react";

export const colors = [
    { name: "Blanco", hex: "#fff" },
    { name: "Rojo", hex: "#F50D5A" },
    { name: "Naranja", hex: "#FF865C" },
    { name: "Amarillo", hex: "#FFEA5C" },
    { name: "Verde", hex: "#00DA76" },
    { name: "Azul", hex: "#0096CE" },
    { name: "Violeta", hex: "#800FFF" }
  ];

export const AppProvider = (props) => {
    const [data, setData] = useState(true);
    const [userLogin, setUserLogin] = useState();
    const [user, setUser] = useState();
    const [id, setId] = useState();
    const [error, setError] = useState("");
    const [tweets, setTweets] = useState([]);
    const [tweetsUser, setTweetsUser] = useState([]);
    const [tweetsLikes, setTweetsLikes] = useState([]);
    const [text, setText] = useState("");
    const [fecha, setFecha] = useState("");
    const [nickName, setNickName] = useState();
    const [nick, setNick] = useState();
    const [color, setColor] = useState(colors[0]);
    
    return(
        <AppContext.Provider 
        value={{
            id,
            setId,
            fecha,
            setFecha,
            data,
            setData,
            userLogin, 
            setUserLogin,
            user,
            setUser,
            error,
            setError,
            text,
            setText,
            tweets,
            setTweets,
            tweetsUser,
            setTweetsUser,
            tweetsLikes,
            setTweetsLikes,
            nickName,
            setNickName,
            nick,
            setNick,
            color,
            setColor
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export const AppContext = createContext();

