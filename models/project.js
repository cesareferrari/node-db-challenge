const db = require('../data/db-config.js');

module.exports = {
  all,
  create
}

async function all() {
  return await db('projects');
}

async function create(projectData) {
  return await db('projects').insert(projectData);
}
