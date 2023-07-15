import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
ReactDOM.render(
    <div className="movies">
        <h1>Best Movies</h1>
        <App />
    </div>
    , document.querySelector('.root')
    )