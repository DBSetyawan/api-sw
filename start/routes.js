'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('login', 'AuthController.postLoginJwt').as('loginJwt')
}).prefix('api/auth')


Route.group(() => {
  Route.get('get-all-address', 'ApiKasirPintarController.getAllAddress').middleware(['auth:jwt'])
  Route.get('get-specific-id', 'ApiKasirPintarController.getSpecificID').middleware(['auth:jwt','is:(administrator)'])
  Route.get('get-current-roles-user', 'AuthController.getCurrentUser').middleware(['auth:jwt'])
  Route.put('update-user/:id', 'AuthController.AssignRole').middleware(['auth:jwt'])
  Route.get('get-specific-kota-kecamatan', 'ApiKasirPintarController.getSpecificKotaKecamatan').middleware(['auth:jwt'])
}).prefix('api/v1')

Route.resource('permission', 'PermissionController').middleware('auth:jwt')
Route.resource('roles', 'RoleController').apiOnly().middleware('auth:jwt')