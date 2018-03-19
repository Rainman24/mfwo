$(document).ready(function(){

	$.get('/json/about.json', function(data){

		var edu = $('<ul></ul>')

		data[1].education.forEach(function(item){

			$(edu).append(`
				<ul>
					<li>${item}</li>
				</ul>`)

				$('.edu').append(edu)
		})

	})

	

})