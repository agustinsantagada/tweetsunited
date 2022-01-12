import React from "react";
import "../Styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound-Box">
        <img width="100" src="/Images/notfound.svg" alt="notfound" />
        <p className="NotFound">Lo sentimos, no encontramos ningún Tweet.</p>
      </div>
    </div>
  );
}