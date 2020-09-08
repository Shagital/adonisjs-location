'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
/** @type {typeof import('@adonisjs/lucid/config')} */
const Config = use('Config');

class State extends Model {

  static get table () {
    return Config.get('location.states_table')
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  cities() {
    return this.hasMany("App/Models/Cities", "id", "region_id");
  }

  country() {
    return this.belongsTo("App/Models/Country", "country_id", "id");
  }
}

module.exports = State;
