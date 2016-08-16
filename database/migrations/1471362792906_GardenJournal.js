'use strict'

const Schema = use('Schema')

class GardenJournalSchema extends Schema {

  up () {
    this.create('garden_journals', (table) => {
      table.increments()
      table.integer('garden_id')
      table.text('entry')
      table.timestamps()
    })
  }

  down () {
    this.drop('garden_journals')
  }

}

module.exports = GardenJournalSchema
