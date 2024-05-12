let http = require("http");
let socket_io = require("socket.io");
let express = require("express");
const uuid = require("uuid");
const fs = require('fs')

let app = express();
app.use(express.static('public'));
let server = http.createServer(app);
let io = new socket_io.Server(server);

let active_users = 0;

io.on("connection", (socket) => {
    active_users++;
    io.emit("users", active_users);
    socket.on("disconnect", () => {
        active_users--;
        io.emit("users", active_users);
    });
});

app.get("/", (req, res) => {res.sendFile(__dirname + "index.html");});
server.listen(8004);
console.log("Server running on port 8004.");