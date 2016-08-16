'use strict'

const Schema = use('Schema')

class AddHeightToGardenSchema extends Schema {

  up () {
    this.table('gardens', (table) => {
      table.integer('height')
    })
  }

  down () {
    this.table('gardens', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddHeightToGardenSchema
