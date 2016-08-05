'use strict'

const Schema = use('Schema')

class SpacesSchema extends Schema {

  up () {
    this.create('spaces', (table) => {
      table.increments()
      table.integer('garden_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('spaces')
  }

}

module.exports = SpacesSchema