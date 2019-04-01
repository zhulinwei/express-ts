import express from 'express';

import { Router } from './interface.test.ts';
import { TestController } from './controller.test.ts';

class TestRouter implements Router {
  path = '/test';
  router = express.Router();
  testController = new TestController();

  constructor () {
    this.init();
  }

  private init() {
    this.router.get(this.path, this.testController.get);
  }
}
