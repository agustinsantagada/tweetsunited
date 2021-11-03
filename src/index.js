import App from './App';
import React from "react"
import ReactDOM from 'react-dom';
import { AppProvider } from "./AppContext"
import './index.css';


ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);


