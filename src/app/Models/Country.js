'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
/** @type {typeof import('@adonisjs/lucid/config')} */
const Config = use('Config');

class Country extends Model {
  static get table () {
    return Config.get('location.countries_table')
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }

  states() {
    return this.hasMany("App/Models/State", "id", "country_id");
  }

  cities() {
    return this.hasMany("App/Models/City", "id", "country_id");
  }
}

module.exports = Country;
