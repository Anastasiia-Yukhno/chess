const express = require('express');
const cors = require('cors');
var app = express();
var http = require('http').Server(app);

const io = require("socket.io")(http, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
  }
});

app.use(express.static('public'));
app.use(cors());



let gamers = [];

let cleanSocket = (gamer) => {
  let copy = { ...gamer };
  delete copy.socket;
  return copy;
};

let emitGamers = () => io.emit("gamers", gamers.map(cleanSocket));

let thisGamer = (s) => gamers.filter((g) => g.socket === s)[0];
let gamerById = (id) => gamers.filter((g) => g.id === id)[0];

io.on("connection", (socket) => {
  socket.emit("hi", { id: socket.id });
  socket.on("disconnect", () => {
    gamers = gamers.filter((n) => n.socket !== socket);
    emitGamers();
  });

  socket.on("conn", (msg) => {
    gamers.push({ nick: msg.nick, socket: socket, id: socket.id });
    emitGamers();
  });

  socket.on("newGame", (msg) => {
    let gamer = thisGamer(socket);
    gamer.newGame = msg.newGame;
    emitGamers();
  });

  socket.on("startGame", ({ id }) => {
    let gamer = thisGamer(socket);
    let enemy = gamerById(id);
    //console.log(id, gamers)
    if (enemy && enemy.newGame) {
      gamer.inGameWith = enemy.id;
      enemy.inGameWith = gamer.id;

      gamer.turn = Math.random() > 0.5;
      enemy.turn = !gamer.turn;
    }
    gamer.socket.emit("startGame", cleanSocket(gamer));
    enemy.socket.emit("startGame", cleanSocket(enemy));

    if (gamer.turn) gamer.socket.emit("turn");
    else enemy.socket.emit("turn");

    emitGamers();
  });

  socket.on("turn", (data) => {
    let gamer = thisGamer(socket);
    let enemy = gamerById(gamer.inGameWith);
    if (
      gamer &&
      enemy &&
      gamer.inGameWith === enemy.id &&
      enemy.inGameWith === gamer.id &&
      gamer.turn
    ) {
      gamer.turn = !gamer.turn;
      enemy.turn = !enemy.turn;
      enemy.socket.emit("turn", data);
    }
  });
});

http.listen(4000, function () {
  console.log(`listening`);
});
