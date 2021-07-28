import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import '../src/assets/css/bootstrap.min.css'
import $ from "jquery";

// theme
import "../src/assets/plugins/simplebar/css/simplebar.css"
import "../src/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
import "../src/assets/plugins/metismenu/css/metisMenu.min.css" 




import "../src/assets/css/pace.min.css" 


import "../src/assets/css/bootstrap.min.css"
// import "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
import "../src/assets/css/app.css" 
import "../src/assets/css/icons.css"

import "../src/assets/css/dark-theme.css" 
import "../src/assets/css/semi-dark.css" 
import "../src/assets/css/header-colors.css" 

/// end theme
// import "../src/assets/js/pace.min.js"


// import "../src/assets/js/bootstrap.bundle.min.js"
// import "../src/assets/js/jquery.min.js"
// import "../src/assets/plugins/simplebar/js/simplebar.min.js"
// import "../src/assets/plugins/metismenu/js/metisMenu.min.js"
// import "../src/assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"

// import "../src/assets/js/app.js"


// import "../src/assets/js/bootstrap.bundle.min.js"




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
