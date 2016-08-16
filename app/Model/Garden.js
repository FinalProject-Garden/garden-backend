'use strict'

const Lucid = use('Lucid')

class Garden extends Lucid {

  spaces () {
    return this.hasMany('App/Model/Space')
  }

  user () {
    return this.belongsTo('App/Model/User')
  }

  garden_journals () {
    return this.hasMany('App/Model/GardenJournal')
  }

}

module.exports = Garden