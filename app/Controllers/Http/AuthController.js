'use strict'

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
    
}

module.exports = AuthController
