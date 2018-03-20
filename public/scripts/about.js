$(document).ready(function(){

	$.get('/json/about.json', function(data){

		data[1].education.forEach(function(item){

			$('#edu').append(`<li>${item}</li>`)

		})

		data[2].links.forEach(function(item){
			console.log(item)
		})

		data[3].skills.forEach(function(item){

			$('#skills').append(`<li>${item}</li>`)
			
		})

	})

	var edulist = $('#edu')

	console.log(edulist)

})