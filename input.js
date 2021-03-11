const net = require('net');
const { connect } = require('./client');
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(key){
    if (key === '\u0003') {
      process.exit();
    } else if (key === "\033[A") {
      conn.write("Move: up");
    } else if (key === '\033[D') {
      conn.write("Move: left");
    } else if (key === '\033[B') {
      conn.write("Move: down");
    } else if (key === '\033[C') {
      conn.write("Move: right");
    } else {
      conn.write("Say:BUB");
    }
  }
  stdin.on('data',handleUserInput)
  return stdin;
}
setupInput();
module.exports = {
  setupInput
}