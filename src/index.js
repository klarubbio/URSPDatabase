import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
//import App from './App';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Database from "./pages/Database";
import reportWebVitals from './reportWebVitals';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="database" element={<Database />} />
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
