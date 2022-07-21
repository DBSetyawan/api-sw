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

    async getSpecificID({request, response }) { 

        const axios = use('axios');
        const CircularJSON = require('circular-json');
        await axios.get('https://kasirpintar.co.id/allAddress.txt').
            then(data => {
                let json = CircularJSON.stringify(data);
                const responseObject = JSON.parse(json);
                let data_response = responseObject.data.address_kecamatan.filter( record => record.id === "1101010")
                let result = response.send(data_response)

                return result
            }).catch((error)=>{
                return error
            }
        );

    }

}

module.exports = ApiKasirPintarController
