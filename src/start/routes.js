Route.get(`${Config.get('location.routes.prefix')}/countries`, 'CountryController.index');
Route.get(`${Config.get('location.routes.prefix')}/countries/:id`, 'CountryController.show');
Route.get(`${Config.get('location.routes.prefix')}/countries/:id/states`, 'CountryController.states');
Route.get(`${Config.get('location.routes.prefix')}/countries/:id/cities`, 'CountryController.cities');
Route.get(`${Config.get('location.routes.prefix')}/states/:id/cities`, 'StateController.cities');
