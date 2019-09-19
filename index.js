const express = require('express');
const port = 9090;

const app = express();

app.use(express.static('public'));

const server = app.listen(port, function() {
  console.log('server is listening on port 9090');
})