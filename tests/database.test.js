const {getData} = require('../database/index.js');


test('it should return an object with id equal to 2', done => {
  function callback(data) {
    expect(data.id).toBe(2);
    done();
  }
  getData(2, callback);
});

test('it should return an object ', done => {
  function callback(data) {
    expect(typeof data).toBe('object');
    done();
  }
  getData(1, callback);
});
