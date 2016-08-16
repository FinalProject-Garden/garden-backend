'use strict'

const Lucid = use('Lucid')

class GardenJournal extends Lucid {

  garden () {
    return this.belongsTo('App/Model/Garden')
  }

}

module.exports = GardenJournal
