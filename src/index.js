import App from './Context/App';
import React from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context/AppContext"
import './Styles/index.css';

ReactDOM.render(
  <AppProvider>
    <BrowserRouter forceRefresh={true}>
        <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
);


