'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
/** @type {typeof import('@adonisjs/lucid/config')} */
const Config = use('Config');

class CitySchema extends Schema {
    up () {
        this.create(Config.get('location.cities_table'), (table) => {
            table.increments();
            table.string('name', 150);
            table.integer('country_id').unsigned().index('country_id');
            table.integer('state_id').unsigned().index('state_id');
            table.foreign('country_id').references(`${Config.get('location.countries_table')}.id`);
            table.foreign('state_id').references(`${Config.get('location.states_table')}.id`);
            table.string('country_code');
            table.string('state_code');
            table.decimal('latitude', 10, 8);
            table.decimal('longitude', 11, 8);
        });

    }

    down () {
        this.drop(Config.get('location.cities_table'))
    }
}

module.exports = CitySchema
