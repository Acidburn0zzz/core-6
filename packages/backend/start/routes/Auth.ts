import Route from '@ioc:Adonis/Core/Route';

Route.post('/login', 'AuthController.login');
Route.post('/password', 'AuthController.password').middleware(['auth', 'admin']);
Route.post('/oauth', 'AuthController.oauth');
Route.get('/logout', 'AuthController.logout').middleware(['auth']);
