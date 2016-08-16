'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/register', 'UserController.store');
Route.post('/login', 'UserController.login');
Route.get('/plants', 'PlantController.index');
Route.get('/plants/:id', 'PlantController.show');
Route.post('/gardens', 'GardenController.store').middleware('auth');
Route.get('/gardens', 'GardenController.index').middleware('auth');
Route.get('/gardens/:id', 'GardenController.show').middleware('auth');
Route.get('/profile', 'ProfileController.index').middleware('auth');

//admin
Route.get('/admin', 'AdminController.index').middleware('auth')
Route.get('/admin/plants', 'AdminController.plantIndex').middleware('auth')
Route.post('/admin/plants', 'AdminController.plantStore').middleware('auth')
Route.get('/admin/plants/:id', 'AdminController.plantShow').middleware('auth')
Route.put('/admin/plants/:id', 'AdminController.updatePlant').middleware('auth')
Route.put('/admin/plants/:id/image', 'AdminController.updateImage').middleware('auth')

