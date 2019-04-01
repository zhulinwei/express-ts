import * as express from 'express';
import Dao from './src/dao';
import * as bodyParser from 'body-parser';
import TestRouter from './src/router';
import { ErrorHandler } from './src/middle';
import { MongoDBConfig } from './src/config';

class App {
  port: number;
  app: express.Application;

  constructor(port: number) {
    this.port = port;
    this.app = express();

    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRouters();
    this.initializeErrorHandle();
  }
  
  private initializeDatabase() {
    new Dao(MongoDBConfig);
  }
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeRouters() {
    const router = new TestRouter();
    this.app.use(router.routes())
  }

  private initializeErrorHandle() {
    const errorHandler = new ErrorHandler();
    this.app.use(errorHandler.httpErrorHandle);
    this.app.use(errorHandler.serverErrorHandle);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
