import testModel from './modle';

class TestService {
  async get () {
    return await testModel.find() 
  }
}

export default TestService;
