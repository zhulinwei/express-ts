import testModel from './module.test.ts';

class TestService {
  async get () {
    return await testModel.find() 
  }
}

export default TestService;
