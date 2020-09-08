'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
/** @type {typeof import('@adonisjs/lucid/config')} */
const Config = use('Config');

class City extends Model {
    static get table () {
        return Config.get('location.cities_table')
    }

    static get createdAtColumn () {
        return null
    }

    static get updatedAtColumn () {
        return null
    }

    state() {
        return this.belongsTo("App/Models/State", "state_id", "id");
    }

    country() {
        return this.belongsTo("App/Models/Country", "country_id", "id");
    }
}

module.exports = City;
