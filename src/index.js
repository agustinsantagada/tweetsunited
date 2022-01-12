import App from './Context/App';
import React from "react"
import ReactDOM from 'react-dom';
import { AppProvider } from "./Context/AppContext"
import './Styles/index.css';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);


