'use strict'

/*
|--------------------------------------------------------------------------
| CountrySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {typeof import('app/Models/Country')} */
const Country = use('App/Models/Country');

const https = require('https');

var url = 'https://raw.githubusercontent.com/djunehor/countries-states-cities-database/master/countries.json';

class CountrySeeder {
  async run() {

      https.get(url,(res) => {
          let body = "";

          res.on("data", (chunk) => {
              body += chunk;
          });

          res.on("end", async () => {
              try {
                  let countries = JSON.parse(body);
                  await Country.query().insert(countries);
              } catch (error) {
                  console.error(error.message);
              }
          });

      }).on("error", (error) => {
          console.error(error.message);
      });
  }
}

module.exports = CountrySeeder
