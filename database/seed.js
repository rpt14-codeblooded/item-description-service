const {itemSpecifics} = require('./index.js');
const {save} = require('./index.js');
const data = require('./fakeData');
const {deleteDb} = require('./index.js');

deleteDb();
save(data, itemSpecifics);