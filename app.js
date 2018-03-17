const express = require('express')
const boparser = require('body-parser')
const pug = require('pug')
const app = express()
const fs = require('fs')

app.use(boparser.urlencoded({extended:true}))
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function(req,res){

	fs.readFile('sitemap.json', function(err,data){
		if(err) {throw err}
	
		var projects = JSON.parse(data)

		res.render('home',{
			content: projects
		})
	})
})

app.get('/projects', function(req,res){
	res.render('projects')
})

app.get('/about', function(req,res){
	res.render('about')
})

app.listen(3007, function(){
	console.log('I am listening')
})