const express = require('express')
const boparser = require('body-parser')
const pug = require('pug')
const app = express()
const fs = require('fs')
const port = process.env.PORT || 80

app.use(boparser.urlencoded({extended:true}))
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

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