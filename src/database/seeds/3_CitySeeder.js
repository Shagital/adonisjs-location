'use strict';

/*
|--------------------------------------------------------------------------
| CitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {typeof import('app/Models/City')} */
const City = use('App/Models/City');
const https = require('https');

var url = 'https://raw.githubusercontent.com/djunehor/countries-states-cities-database/master/states.json';
class CitySeeder {
    async run () {
        https.get(url,(res) => {
            let body = "";

            res.on("data", (chunk) => {
                body += chunk;
            });

            res.on("end", async () => {
                try {
                    let cities = JSON.parse(body);
                    var i,j,temparray,chunk = 100;
                    for (i = 0,j = cities.length; i < j; i += chunk) {
                        temparray = cities.slice(i,i+chunk);
                        await City.query().insert(temparray);
                    }
                    // do something with JSON
                } catch (error) {
                    console.error(error.message);
                }
            });

        }).on("error", (error) => {
            console.error(error.message);
        });
    }
}

module.exports = CitySeeder;
