import React, { useState, createContext} from "react";

export const AppProvider = (props) => {
    const [data, setData] = useState(true);
    const [userLogin, setUserLogin] = useState();
    const [user, setUser] = useState();
    const [error, setError] = useState("");
    const [tweets, setTweets] = useState([]);
    const [tweetsUser, setTweetsUser] = useState([]);
    const [text, setText] = useState("");
    const [fecha, setFecha] = useState("");

    
    return(
        <AppContext.Provider 
        value={{
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
            setTweetsUser
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export const AppContext = createContext();

