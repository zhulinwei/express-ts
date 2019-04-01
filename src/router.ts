import * as express from 'express';
import TestController from './controller';

interface Router {
  path: string;
  router: express.Router;
}
class TestRouter implements Router {
  path = '/';
  router = express.Router();
  testController = new TestController();

  constructor () {
    this.init();
  }

  private init() {
    this.router.get(this.path, this.testController.get.bind(this.testController));
  }

  routes () {
    return this.router;
  }
}

export default TestRouter;
