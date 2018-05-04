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
			<li class='projects'><a id='code' href='/projects'>Projects</a></li>
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

	var toHome = $('#cnav p')


	$('#cnav').on('mousemove',function(evnt){

		var x = evnt.clientX,
			y = evnt.clientY;

			toHome[0].style.top = (y + 5) + 'px';
			toHome[0].style.left = (x + 5) + 'px';

		$('#cnav a').on('mouseenter', function(evnt){
			
			toHome[0].style.display = 'block'
		}).on('mouseleave', function(evnt){

			toHome[0].style.display = 'none'		
		})

	})
	
})