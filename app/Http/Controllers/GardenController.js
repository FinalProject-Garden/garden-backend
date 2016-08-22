'use strict'

const Garden = use('App/Model/Garden'),
      User = use('App/Model/User'),
      Space = use('App/Model/Space');



class GardenController {

  * store (request, response) {
    let input = request.all();
    input.user_id = request.authUser.attributes.id
    const newGarden = yield Garden.create(input)
    return response.json(newGarden.toJSON())
  }

  * index (request, response) {
    const user = yield User.findBy('id', request.authUser.attributes.id)
    console.log(user)
    const gardens = yield user.gardens().fetch()
    response.json(gardens.toJSON())
  }

  * show (request, response) {
    try {
      const garden = yield Garden.findOrFail('id', request.param('id'))
      return response.json(garden.toJSON())
    } catch (e) {
      response.send('Unable to find garden with id ' + request.param('id'))
    }
  }

  * destroy (request, response) {
    const garden = yield Garden.findBy('id', request.param('id'))
    yield garden.delete()
    response.json({success: true})
  }

  * planner (request, response) {
    const garden = yield Garden.findBy('id', request.param('id'))
    let input = request.all()
    // input.garden_id = garden.id;
    // let parsedInput = JSON.parse(input.data)
    // console.log(parsedInput)
    let a = JSON.stringify(input.data)
    let b = JSON.parse(a)
    console.log(typeof(b))
    // let newSpace = yield Space.create(input)
    // return response.json(newSpace.toJSON())

  }


}

module.exports = GardenController