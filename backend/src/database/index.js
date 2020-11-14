import mongoose from 'mongoose';

class Database{
  constructor() {
    this.mongo();
  }

  mongo() {
      this.mongoConnection = mongoose.connect(
        'mongodb://localhost:27017/tractian',
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
      );
  }
}

export default new Database();