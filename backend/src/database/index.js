const mongoose = require('mongoose');

class Database{
  constructor() {
    this.mongo();
  }

  mongo() {
      this.mongoConnection = mongoose.connect(
        'mongodb://192.168.1.104:27017/tractian',
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
      ).catch(error => console.log('Erro ao conectar ao banco de dados: ',error.message));
  }
}

module.exports = new Database();