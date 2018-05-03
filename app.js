const express = require('express')
const boparser = require('body-parser')
const pug = require('pug')
const app = express()
const fs = require('fs')
const request = require('request');

app.use(boparser.urlencoded({extended:true}))
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

var sdir = "./conf.json"
var config

try {
  config = require(sdir)
}
catch (err) {
  config = {}
  console.log("unable to read file '" + sdir + "': ", err)
}

var weather = `http://api.openweathermap.org/data/2.5/weather?lat=52.3702&lon=4.8952&units=metric&appid=${config.APIKey}`
const port = process.env.PORT || config.port

app.get('/', function(req,res){
	fs.readFile('sitemap.json', function(err,data){
		if(err) {throw err}
	
		var projects = JSON.parse(data)

		res.render('home',{
			homepage: true,
			title: 'Yes',
			cont: projects
		})
	})
})

app.get('/hi', function(req,res){

request(weather, function (err, response, body) {
		if(err){
			console.log('error:', error);
		} else {
		
			var weather1 = JSON.parse(body)
			var message = `It's ${weather1.main.temp} degrees in ${weather1.name}!`;
			console.log(message);
		}
	res.send(body)
	})
})

app.get('/projects', function(req,res){
	fs.readFile('sitemap.json', function(err,data){
		if(err) {throw err}
	
		var projects = JSON.parse(data)
		var projectTitles = projects.map(t => t.title)
		var projectLinks = projects.map(l => l.hreff)

		res.render('projects',{
			cont: projects,
			projects: true,
			title: 'Projects',
			ptitles: projectTitles,
			plinks: projectLinks
		})
	})
})

app.get('/projects/:name', function(req,res){
	fs.readFile('sitemap.json', function(err,data){
		if(err) {throw err}
	
		var projects = JSON.parse(data)

		res.render('projects',{
			cont: projects,
			url: req.params.name,
			title: 'Project: ' + req.params.name
		})
	})
})

app.get('/about', function(req,res){
	res.render('about', {
		title: 'About'
	})
})

app.listen(port, ()=> {
	console.log(`I'm listening ${port}`)
})