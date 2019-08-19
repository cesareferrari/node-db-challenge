const db = require('../data/db-config.js');
const Helper = require('../helpers/project-helper.js');

module.exports = {
  all, 
  create
}

async function all() {
  const tasks = await db('tasks');
  tasks.forEach(task => Helper.markCompletedAsTrue(task) );
  return tasks;
};

async function create(taskData) {
  return await db('tasks').insert(taskData);
};
