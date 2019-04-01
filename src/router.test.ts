import * as express from 'express';
import TestController from './controller.test';

export interface Router {
  path: string;
  router: express.Router;
}
class TestRouter implements Router {
  path = '/test';
  router = express.Router();
  testController = new TestController();

  constructor () {
    this.init();
  }

  private init() {
    this.router.get(this.path, this.testController.get);

    return this.router;
  }
}
