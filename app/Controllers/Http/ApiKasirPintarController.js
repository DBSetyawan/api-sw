'use strict'
const { InvalidArgumentException } = require('@adonisjs/generic-exceptions')

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

    async getSpecificID({ request, response }) {

        const axios = use('axios');
        const { id } = request.all()
        const CircularJSON = require('circular-json');
        const datax = await axios.get('https://kasirpintar.co.id/allAddress.txt').
            then(data => {
                const json = CircularJSON.stringify(data);
                const responseObject = JSON.parse(json);
                const data_response = responseObject.data.address_kecamatan.find(record => record.id === id)
            
                response.status(200).json({ status: 'data', data: { nama : data_response.nama } })
              
            }).catch((error) => {
            
                return error
            })
        
        const newObj = datax || {};

        if (Object.keys(newObj).length === 0) {

            return { 'data': 'data tidak ditemukan.' }
        } 
    }

    async getSpecificKotaKecamatan({request, response }) { 

        function isEmptyObject(obj) {
            for (const key in obj) {
                if (Object.hasOwn(obj, key)) { // Remove this if you want to check for
                                            // enumerable inherited properties
                    return false;
                }
            }
            return true;
        }
        
        const axios = use('axios');
        const { kota_id } = request.all()
        const CircularJSON = require('circular-json');
        const specAddress = await axios.get('https://kasirpintar.co.id/allAddress.txt').
                then(data => {
                    let json = CircularJSON.stringify(data);
                    const responseObject = JSON.parse(json);
                    let data_response = responseObject.data.address_kecamatan.filter(record => record.kota_id === kota_id)
                    
                    return data_response
                    
            }).catch((error)=>{
                return error
            }
        );
        const newObj = specAddress || {}
        var result = Object.keys(newObj).map(function(key) {
               return newObj[key];
        });

        if (Object.keys(result).length === 0) { 
            return 'asdadasda';
        }
        return result
    }
}

module.exports = ApiKasirPintarController
