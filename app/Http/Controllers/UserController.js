'use strict'

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * store (request, response) {
    const user = request.only('email', 'password', 'github');
    user.password = yield Hash.make(user.password);
    const newUser = yield User.create(user);
    return response.json(newUser.toJSON());
  }

  * login (request, response) {
    const input = request.only('email', 'password');
    try {
      const user = yield User.findBy('email', input.email);
      const verify = yield Hash.verify(input.password, user.password);
      if (!verify) { throw new Error('No matchy')};
      user.access_token = yield request.auth.generate(user);
      return response.json(user.toJSON());
    } catch (e) {
      return response.status(401).json({ error: e.message });
    }
  }

  * show (request, response) {
    return response.json(request.authUser);
  }

}

module.exports = UserController
