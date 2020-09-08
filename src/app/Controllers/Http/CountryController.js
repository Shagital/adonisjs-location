'use strict';

/** @type {typeof import('app/Models/Country')} */
const Country = use('App/Models/Country');

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
class CountryController {
    /**
     * Show a list of all countries.
     * GET countries
     *
     * @param {object} ctx
     * @param {Response} ctx.response
     */
    async index({response}) {
        let data = await Country.query().fetch();
        response.send(data);
    }

    /**
     * Show country
     * GET countries/:id
     *
     * @param {object} ctx
     * @param {Response} ctx.response
     */
    async show({params, response}) {
        let data = await Country.query().where('id', params.id).with('states').firstOrFail();
        response.send(data);
    }

    /**
     * Show country regions
     * GET countries/:id/states
     *
     * @param {object} ctx
     * @param {Response} ctx.response
     */
    async states({params, response}) {
        let data = await State.query().where('country_id', params.id).fetch();
        response.send(data);
    }

    /**
     * Show country cities.
     * GET countries/:id/cities
     *
     * @param {object} ctx
     * @param {Response} ctx.response
     */
    async cities({params, response}) {
        let data = await City.query().where('country_id', params.id).fetch();
        response.send(data);
    }

}

module.exports = CountryController;
