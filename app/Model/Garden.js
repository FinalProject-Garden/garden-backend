'use strict'

const Lucid = use('Lucid')

class Garden extends Lucid {

  spaces () {
    return this.hasMany('App/Model/Space')
  }

  user () {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Garden