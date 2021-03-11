const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');
// const connection1 = connect();
console.log('connecting...');

setupInput(connect());