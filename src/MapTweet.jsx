import React from "react";
import Autenticator from "./Autenticator.jsx";
import HandleSubmit from "./Handles/HandleSubmit";
import HandleDelete from "./Handles/HandleDelete";
import HandleEdit from "./Handles/HandleDelete";
import HandleFavourite from "./Handles/HandleFavorite";
import HandleUnFavourite from "./Handles/HandleUnfavorite";
import { firestore } from "./Firebase"
import { AppContext } from "./AppContext"
import { useContext } from "react";
import "./styles.css";

const MapTweet = () => {

  const { user, setUser, setText, tweets } = useContext(AppContext)

return (
    <div className="App">
      {!user ? (
        <>
          <Autenticator />
        </>
      ) : (
        <form onSubmit={HandleSubmit}>
          <div>
            <label>Nombre: </label>
            <input type="text" onChange={(event) => {setUser(event.target.value)}}/>
          </div>
          <div>
            <label>Texto </label>
            <input type="text" onChange={(event) => { setText(event.target.value)}}/>
          </div>
          <button> Tweetear </button>
        </form>
      )}
      { tweets.map((e, index) => {
        return (
          <div>
            <h1 key={index}>
              Ultima Actualizacion: {""}
              {e.lastUpdate
                ? new Date(e.lastUpdate?.seconds * 1000).toLocaleString("en")
                : "No disponible"}
            </h1>
            <h1>{e.contador}</h1>
            <h1>{e.user}</h1>

            <button onClick={() => {HandleDelete(e)}}> eliminar </button>

            <button onClick={() => {HandleEdit(e)}}> Editar</button>
            {!e.favorito > 0 && (
              <button onClick={() => {HandleFavourite(e)}} > Favorito </button> )}
            {e.favorito && ( <button onClick={() => {HandleUnFavourite(e)}}> Desafavoritear </button> )}
          </div>
        );
      })}
    </div>
  )}

export default MapTweet