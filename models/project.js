const db = require('../data/db-config.js');
const Helper = require('../helpers/project-helper.js');

module.exports = {
  all,
  create,
  find,
  addTask
}

async function all() {
  const projects = await db('projects');
  projects.forEach(project => { Helper.markCompletedAsTrue(project) });
  return projects;
}

async function create(projectData) {
  return await db('projects').insert(projectData);
}

async function find(id) {
  db('projects').where({id});
};

async function addTask(taskData) {
  return await db('tasks').insert(taskData);
};

