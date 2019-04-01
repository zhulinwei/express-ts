import express from 'express';
import TestService from './service.test.ts';

class TestController {
  testService = new TestService();

  async get (req: express.Request, res: express.Response) {
    return await this.testService.get();
  }
}

export default TestController
