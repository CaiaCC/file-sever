const net = require('net');

const stdin = process.stdin;
stdin.setEncoding('utf-8');

const client = net.createConnection({
    host: 'localhost',
    port: 3000,
});

client.setEncoding('utf-8');

client.on('connect', () => {
    stdin.on('data', (data) => {
        client.write(data);
    })
})

client.on('data', (data) => {
    console.log(data);
})


