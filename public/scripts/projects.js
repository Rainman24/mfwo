$(document).ready(function(){

	var navigation = $('.nav')

	$('#projects').html(`
		<ul class='projects'>
			<li id='code'><a>Code</a></li>
			<li id='visuals'><a>Mixed Media</a></li>
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

	var tooltip = $('.gallery p')
	var unfold = $('.extra')
	var iframe = $('#iframe')

	$(display[0]).on('click', function(){

		if(unfold[0].style.display=='none'){
			
			tooltip[0].style.transform = 'rotate(0deg)'
		}
		 if(unfold[0].style.display!=='none'){
			
			tooltip[0].style.transform = 'rotate(45deg)'
		}

		$('.extra').toggle(200)
		
	})

	var contents = $('div.gallery')

	if(contents[0].childElementCount<2){
		tooltip[0].style.visibility = 'hidden'
	}

	$(display[0]).on('mousemove', function(e){

		var x = e.clientX,
	        y = e.clientY;

	    tooltip[0].style.top = (y + 12) + 'px';
	    tooltip[0].style.left = (x + 12) + 'px';

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

	// $.get('/json/timespec.json',function(data){

	// 	if(data.project==$('div.extrav')[0].id){

	// 		data.extra.forEach(function(item){
	// 			// console.log(item)
	// 		})
	// 	}

	// })

})