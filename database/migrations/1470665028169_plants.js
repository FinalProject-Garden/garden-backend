'use strict'

const Schema = use('Schema')

class PlantsSchema extends Schema {

  up () {
    this.table('plants', (table) => {
      table.string('category')
    })
  }

  down () {
    this.table('plants', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = PlantsSchema
