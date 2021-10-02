import React from "react";
import ReactDOM from "react-dom";
// import "./styles/index.less";
import "./styles/tailwindProd.css";
import "./styles/swiper-bundle.css";
import "./styles/app.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import MainContext from "./contexts/Index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainContext>
        <App />
      </MainContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
