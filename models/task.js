const db = require('../data/db-config.js');
const Helper = require('../helpers/project-helper.js');

module.exports = {
  all, 
  create
}

async function all() {
  const tasks = await db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('p.name as project_name', 'p.description as project_description', 't.description', 't.notes','t.completed');

  tasks.forEach(task => Helper.markCompletedAsTrue(task) );
  return tasks;
};

async function create(taskData) {
  return await db('tasks').insert(taskData);
};
