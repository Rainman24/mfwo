$(document).ready(function(){

	for(i=0;i<3;i++){
		$('.vertical').append(`<div data-position=${i}></div>`)
	}

	$('.vertical').each(function(index,element){

		$(element.childNodes).each(function(index,element){
			if(element.dataset.position==1){
				$(element).attr('class', 'direction')
			}
		})
		
	})

	$('div#top.nav').append(`
		<ul id='abcode'>
			<li class='about'><a id='about' href='/about'>About</a></li>
			<li class='projects'><a id='code' href='/projects'>Code</a></li>
		</ul>`)

	$('div#bottom.nav').append(`
		<ul id='mmcon'>
			<li class='projects'><a id='visuals' href='/projects'>Mixed Media</a></li>
			<li class='contact'><a id='contact'>Contact</a></li>
		</ul>`)

	var modal = $('#modal')

	$('#contact').on('click', function(){
		$('#modal').fadeIn(800)

		$('#modx').on('click',function(){
			$('#modal').fadeOut(400)
		})
	})

	var canvas = document.getElementById('canvas');
	var intro = document.getElementById('intro')

	var display = document.querySelector('.display')
	

	console.log(intro.clientWidth)
	console.log(display.clientHeight)


	canvas.width = intro.clientWidth
	canvas.height = display.clientHeight

	if(canvas){

	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'rgba(140,142,142,0.9)';

	ctx.fillRect(0,0,canvas.width,canvas.height);

	var grd=ctx.createRadialGradient(canvas.width/2+35,canvas.height/2+35,85,canvas.width/2+35,canvas.height/2+35,1);
		grd.addColorStop(0,'rgba(140,142,142,0.1)');
		grd.addColorStop(1,'white');

	ctx.fillStyle = grd;

	ctx.fillRect(canvas.width/2-71,canvas.height/2-71,250,250);

	}
	
})