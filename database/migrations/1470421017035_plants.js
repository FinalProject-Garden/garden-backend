'use strict'

const Schema = use('Schema')

class PlantsSchema extends Schema {

  up () {
    this.create('plants', (table) => {
      table.increments()
      table.string('season')
      table.string('family')
      table.string('name')
      table.integer('size')
      table.integer('sun')
      table.string('water')
      table.integer('seed_count')
      table.integer('maturity') //in weeks
      table.integer('production') // lbs
      table.text('fertilizers') // comma seperated
      table.text('secrets') // comma seperated
      table.timestamps()
    })
  }

  down () {
    this.drop('plants')
  }

}

module.exports = PlantsSchema