'use strict'

const Schema = use('Schema')

class SwitchDomIdToStringSchema extends Schema {

  up () {
    this.table('spaces', (table) => {
      table.dropColumn('dom_id'); 
    })
  }

  down () {
    this.table('spaces', (table) => {
      table.integer('dom_id');
    })
  }

}

module.exports = SwitchDomIdToStringSchema
