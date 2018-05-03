$(document).ready(function(){

	var canvas = document.getElementById('canvas');
	var intro = document.getElementById('intro')

	var display = document.querySelector('.display')

	if(canvas){



	function background(){

	canvas.width = intro.clientWidth
	canvas.height = display.clientHeight

	var ctx = canvas.getContext('2d');
	var twoPI = Math.PI*2;

	//var image = document.getElementById('scream');
	//ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'rgba(255,255,255,1)';

	ctx.fillRect(0,0,canvas.width,canvas.height);

	var about = document.getElementById('about')
	var code = document.getElementById('code')
	var visuals = document.getElementById('visuals')
	var contact = document.getElementById('contact')

	

	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.lineWidth = 1;

	var img = document.getElementById('scream');
	//var img = ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    //var pat = ctx.createPattern(img, 'repeat');
    var pat = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pat;

    var y2 = canvas.height,
    	y1 = 0;

	ctx.beginPath();
	ctx.moveTo(about.offsetLeft,y1);
	ctx.lineTo(code.offsetLeft,y1);

	ctx.lineTo(code.offsetLeft,y2);
	ctx.lineTo(visuals.offsetLeft/3,y2);

	ctx.closePath();
	ctx.fill();
	//ctx.stroke();

	var grd=ctx.createRadialGradient(canvas.width/2,canvas.height/2,85,canvas.width/2,canvas.height/2,4);
		grd.addColorStop(0,'rgba(255,255,255,0.4)');
		grd.addColorStop(1,'rgba(255,255,255,0.8)');

		ctx.fillStyle = grd;
	ctx.strokeStyle = 'rgba(240,240,240,1)';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(canvas.width/2,canvas.height/2,(canvas.width/4+canvas.height/4)/2,0,twoPI);
	
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	var time = new Date();
		var timeString = time.toLocaleTimeString();
		ctx.fillStyle = 'rgba(0,0,0,1)';
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

				console.log(weatherForecast)
				//for(var i in weatherForecast.weather){
					console.log(weatherForecast.weather[0].main)
					output += weatherForecast.weather[0].main + ' ' + weatherForecast.main.temp + '℃'
				//}

				document.getElementById('visuals').innerHTML = output;
				document.getElementById('visuals').removeAttribute('href');
			} else if(this.status == 404){
				document.getElementById('memo').innerHTML = 'File Not Found'
			}
		}

		xhr.onerror = function(){
			console.log('Request Error...');
		}

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