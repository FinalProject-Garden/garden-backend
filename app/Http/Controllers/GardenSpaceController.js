'use strict'

const Garden = use('App/Model/Garden');
const Space  = use('App/Model/Space');
const Database = use('Database')

class GardenSpaceController {

  // Plz send an object with a spaces property
  // containing an array of space objects. so...
  // [ { plant_id: 42, dom_id: 13 }, { ... }, ... ]

  * store (request, response) {
    let input = request.only("spaces");
    let garden = request.params("id");

    // Remove any pre-existing spaces on update.
    yield Database.table("spaces").where("garden_id", garden.id).delete();

    let spaces = input.spaces.map(space => {
      console.log(space);
      return {
        garden_id: Number(space.garden_id),
        plant_id: Number(space.plant_id),
        dom_id: space.dom_id
      }
    })

    let results = yield Space.createMany(spaces)

    return response.json(results);
  }

  * index (request, response) {
    let gardenId = response.params('id');
    let garden = yield Database.from('spaces').where('garden_id', gardenId);

    return response.json(garden);
  }

};

module.exports = GardenSpaceController;