module.exports = {
  markCompletedAsTrue
}

function markCompletedAsTrue(project) {
  project.completed ? project.completed = true : project.completed = false;
}
