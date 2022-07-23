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
    
    // const u1 = new User()
    //   u1.username = 'daniel'
    //   u1.password = 'd4n1l'
    //   u1.email = 'artexsdns@gmail.com'
    // await u1.save()
    
    const roleAdmin = new Role()
    roleAdmin.name = 'Administrator'
    roleAdmin.slug = 'administrator'
    roleAdmin.description = 'manage administration privileges'
    await roleAdmin.save()
    
    const roleGuest = new Role()
    roleGuest.name = 'Guest'
    roleGuest.slug = 'Guest'
    roleGuest.description = 'manage Guest privileges'
    await roleGuest.save()

    
  }
}

module.exports = UserSeeder
