$(document).ready(function(){

	$.get('/json/about.json', function(data){

		data[1].education.forEach(function(item){

			$('#edu').append(`<li>${item}</li>`)

		})

		console.log(data[2].links)
		var links = data[2].links

		// data[2].links.forEach(function(item){
			
		for(i=0;i<links.length;i++){



			var edu = $('#edu')
			var eduli = edu[0].children

			$(eduli).each(function(index,element){
				var text = $(element).text()

				console.log(links[0])

				if(index==5){
					$(element).html(`<a target='a_blank' href=${links[0]}>${text}</a>`)
				}
				if(index==6){
					$(element).html(`<a target='a_blank' href=${links[1]}>${text}</a>`)
				}
			})
		}
		// })

		data[3].skills.forEach(function(item){

			$('#skills').append(`<li>${item}</li>`)
			
		})

	})

})