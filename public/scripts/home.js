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
	var canvasContext = canvas.getContext('2d');

	// canvasContext.fillStyle = 'rgba(0,0,50,1)';

	// canvasContext.fillRect(100,50,72,21);

	$(canvas).mousemove(function(e) {

		canvasContext.fillStyle = 'rgba(0,0,50,1)';

	    x = e.pageX - canvas.offsetLeft;
	    y = e.pageY - canvas.offsetTop;
	    console.log(x)

	    // x = 1
	    // y = 2



		canvasContext.fillRect(0,0,x,y);

	}).mouseleave(function(e) {

		x = e.pageX - canvas.offsetLeft;
	    y = e.pageY - canvas.offsetTop;

	 // x= 4
	 // y = 7

		canvasContext.fillStyle = 'rgba(250,200,250,1)';
		canvasContext.fillRect(0,0,x,y);
	    
	 })
	
})