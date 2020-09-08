'use strict';

/*
|--------------------------------------------------------------------------
| StateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {typeof import('app/Models/State')} */
const State = use('App/Models/State');
const https = require('https');

var url = 'https://raw.githubusercontent.com/djunehor/countries-states-cities-database/master/states.json';
class StateSeeder {
  async run () {
    https.get(url,(res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", async () => {
        try {
          let states = JSON.parse(body);

          var i,j,temparray,chunk = 100;
          for (i = 0,j = states.length; i < j; i += chunk) {
            temparray = states.slice(i, i + chunk);
            await State.query().insert(temparray);
          }
        } catch (error) {
          console.error(error.message);
        }
      });

    }).on("error", (error) => {
      console.error(error.message);
    });
  }
}

module.exports = StateSeeder;
