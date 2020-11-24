const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
    this.server.use(express.json());
    
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;