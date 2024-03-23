import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ThemeProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
