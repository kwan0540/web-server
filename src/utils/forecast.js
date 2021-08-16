const request = require('request')

const forecast = (address, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=55ffdda8deda7172e9e170a8ae8b580a&query=${address}`
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('error occur', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, `It is currently ${response.body.current.temperature} degrees out there.`)
        }
    })
}

module.exports = forecast