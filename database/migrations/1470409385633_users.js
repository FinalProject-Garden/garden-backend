'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {

  up () {
    this.table('users', (table) => {
      table.dropColumn('github')
    })
  }

  down () {
    this.table('users', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = UsersSchema
