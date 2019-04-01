import testModel from './modle.test';

class TestService {
  async get () {
    return await testModel.find() 
  }
}

export default TestService;
