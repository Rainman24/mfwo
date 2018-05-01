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

		xhr.open('GET', '/hi', true);

		console.log('READYSTATE: ', xhr.readyState)

		xhr.onprogress = function(){
			console.log('READYSTATE: ', xhr.readyState)
		}

		xhr.onload = function(){
			console.log('READYSTATE: ', xhr.readyState)
			if(this.status == 200){
				console.log(this.responseText);

				var weatherForecast = JSON.parse(this.responseText);

				var output = '';

				// '<li Sunrise: > ' + new Date(weatherForecast.sys.sunrise*1000).toUTCString() + '</li>' +
				// '<li Sunset: > ' + new Date(weatherForecast.sys.sunset*1000).toUTCString() + '</li>' +
				

				console.log(weatherForecast)
				for(var i in weatherForecast.weather){
					console.log(weatherForecast.weather[i].main)
					output += '<div class="we">' +  
						'<img src="' + 'http://openweathermap.org/img/w/' + weatherForecast.weather[i].icon + '.png">' +
						'<p> ' + weatherForecast.main.temp + '℃' + '</p>' +
						'<p> ' + weatherForecast.weather[i].main + '</p>' +
						'</div>'
				}

				//document.getElementById('visuals').innerHTML = output;
				var liWF = document.querySelector('#mmcon li.projects');
				console.log(liWF)
				liWF.innerHTML = output;
				//document.getElementById('bottom2').style.display = 'inline-block';
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

	$('#visuals').on('click', function(e){
		e.preventDefault();
	})

		// background()
		setInterval(background,1000);
		window.onresize = background;

	}

})