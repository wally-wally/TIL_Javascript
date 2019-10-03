'use strict';

const fs = require('fs');
const path = require('path');

const FILEPATH = path.join(__dirname, 'data.json');

exports.readFile = () => {
  try {
    fs.openSync(FILEPATH, 'r');
    const data = fs.readFileSync(FILEPATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw err;
  }
};

const writeFile = exports.writeFile = (data) => {
  if (typeof data !== 'string') data = JSON.stringify(data);

  try {
    fs.openSync(FILEPATH, 'wx');
    fs.writeFileSync(FILEPATH, data, 'utf8');
  } catch (err) {
    try {
      if (err.code === 'EEXIST') {
        fs.unlinkSync(FILEPATH);
        return writeFile(data);
      }
    } catch (err) {
      throw err;
    }
    throw err;
  }
};
