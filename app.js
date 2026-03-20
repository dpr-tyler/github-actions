const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const msg = 'Works on my machine.';
  const test = 'hello world';
  res.send(msg);
});

module.exports = app;
