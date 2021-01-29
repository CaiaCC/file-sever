const { Server } = require('http');
const net = require('net');

const server = net.createServer();

server.listen(3000, () => {
    console.log("Sever listening on port 3000");
});

server.on("connection", (client) => {
    console.log("New client connected!");
    client.write("You are connected to Caia's server.");
});

server.on("data", (data) => {
  console.log(data);
});
