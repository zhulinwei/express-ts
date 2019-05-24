import * as express from 'express';
import * as bodyParser from 'body-parser';
import Database from './src/database';
import TestRouter from './src/router';
import { ErrorHandler } from './src/middle';
import { MongoDBConfig } from './src/config';

class App {
  port: number;
  app: express.Application;

  constructor (port: number) {
    this.port = port;
    this.app = express();

    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRouters();
    this.initializeErrorHandle();
  }
  
  private initializeDatabase () {
    new Database(MongoDBConfig);
  }
  private initializeMiddlewares () {
    this.app.use(bodyParser.json());
  }

  private initializeRouters () {
    const router = new TestRouter();
    this.app.use(router.routes())
  }

  private initializeErrorHandle () {
    const errorHandler = new ErrorHandler();
    this.app.use(errorHandler.httpErrorHandle);
    this.app.use(errorHandler.serverErrorHandle);
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  client() { return this.app; }
}

export default App;
