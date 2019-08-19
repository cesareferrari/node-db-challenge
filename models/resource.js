const db = require('../data/db-config.js');

module.exports = {
  all,
  create
}

async function all() {
  return await db('resources');
};

async function create(resourceData){
  return await db('resources').insert(resourceData);
};
