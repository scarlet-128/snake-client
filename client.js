const net = require('net');
const { IP, PORT, PASSWORD } = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
    password : PASSWORD
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    conn.write('Name:SUR')
    
    console.log('Successfully connected to game server');
  })
    conn.on('data', (data) => {
      console.log('Server says', data);
    });
  return conn;
  
};

module.exports = {
  connect
};