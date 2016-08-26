'use strict'

const Lucid = use('Lucid')

class Plant extends Lucid {

  spaces () {
    return this.hasMany('App/Model/Space')
  }

}

module.exports = Plant