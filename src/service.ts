import testModel from './model';

class TestService {
  async get () {
    return await testModel.find() 
  }
}

export default TestService;
