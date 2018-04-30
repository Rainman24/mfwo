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
		ctx.fillStyle = 'rgba(70,70,70,0.7)';
		ctx.font = '2em Arial';
		ctx.fillText(`${timeString}`, canvas.width/2-60, canvas.height/2+10);

		}

	function xmlhttpreq(){
		
		var xhr = new XMLHttpRequest();
		console.log(xhr);

		xhr.open('GET', 'json/timespec.json', true);

		console.log('READYSTATE: ', xhr.readyState)

		xhr.onprogress = function(){
			console.log('READYSTATE: ', xhr.readyState)
		}

		xhr.onload = function(){
			console.log('READYSTATE: ', xhr.readyState)
			if(this.status == 200){
				console.log(this.responseText);

				var description = JSON.parse(this.responseText);

				var output = '';

				output += '<ul>' +
					'<li> Project: ' + description.project + '</li>' +
					'<li> Title: ' + description.title + '</li>' +
					'<li> Captions: ' + description.captions + '</li>' +
					'<li> Date: ' + description.date + '</li>' +
					'<ul>' + '<li> Extra1: ' + description.extra[0] + '</li>' + '</ul>' +
					'</ul>';

				console.log(description.extra)


				document.getElementById('memo').innerHTML = output;
			} else if(this.status == 404){
				document.getElementById('memo').innerHTML = 'File Not Found'
			}
		}

		xhr.onerror = function(){
			console.log('Request Error...');
		}

		// xhr.onreadystatechange = function(){
		// 	console.log('READYSTATE: ', xhr.readyState)
		// 	if(this.readyState == 4 && this.status == 200){
		// 		console.log(this.responseText);
		// 	}
		// }

		xhr.send();
	}
	xmlhttpreq();

		// background()
		setInterval(background,1000);
		window.onresize = background;

	}

})