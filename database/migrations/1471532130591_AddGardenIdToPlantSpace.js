'use strict'

const Schema = use('Schema')

class AddGardenIdToPlantSpaceSchema extends Schema {

  up () {
    this.table('spaces', (table) => {
      table.integer('plant_id')
      table.integer('dom_id')
    })
  }

  down () {
    this.table('spaces', (table) => {
      table.dropColumn('plant_id')
      table.dropColumn('dom_id')
    })
  }

}

module.exports = AddGardenIdToPlantSpaceSchema
