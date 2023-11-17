// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));
import axios from "axios"

axios.get("http://localhost:3000/data").then((res) => {
    console.log(res);
})
