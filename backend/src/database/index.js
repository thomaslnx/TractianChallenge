const mongoose = require('mongoose');

class Database{
  constructor() {
    this.mongo();
  }
  // 'mongodb://192.168.1.104:27017/tractian',
  // 'mongodb://200.101.111.185:27017/tractian',

  mongo() {
      this.mongoConnection = mongoose.connect(
        'mongodb+srv://thomaslnx:tractian@tractian.hgwr9.mongodb.net/tractian?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
      ).catch(error => console.log('Erro ao conectar ao banco de dados: ',error.message));
  }
}

module.exports = new Database();