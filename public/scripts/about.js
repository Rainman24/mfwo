$(document).ready(function(){

	$.get('/json/about.json', function(data){

		data[0].resume.forEach(function(item){

			$('div.res').append(`<p>${item}</p>`)

		})

		data[1].education.forEach(function(item){

			$('#edu').append(`<li>${item}</li>`)

		})

		var links = data[2].links
			
		for(i=0;i<links.length;i++){

			var edu = $('#edu')
			var eduli = edu[0].children

			$(eduli).each(function(index,element){
				var text = $(element).text()

				if(index==1){
					$(element).html(`<a target='_blank' href=${links[1]}>${text}</a>`)
				}
				if(index==2){
					$(element).html(`<a target='_blank' href=${links[0]}>${text}</a>`)
				}
			})
		}


		data[3].skills.forEach(function(item){

			$('#skills').append(`<li>${item}</li>`)
			
		})

	})

})