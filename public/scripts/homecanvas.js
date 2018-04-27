$(document).ready(function(){

	var canvas = document.getElementById('canvas');
	var intro = document.getElementById('intro')

	var display = document.querySelector('.display')
	

	if(canvas){

	function background(){

	canvas.width = intro.clientWidth
	canvas.height = display.clientHeight

	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'rgba(255,255,255,1)';

	ctx.fillRect(0,0,canvas.width,canvas.height);

	var about = document.getElementById('about')
	var code = document.getElementById('code')
	var visuals = document.getElementById('visuals')
	var contact = document.getElementById('contact')

	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.lineWidth = 1;

	var img = document.getElementById('scream');
    var pat = ctx.createPattern(img, 'no-repeat');
    ctx.fillStyle = pat;

	ctx.beginPath();
	ctx.moveTo(about.offsetLeft,0);
	ctx.lineTo(visuals.offsetLeft,canvas.height);
	ctx.lineTo(code.offsetLeft,0);
	ctx.lineTo(contact.offsetLeft,canvas.height);

	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	

	}

	background()
	window.onresize = background;

	}
	
})