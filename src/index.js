import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './component/Menu';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from "./routes/index";
const router = createBrowserRouter(
  routes
);

// Dans votre composant racine, enveloppez votre application avec AuthProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Menu />
      <App />
  </React.StrictMode>
);// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
