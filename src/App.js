import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import "./chessApp.css";
import ChessBoard from "./chessBoard";
import { getNewPosition } from "./store/state.js";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createStore } from "react";
import { Login } from "./Login.js";
import { io, connect } from "socket.io-client";

window.store = store;
let state = store.getState();

var socket = io("http://localhost:4000/");
socket.connect();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header state={state} />
        
        <Routes>
          <Route
            path="/"
            element={<Login state={state} socket={ socket}/> }
          />
          <Route
            path="/game"
            element={<ChessBoard state={state} socket={ socket}/>}
          />
          <Route
            path="/login"
            element={<Login state={state} socket={ socket}/> }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
