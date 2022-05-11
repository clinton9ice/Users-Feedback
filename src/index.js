import React from "react";
import ReactDOM from "react-dom";

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/index.css";

// Import component 
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        < App / >
    </React.StrictMode>,
    document.querySelector("#root"))