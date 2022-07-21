'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run() {
    
    const u1 = new User()
      u1.username = 'daniel'
      u1.password = 'd4n1l'
      u1.email = 'artexsdns@gmail.com'
      await u1.save()
  }
}

module.exports = UserSeeder
