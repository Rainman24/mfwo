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


	// canvas.width = intro.clientWidth
	// canvas.height = display.clientHeight

	// if(canvas){

	// var ctx = canvas.getContext('2d');

	// ctx.fillStyle = 'rgba(140,150,150,1)';

	// ctx.fillRect(0,0,canvas.width,canvas.height);

	// ctx.fillStyle = 'rgba(255,255,255,1)';

	// ctx.fillRect(400,420,71,71);

	// }
	
})