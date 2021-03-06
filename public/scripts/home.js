$(document).ready(function(){

	for(i=0;i<3;i++){
		$('.horizontal').append(`<div data-position=${i}></div>`)
		$('.vertical').append(`<div data-position=${i}></div>`)
	}

	$('.horizontal').each(function(index,element){

		$(element.childNodes).each(function(index,element){
			if(element.dataset.position==1){
				$(element).attr('class', 'nav')
			}
		})
		
	})

	$('.vertical').each(function(index,element){

		$(element.childNodes).each(function(index,element){
			if(element.dataset.position==1){
				$(element).attr('class', 'direction')
			}
		})
		
	})

	$('#top div.nav').append(`
		<div id='projects' class='projects'><a href='/projects'>Projects</a></div>
		`)

	$('#bottom div.nav').append(`
		<ul id='abco'>
			<li class='about'><a id='about' href='/about'>About</a></li>
			<li class='contact'><a id='contact'>Contact</a></li>
		</ul>`)

	var modal = $('#modal')

	$('#contact').on('click', function(){
		modal[0].style.display = 'block'

		$('#modx').on('click',function(){

			modal[0].style.display = 'none'
		})
	})

	var introbck = $('.intro').css('background');
	var mframe = $('div.display').css('border');

	$('.intro').mousemove(function(e) {

	    x = e.pageX - this.offsetLeft;
	    y = e.pageY - this.offsetTop;
	    xy = x + y;

	    dynamicgrad = "linear-gradient(" + xy + "deg, rgba(245,245,245,1), rgba(125,125,125,0.4))";

	    $(this).css({
	      'background': dynamicgrad
	    })

	    $('div.display').css({
	    	border:'0'
	    })

	  }).mouseleave(function() {

	    $(this).css({
	      background: introbck
	    })

	    $('div.display').css({
	    	border:mframe
	    })
	 });
	
})