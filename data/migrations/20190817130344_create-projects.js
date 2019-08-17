
exports.up = function(knex) {
  return (knex.schema
    .createTable('projects', t => {
      t.increments();
      t.string('name', 128).notNullable();
      t.string('description', 256);
      t.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', t => {
      t.increments();
      t.string('name', 128).notNullable().unique();
      t.string('description', 256);
    })
    .createTable('tasks', t => {
      t.increments();
      t.string('description', 256).notNullable();
      t.text('notes', 2000);
      t.integer('project_id').notNullable().unsigned().references('projects.id');
      t.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('project_resources', t => {
      t.increments();
      t.integer('project_id').notNullable().unsigned().references('projects.id');
      t.integer('resource_id').notNullable().unsigned().references('resources.id');
    })
  )
  
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  )
};
