$(document).ready(function(){
	
	var canvas = document.getElementById('canvas'),
		intro = document.getElementById('intro'),
		display = document.querySelector('.display');
	

	if(canvas){

		function background(){

		canvas.width = intro.clientWidth
		canvas.height = display.clientHeight

		var ctx = canvas.getContext('2d'),
			twoPI = Math.PI*2;

		ctx.fillStyle = 'rgba(255,255,255,1)';

		ctx.fillRect(0,0,canvas.width,canvas.height);

		var about = document.getElementById('about'),
			code = document.getElementById('code'),
			visuals = document.getElementById('visuals'),
			contact = document.getElementById('contact');

		ctx.strokeStyle = 'rgba(0,0,0,1)';
		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height/2,(canvas.width/4+canvas.height/4)/2,0,twoPI);

		ctx.stroke();

		var time = new Date();
		var timeString = time.toLocaleTimeString();
		console.log(timeString)
		ctx.fillStyle = 'rgba(0,0,0,1)';
		ctx.font = '40px Arial';
		ctx.fillText(`${timeString}`, canvas.width/2-(canvas.width/4+canvas.height/4)/5, canvas.height/2+20);

		}

	function xmlhttpreq(){
		
		var xhr = new XMLHttpRequest();
		console.log(xhr);

		xhr.open('GET', 'scripts/test.txt', true);

		xhr.onload = function(){
			if(xhr.status == 200){
				//console.log(xhr.responseText);
			}
		}

		xhr.send();
	}
	xmlhttpreq();

		background()
		window.onresize = background;

	}

})