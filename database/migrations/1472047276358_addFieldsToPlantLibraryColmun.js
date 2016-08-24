'use strict'

const Schema = use('Schema')

class AddFieldsToPlantLibraryColmunSchema extends Schema {

  up () {
    this.table('plants', (table) => {
      table.integer('height');
      table.text('fertilizing');
    })
  }

  down () {
    this.table('add_fields_to_plant_library_colmun', (table) => {
      table.dropColumn('height');
      table.dropColumn('fertilizing');
    })
  }

}

module.exports = AddFieldsToPlantLibraryColmunSchema