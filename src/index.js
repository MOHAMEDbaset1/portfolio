import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import{BrowserRouter, HashRouter} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

