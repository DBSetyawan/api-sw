'use strict'

class ApiKasirPintarController {
    
    async getAllAddress({ response}) {
        const axios = use('axios');
        const CircularJSON = require('circular-json');
            await axios.get('https://kasirpintar.co.id/allAddress.txt').
                then(data => {
                    let json = CircularJSON.stringify(data);
                    const responseObject = JSON.parse(json);
                response.send(responseObject.data)
            }).catch((error)=>{
                return error
            }
        );
    }

}

module.exports = ApiKasirPintarController
