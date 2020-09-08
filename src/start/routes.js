Route.get(`${Config.get('location.routes.prefix')}/countries`, 'CountryController.index');
Route.get(`${Config.get('location.routes.prefix')}/countries/:id`, 'CountryController.show');
Route.get(`${Config.get('location.routes.prefix')}/countries/:id/regions`, 'CountryController.states');
Route.get(`${Config.get('location.routes.prefix')}/countries/:id/cities`, 'Api/CountryController.cities');
Route.get(`${Config.get('location.routes.prefix')}/states/:id/cities`, 'StateController.cities');
