import mongoose from 'mongoose';

interface MongoDBConfig {
  url: string;
}

class Dao {
  url: string;
  
  constructor (config: MongoDBConfig) {
    this.url = config.url;     
    this.init();
  }
  
  init () {
    mongoose.connect(this.url);
  }
}

export dafault Dao;
