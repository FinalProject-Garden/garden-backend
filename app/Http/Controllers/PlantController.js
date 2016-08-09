'use strict'

const Plant = use('App/Model/Plant');

class PlantController {

  * index (request, response) {
    let plants = yield Plant.all()
    yield response.json(plants.toJSON())
  }


}

module.exports = PlantController
