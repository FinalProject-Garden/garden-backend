'use strict'

const Schema = use('Schema')

class PlantsSchema extends Schema {

  up () {
    this.table('plants', (table) => {
      table.string('image')
    })
  }

  down () {
    this.table('plants', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = PlantsSchema
