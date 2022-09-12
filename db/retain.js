const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// b8c94b71-acb2-4405-9d0f-d8833289bb32

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);



module.exports = new retain(); 