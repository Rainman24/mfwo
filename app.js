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
	res.render('home')
})

app.get('/projects', function(req,res){
	res.render('projects')
})

app.get('/about', function(req,res){
	res.render('about')
})

app.get('/contact', function(req,res){
	res.render('contact')
})

app.listen(3007, function(){
	console.log('I am listening')
})