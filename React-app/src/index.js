import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WebSockets from "./WebSockets";

//uncomment this line to run the websockets for room broadcasting
// import WebSocketsRooms from "./WebSocketsRooms";

ReactDOM.render(
  <React.StrictMode>
    {/* uncomment this line to run the websockets for room broadcasting */}

    {/* <WebSocketsRooms /> */}

    {/* component that runs broadcasting to users messages and sending to specific user*/}
    <WebSockets />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
