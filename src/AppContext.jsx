import React, { useState, createContext} from "react";

export const AppProvider = (props) => {
    const [data, setData] = useState(true);
    const [userLogin, setUserLogin] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [error, setError] = useState("");
    const [tweets, setTweets] = useState([]);
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
            setTweets
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export const AppContext = createContext();

