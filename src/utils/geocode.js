const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoia3dhbjA1NDAiLCJhIjoiY2tyeW9tcDVuMGdzMDJ3cXg5c3dxaXFjcSJ9.NOyfZIktTAKRZKXheoO_rg`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('error occur', undefined)
        } else if (response.body.error) {
            callback('sorry', undefined)
        } else if (!response.body.features[0]) {
            callback('There is no such place', undefined)
        } else {
            callback(undefined, `It is currently at ${response.body.features[0].center}. `)
        }
    })
}

module.exports = geocode