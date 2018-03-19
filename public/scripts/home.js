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
		<ul>
			<li class=about><a id='about' href='/about'>About</a></li>
			<li class=contact><a id='contact'>Contact</a></li>
		</ul>`)

	var modal = $('#modal')

	$('#contact').on('click', function(){
		modal[0].style.display = 'block'

		$('#modx').on('click',function(){

			modal[0].style.display = 'none'
		})
	})
	
})