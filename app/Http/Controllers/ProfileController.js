'use strict'

const User   = use('App/Model/User'),
      Garden = use('App/Model/Garden')

class ProfileController {

  * index (request, response) {
    const user = yield User.findBy('id', request.authUser.attributes.id)
    const gardens = yield user.gardens().fetch()
    const userGardens = {user: user, gardens: gardens}
    return response.json(userGardens)
    
  }

}

module.exports = ProfileController
