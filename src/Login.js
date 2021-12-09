import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./login.css";
import ChessBoard from "./chessBoard";
import { Link } from "react-router-dom";
import { state } from "./store/state";
import { io } from "socket.io-client";
import store from "./store/store";

export const Login = ({ socket }) => {
  const [nick, setNick] = useState(state.nickName);
  const [isDisabled, setDisabled] = useState(true);
  const [ourId, setOurId] = useState("");
  let isLogin = true;
  let connectSocket, newGame, startGame;
  let enemyId;

  connectSocket = () => {
    socket.on("hi", ({ id }) => setOurId(id));

    socket.emit("conn", { nick: nick }); //our nick to  serverside
    socket.on("gamers", (gamers) => {
      gamers.reduce((str, { nick, newGame, id, inGameWith }) => {
        if (id !== ourId) {
          setDisabled(false);
        }
      });
      console.log(gamers);
    });
    socket.on("startGame", ({ inGameWith, turn }) => {
      //when someone else accept our game
      store.dispatch({ type: "SETINGAMEWITH", inGameWith });
      console.log("inGameWith: ", inGameWith);
      enemyId = inGameWith;
      store.dispatch({
        type: "SETNICK",
        nick: nick,
      });
      //time to init board
      //setSend(true);
    });
  };

  newGame = () => {
    socket.emit("newGame", { newGame: true });
  };

  startGame = (id) => socket.emit("startGame", { id });

  console.log(ourId);

  const addNick = (e) => {
    setNick(e.target.value);
  };

  return (
    <div className="form-container">
      <div className="form-login">
        <span> Your name </span>
        <Input
          className="inputName"
          onChange={(e) => addNick(e)}
          value={nick}
          bsSize="lg"
        />
        <div className="connect">
          <Input type="checkbox" onChange={connectSocket} />
          <label className="connectLabel">connect</label>
        </div>

        <div className="btnReady">
          <Input type="checkbox" onChange={newGame} />
          <label className="connectLabel">I`m ready</label>
        </div>

        <div className="btnPlay">
          <Link  to={nick ? "/game" : false}>
            <Button
              color="light"
              outline
              size="lg"
              onClick={() => startGame(ourId)}
            
            >
              Play
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
