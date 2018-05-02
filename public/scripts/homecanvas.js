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

	ctx.fillStyle = 'rgba(255,255,255,1)';

	ctx.fillRect(0,0,canvas.width,canvas.height);

	var about = document.getElementById('about')
	var code = document.getElementById('code')
	var visuals = document.getElementById('visuals')
	var contact = document.getElementById('contact')

	ctx.strokeStyle = 'rgba(0,0,0,1)';
	ctx.lineWidth = 1;

	var img = document.getElementById('scream');
    var pat = ctx.createPattern(img, 'repeat');
    //ctx.filter = 'blur(5px)';
    ctx.fillStyle = pat;
    //ctx.filter = 'blur(5px)';

	ctx.beginPath();
	ctx.moveTo(about.offsetLeft,0);
	ctx.lineTo(visuals.offsetLeft,canvas.height);
	ctx.lineTo(code.offsetLeft,0);
	ctx.lineTo(contact.offsetLeft,canvas.height);

	ctx.closePath();
	ctx.fill();
	// ctx.stroke();
	
	
	//ctx.fillStyle = 'rgba(255,255,255,0.4)';

	var grd=ctx.createRadialGradient(canvas.width/2,canvas.height/2,85,canvas.width/2,canvas.height/2,4);
		grd.addColorStop(0,'rgba(255,255,255,0.4)');
		grd.addColorStop(1,'rgba(255,255,255,0.8)');

		ctx.fillStyle = grd;
	ctx.strokeStyle = 'rgba(240,240,240,1)';
	ctx.lineWidth = 2;
	ctx.beginPath();
	//ctx.moveTo(canvas.width/2,canvas.height/2);
	//ctx.lineTo(canvas.width/2,canvas.height/2+(canvas.width/4+canvas.height/4)/2);
	ctx.arc(canvas.width/2,canvas.height/2,(canvas.width/4+canvas.height/4)/2,0,twoPI);
	//ctx.moveTo(canvas.width/2,canvas.height/2);
	
	ctx.closePath();
	ctx.stroke();
	ctx.fill();

	// ctx.fillStyle = 'rgba(0,0,0,1)';
	// ctx.font = '40px Arial';
	// ctx.fillText('3:30', canvas.width/2-40, canvas.height/2+20);
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