const express = require('express')
const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()


const public = path.join(__dirname,'../public')


app.use(express.static(public))


app.get('/weather', (req, res) => {
    let geocodedata
    let forecastdata
    if (!req.query.address) {
        res.send("Please provide the suitable address")
    } else {
        geocode(req.query.address, (error, data) => {
            if (error) {
                return res.send({error})
            } else {
                geocodedata = data
            }
            forecast(req.query.address, (error, data) => {
                if(error) {
                    res.send({error})
                } else {
                    forecastdata = data
                    res.send({
                        location: geocodedata,
                        forecast: forecastdata,
                        address: req.query.address
                    })
                }
            })
        })
    }
})

app.get('/product', (req, res) => {
    if (!req.query.search) {
        res.send('Error occur')
    } else {
        res.send(req.query.search)
    }   
})

app.listen(3000, ()=> {
    console.log('The server is running')
})
