# Adonisjs Location ▲

## Introduction
This Package offers a simple way to get Countries, Cities and States that you may need for your Application, most especially for dropdown menus.

### Step One - Install  🎼
#### Via Adonis CLI
`adonis install @shagital/adonisjs-location`

#### Via npm/yarn
- Install package
```shell
// via npm
npm require @shagital/adonisjs-location

// via yarn
yarn add @shagital/adonisjs-location
```
- Run instructions
```
node ace run:instructions node_modules/@shagital/adonisjs-location
```


### Step Two - Update Configurations
`adonisjs-location` provides you with an easy way of customizing the tables used for storing Countries, States and Cities. Also, you can customise the route prefix. To customize these you need to update the 
configuration file `config/location.js` available for you to edit. The default configurations are:

```js

module.exports = {
    countries_table : 'countries',
    cities_table : 'cities',
    states_table : 'states',
    routes : {
        prefix : 'location'
    }
};
```

You can go ahead and customize the `table names`, and `route prefix` as you need before running the Migration.

### Step Three - Running Migrations

> before you do this make sure your correct Database credentials are set in the `.env` file

```shell
// if adonis CLI is installed globally
adonis migration:run

// using ace
node ace migration:run
```

Finally, run the Package seeders

```shell
adonis seed --files=database/seeds/1_CountrySeeder.js,database/seeds/2_StateSeeder.js,database/seeds/3_CitySeeder.js

// using ace
node ace seed --files=database/seeds/1_CountrySeeder.js,database/seeds/2_StateSeeder.js,database/seeds/3_CitySeeder.js
```

## Usage

>**NOTE**<br>
>The routes below are prefixed with `location` which is the default configuration set in the `config/location.js`
>file. If modified, replace the prefix in your route with the correct prefix. 

|Route|Description|
|:------------- | :----------: |
|`/location/countries`|return all countries|
|`/location/countries/{id}`|return a single country by its ID, with states|
|`/location/countries/{id}/states`|return all states by country ID|
|`/location/countries/{id}/cities`|return all cities by country ID|
|`/location/states/{id}/cities`|return all cities by state ID|

## Test
```shell
// via npm
npm run test

// via yarn
yarn test
```

## Contribution

Free for all, if you find an issue with the package or notice a missing country, state or city, please send in a PR.


## Credits
This package was influenced by [laravel-location](https://github.com/ichtrojan/laravel-location) package
