'use strict';

const path = require('path');
const fs = require('fs');

module.exports = async (cli) => {
    try {
        // 1. Copy config file
        const configOrig = path.join(__dirname, './config', 'location.js');
        const configDest = path.join(cli.helpers.configPath(), 'location.js');
        await cli.copy(configOrig, configDest);

        // 2. Copy database files
        const dbOrig = path.join(__dirname, './src/database');
        const dbDest = path.join(cli.helpers.databasePath());
        await cli.copy(dbOrig, dbDest);

        // 3. Copy model files
        const modelOrig = path.join(__dirname, './src/app/Models');
        const modelDest = path.join(cli.helpers.appRoot(), './app/Models');
        await cli.copy(modelOrig, modelDest);

        // 4. Copy controller file
        const controllerOrig = path.join(__dirname, './src/app/Controllers');
        const controllerDes = path.join(cli.helpers.appRoot(), './app/Controllers');
        await cli.copy(controllerOrig, controllerDes);

        // 5. Copy routes
        const routeFile = `${cli.helpers.appRoot()}/start/routes.js`;
        const templateFile = path.join(__dirname, './src/start', 'routes.js');

        fs.readFile(templateFile, function (err, data) {
            if (err) return console.error(err);
            let configLoader = "";
            // check if config has been loaded before
            if(!data.includes('search string')) {
                configLoader = "\n/** @type {typeof import('@adonisjs/lucid/config')} */\nconst Config = use('Config');\n";
            }
            fs.appendFile(routeFile, configLoader+data, function (err) {
                if (err) return console.error(err);
            });
        });
    } catch (error) {
        // ignore error
        console.error(error);
    }
}
