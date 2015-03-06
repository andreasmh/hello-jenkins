var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello everyone', function(done) {
    request(app).get('/').expect('hello everyone', done);
  });
});
