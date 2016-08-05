'use strict'

const Lucid = use('Lucid')

class Space extends Lucid {

  plants () {
    return this.belongsToMany('App/Model/Plant')
  }

  garden () {
    return this.belongsTo('App/Model/Garden')
  }

}

module.exports = Space