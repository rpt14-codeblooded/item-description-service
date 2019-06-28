
// Integration testing
const axios = require('axios');
const fetchData = () => {
  return axios.get('http://127.0.0.1:3001/2')
  .then((result) => result.data)
  .catch((err) => 'error');
};
test('fetchData should be an object with id 2',() => {
   expect.assertions(2);
   return fetchData()
  .then(data => {
    expect(typeof data).toBe('object');
    expect(data.id).toBe(2);
  })
});
