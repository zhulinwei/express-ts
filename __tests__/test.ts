import App from '../app'
import * as request from 'supertest';

const app = new App(3000);

test('做个简单的集成测试1', (done) => {
  return request(app.client()).get('/')
    .send()
    .then(res => {
      expect(res.status).toBe(200);
      done();
    }) 
})
