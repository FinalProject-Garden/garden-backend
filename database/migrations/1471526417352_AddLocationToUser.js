'use strict'

const Schema = use('Schema')

class AddLocationToUserSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.string('location')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('location')
    })
  }

}

module.exports = AddLocationToUserSchema
