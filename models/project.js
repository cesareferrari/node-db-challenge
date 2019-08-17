const db = require('../data/db-config.js');

module.exports = {
  all,
  create
}

async function all() {
  const projects = await db('projects');
  projects.forEach(project => { markCompletedAsTrue(project) });
  return projects;
}

async function create(projectData) {
  return await db('projects').insert(projectData);
}

function markCompletedAsTrue(project) {
  project.completed ? project.completed = true : project.completed = false;
}
