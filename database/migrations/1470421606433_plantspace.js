'use strict'

const Schema = use('Schema')

class PlantspaceSchema extends Schema {

  up () {
    this.create('plantspace', (table) => {
      table.increments()
      table.integer('plant_id')
      table.integer('space_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('plantspace')
  }

}

module.exports = PlantspaceSchema