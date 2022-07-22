'use strict'
const User = use('App/Models/User')
const Role = use('Role')
const Permission = use('Permission');

class AuthController {

        async postLoginJwt({ request, auth }) {
            
            try { 
        
                const { email, password } = request.all()
                return auth
                .authenticator('jwt')
                .withRefreshToken()
                    .attempt(email, password)
                
            } catch (err) {
            
                return response.status(500).json({ code: 500, status: 'error', message: err.message })
                
            }

        }
    
        async AssignRole({ auth, response }) { 

            const role = await Role.findOrFail(params.id)
            const user = await User.findOrFail(params.id)
            
            if (role) { 
                await user.roles().sync(role.id)
            }

            await user.loadMany(['roles', 'permissions'])

            return user
        }
    
        async getCurrentUser() { 
            
            const me = await auth.getUser()

            const users = await User.query().with('roles').where('id', me.id).first()
            const roles = await users.getRoles()

            return roles

        }
            
    }

module.exports = AuthController
