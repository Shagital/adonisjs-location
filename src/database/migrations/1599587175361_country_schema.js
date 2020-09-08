'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

/** @type {typeof import('@adonisjs/lucid/config')} */
const Config = use('Config');

class CountrySchema extends Schema {
    up () {
        this.create(Config.get('location.countries_table'), (table) => {
            table.increments()
            table.string('name', 190).unique();
            table.string('iso3', 5).unique();
            table.string('iso2', 5).unique();
            table.string('phone_code');
            table.string('capital');
            table.string('currency', 10);
            table.string('native');
            table.string('emoji');
            table.string('emojiU');
        })
    }

    down () {
        this.drop(Config.get('location.countries_table'))
    }
}

module.exports = CountrySchema

