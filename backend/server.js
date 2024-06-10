const express = require("express");
const app = express();

const server = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);

//routes
app.get('/', (req, res) => {
    res.send("hello this is server");
});

// when new user join it shows "user connected"
io.on("connection", (socket) => {
    console.log("user Connected");
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server is running on http://localhost:5000"));  
