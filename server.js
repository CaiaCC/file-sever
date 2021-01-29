const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.listen(3000, () => {
    console.log("Sever listening on port 3000");
});

server.on("connection", (client) => {
    console.log("New client connected!");
    client.setEncoding("utf8");

    client.write("You are connected to the server. Which file do you want?");

    client.on("data", (data) => {
      const path = `./files/${data.trim()}`;

      if (!fs.existsSync(path)) {
        client.write(`${data} doesn't exist.`);
      }

      fs.readFile(path, 'utf-8', (err, data) => {
          if (err) {
            client.write(`Fail to fetch file. Error message: ${err}`);
          }

          client.write(`File fetch successful. File: ${data}`);
      })
      
    });
  });
  
  const callback = (err, data) => {
    if (err) {
      client.write(`Fail to fetch file. Error message: ${err}`);
    } else {
      client.write(`File fetch successful. File: ${data}`);
    }
  }
  
