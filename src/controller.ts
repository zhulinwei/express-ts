import * as express from 'express';
import TestService from './service';

class TestController {
  testService = new TestService();

  async get (req: express.Request, res: express.Response) {
    const result = await this.testService.get();
    res.json({ message: 'express typescript demo result', result });
  }
}

export default TestController
