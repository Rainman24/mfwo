$(document).ready(function(){

	var navigation = $('.nav')

	$('#projects').html(`
		<ul class='projects'>
			<li id='visuals'><a>Visuals</a></li>
			<li id='code'><a>Code</a></li>
		</ul>
		`)

	var direction = $('.direction')

	var arrowl = $('#navl')
	var arrowr = $('#navr')

	direction[0].append(arrowl[0])
	direction[1].append(arrowr[0])

	var display = $('.gallery img')

	$('#visuals').on('click', function(){
		$('ul.code').fadeOut(400)
		$('ul.visuals').toggle(400)

		$('.gallery img').toggle(400)

	})

	$('#code').on('click', function(){
		$('ul.visuals').fadeOut(400)
		$('ul.code').toggle(400)

		$('.gallery img').toggle(400)

	})

	$(display[0]).on('click', function(){
		$('#iframe').toggle(200)
		// $(this).toggle(200)
	})

	$(display[0]).on('mousemove', function(e){
		console.log('X', e.clientX)
		console.log('Y', e.clientY)

		
	})

	var current;
	var group;

	$.get('/json/sitemap.json',function(data){

		if(display[0]!==undefined&&display[0].style.display == 'block'){
			current = display[0].dataset.name
			group = display[0].dataset.group
		}

		for(i=0;i<data.length;i++){

			if(data[i].project==current&&data[i-1]!==undefined&&data[i+1]!==undefined){
				$(arrowl).html(`<a href=${data[i-1].project}>〈</a>`)
				$(arrowr).html(`<a href=${data[i+1].project}>〉</a>`)
			}

			else if(data[i].project==current&&data[i-1]!==undefined){
				$(arrowl).html(`<a href=${data[i-1].project}>〈</a>`)
			}

			else if(data[i].project==current&&data[i+1]!==undefined){
				$(arrowr).html(`<a href=${data[i+1].project}>〉</a>`)
			}
			
		}


	})

})