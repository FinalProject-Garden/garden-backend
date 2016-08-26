'use strict'

const Schema = use('Schema')

class AddStringDomIdSchema extends Schema {

  up () {
    this.table('spaces', (table) => {
      table.string("dom_id").notNullable();
    })
  }

  down () {
    this.table('spaces', (table) => {
      table.dropColumn("dom_id");
    })
  }

}

module.exports = AddStringDomIdSchema
