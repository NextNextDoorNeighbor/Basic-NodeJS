const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// defines path for express and hbs
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
	res.render('index', {
		title: 'handlebars',
		name: 'Chris'
	})
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name: 'Chris'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name: 'Chris'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		name: 'Chris'
	})
})


res.send({
	forecast:forecastData,
	location,
	address: req.queery.address
})
})
})
})

app.get('/help/*', (req, res)=> {
	res.render('404page', {
		title: '404 Page does not esist',
		name: 'This help page does not exist'
	})
})

app.get('*', (req, res)=> {
	res.render('404page', {
		title: '404 Page path does not exist',
		name: 'The page you are looking for does not exist. Please navigate back to the main site.'
	})
})


app.listen(3000, () => {
	console.log('server is on port http://localhost:3000')
})
