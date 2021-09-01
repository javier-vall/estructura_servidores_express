const express = require("express");
const emoji = require("node-emoji");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

io.on("connection", (socket) => {
  console.log(emoji.get("pizza"), "Usuario conectado")
  socket.on("disconnect", () => {
    console.log(emoji.get("fire"), "Usuario desconectado")
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {});

const PORT = 8080;

httpServer.listen(PORT, console.log(`Server on port = ${PORT}`));
