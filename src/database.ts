import * as mongoose from 'mongoose';

interface MongoDBConfig {
  url: string;
}

class Database {
  url: string;
  
  constructor (config: MongoDBConfig) {
    this.url = config.url;     
    this.init();
  }
  
  init () {
    mongoose.connect(this.url);
  }
}

export default Database;
