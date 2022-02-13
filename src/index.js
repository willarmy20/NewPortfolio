import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {themes} from './componenets/Themes'



export const ThemeContext = React.createContext(themes);

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themes}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

