'use strict'

const Schema = use('Schema')

class RemoveDefaultHeightSchema extends Schema {

  up () {
    this.table('gardens', (table) => {
      table.dropColumn('height')

    })
  }

  down () {
    this.table('gardens', (table) => {

    })
  }

}

module.exports = RemoveDefaultHeightSchema
