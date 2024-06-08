const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

//routes
app.get('/', (req, res) => {
    res.send("hello this is server");
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server is running on http://localhost:5000"));  
