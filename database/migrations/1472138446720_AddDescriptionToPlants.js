'use strict'

const Schema = use('Schema')

class AddDescriptionToPlantsSchema extends Schema {

  up () {
    this.table('plants', (table) => {
      table.text('description')
    })
  }

  down () {
    this.table('plants', (table) => {
      table.dropColumn('description')
    })
  }

}

module.exports = AddDescriptionToPlantsSchema
