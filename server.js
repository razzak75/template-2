const express = require('express')
const dotenv = require('dotenv')
const { upperCase } = require('upper-case')
const colors = require('colors')
const pageRoute = require('./routes/pageRoute')


//config dotenv & process port
dotenv.config()
const PORT = process.env.PORT || 4000


//init express
const app = express()


//static foler
app.use(express.static('public'))


//Access to pageroute using /
app.use('/', pageRoute)


//server making
app.listen(PORT, () => {
    console.log(upperCase(`Server is created on port ${PORT}`).bgGreen.black);
})