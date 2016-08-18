'use strict'

const Schema = use('Schema')

class AddFieldsToPlantsSchema extends Schema {

  up () {
    this.table('plants', (table) => {
      table.integer('seed_to_harvest')
      table.integer('seed_store')
      table.string('hardy')
      table.string('starting_location')
      table.text('seed_indoors')
      table.text('transplanting')
      table.text('seed_outdoors')
      table.text('harvesting_how')
      table.text('harvesting_when')
      table.text('maintenance')
      table.text('common_problems')
      table.string('harvesting_img_1')
      table.string('harvesting_img_2')

    })
  }

  down () {
    this.table('plants', (table) => {
      table.dropColumn('seed_to_harvest')
      table.dropColumn('seed_store')
      table.dropColumn('hardy')
      table.dropColumn('starting_location')
      table.dropColumn('seed_indoors')
      table.dropColumn('transplanting')
      table.dropColumn('seed_outdoors')
      table.dropColumn('harvesting_how')
      table.dropColumn('harvesting_when')
      table.dropColumn('maintenance')
      table.dropColumn('common_problems')
      table.dropColumn('harvesting_img_1')
      table.dropColumn('harvesting_img_2')      
    })
  }

}

module.exports = AddFieldsToPlantsSchema 