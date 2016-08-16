'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get hidden () {
    return ['password']
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  gardens () {
    return this.hasMany('App/Model/Garden')
  }

}

module.exports = User
