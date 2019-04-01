import express from 'express';
import Dao from './src/test.dao.ts';
import testRouter from './src/test.router.test';
import { ErrorHandler } from './src/error.middle.ts';
import { MongoDBConfig } from './src/config.test.ts';

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

  private initializeRoutes() {
    const router = new TestRouter();
    this.app.use(router.init())
  }

  private initializeErrorHandle() {
    this.app.use(ErrorHandler);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
