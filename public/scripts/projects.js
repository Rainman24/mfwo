$(document).ready(function(){

	var navigation = $('.nav')

	$('#projects').html(`
		<ul class='projects'>
			<li id='visuals'><a>Visuals</a></li>
			<li id='code'><a>Code</a></li>
		</ul>
		`)

	$('#visuals').on('click', function(){
		$('ul.code').fadeOut(400)
		$('ul.visuals').toggle(400)
	})

	$('#code').on('click', function(){
		$('ul.visuals').fadeOut(400)
		$('ul.code').toggle(400)
	})

})