const db = require('../data/db-config.js');

module.exports = {
  all
}

async function all() {
  return await db('projects');
}
