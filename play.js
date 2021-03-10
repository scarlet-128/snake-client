const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542,
    password:820368
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  console.log("you ded cuz you idled");
  return conn;
}

console.log('Connecting ...');
connect();