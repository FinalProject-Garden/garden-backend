'use strict'

const Schema = use('Schema')

class AddLocationToUserSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.string('city')
      table.string('state')
      table.string('avatar')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('city')
      table.dropColumn('state')
      table.dropColumn('avatar')
    })
  }

}

module.exports = AddLocationToUserSchema
