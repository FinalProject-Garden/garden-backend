'use strict'

const User = use('App/Model/User')
const Plant = use('App/Model/Plant')


class AdminController {

  * index(request, response) {
    // console.log(request.authUser.attributes.admin);
    if (request.authUser.attributes.admin === true) {
      return response.json({ success: true })
    } else {
      return { error: false }
    }
  }

  * plantStore(request, response) {
    const plant = request.all();
    const admin = request.authUser.attributes.admin;
    if (admin) {
      const newPlant = yield Plant.create(plant);
      return response.json(newPlant.toJSON());
    } else {
      return response.json({error: 'Not An Admin'})
    }
  }

  * plantIndex (request, response) {
    const admin = request.authUser.attributes.admin;
    if (admin) {
      let plants = yield Plant.all();
      yield response.json(plants.toJSON())
    }
  }

}

module.exports = AdminController
