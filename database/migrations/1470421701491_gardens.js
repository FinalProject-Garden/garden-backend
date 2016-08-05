'use strict'

const Schema = use('Schema')

class GardensSchema extends Schema {

  up () {
    this.create('gardens', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('name')
      table.string('tags')
      table.boolean('status').defaultTo(false)
      table.integer('width')
      table.integer('height').defaultTo(4)
      table.timestamps()
    })
  }

  down () {
    this.drop('gardens')
  }

}

module.exports = GardensSchema