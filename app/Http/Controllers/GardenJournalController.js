'use strict'

const GardenJournal = use('App/Model/GardenJournal'),
      Garden        = use('App/Model/Garden'),
       _            = require('lodash')

class GardenJournalController {

  * store (request, response) {
    const garden = yield Garden.findBy('id', request.param('id'))
    const input = request.only('entry')
    input.garden_id = garden.id
    const journalEntry = yield GardenJournal.create(input)
    return response.json(journalEntry.toJSON())

  }

  * index (request, response) {
    const garden = yield Garden.findBy('id', request.param('id'))
    const journal = yield garden.garden_journals().fetch()
    return response.json(journal.toJSON())
  }

  * update (request, response) {
    const garden = yield Garden.findBy('id', request.param('garden_id'))
    let journal = yield GardenJournal.findBy('id', request.param('id'))
    const input = request.all()
    journal = _.merge(journal, input)
    yield journal.save()
    response.json(journal.toJSON())
  }

}

module.exports = GardenJournalController
