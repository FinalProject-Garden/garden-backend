'use strict'

const Lucid = use('Lucid')

class Space extends Lucid {

  plant () {
    return this.belongsTo('App/Model/Plant')
  }

  garden () {
    return this.belongsTo('App/Model/Garden')
  }

}

module.exports = Space