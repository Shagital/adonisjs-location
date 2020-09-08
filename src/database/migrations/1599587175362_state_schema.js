'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
/** @type {typeof import('@adonisjs/lucid/config')} */
const Config = use('Config');

class StateSchema extends Schema {
    up () {
        this.create(Config.get('location.states_table'), (table) => {
            table.increments();
            table.string('name', 150);
            table.integer('country_id').unsigned();
            table.foreign('country_id').references(`${Config.get('location.countries_table')}.id`);
            table.string('country_code', 5);
            table.string('state_code', 10);
        });
    }

    down () {
        this.drop(Config.get('location.states_table'))
    }
}

module.exports = StateSchema;
