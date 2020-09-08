'use strict';

/** @type {typeof import('app/Models/State')} */
const State = use('App/Models/State');

/** @type {typeof import('app/Models/City')} */
const City = use('App/Models/City');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with countries
 */
class StateController {

    /**
     * Show state
     * GET states/:id
     *
     * @param {object} ctx
     * @param {Response} ctx.response
     */
    async show({params, response}) {
        let data = await State.query().where('id', params.id).with(['cities', 'country']).firstOrFail();
        response.send(data);
    }

    /**
     * Show state cities.
     * GET states/:id/cities
     *
     * @param {object} ctx
     * @param {Response} ctx.response
     */
    async cities({params, response}) {
        let data = await City.query().where('state_id', params.id).fetch();
        response.send(data);
    }

}

module.exports = StateController;
