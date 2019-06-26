const axios = require('axios');
const fetchData = () => {
  return axios.get('http://127.0.0.1:3001/api/items/2')
  .then((result) => result.data)
  .catch((err) => 'error');
};
test('fetchData should be an object with id 2',() => {
   expect.assertions(1);
   return fetchData()
  .then(data => {
    expect(typeof data).toBe('object');
  })
});
