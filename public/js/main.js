$(document).ready(function(){
  var baseUrl = 'https://api.forecast.io/forecast/';
	
  $('#get-weather').on('click', showInfo);

  function buildUrl(lat, lon){
    return baseUrl + apiKey+'/'+lat+','+lon;
  }
	
	function showInfo(){
		console.log('jkdshkjfj')
		var lat = $('#latitude').val();
		var lon = $('#longitude').val();
		var ajaxObjects = {
			url: buildUrl (lat,lon),
			dataType: 'jsonp',
			success: successRoute,
			error: errorHandler,
		};
		
		$.ajax(ajaxObjects);
	}
	
	function successRoute(wdata){
		console.log(wdata);
		var source = $('#info').html();
		var template = Handlebars.compile(source);
		var dataa = {
			latitude: wdata.latitude,
			longitude: wdata.longitude,
			icon: wdata.currently.icon || 'clear night',
			time: wdata.currently.time,
			summary: wdata.currently.summary,
		};
		var html = template(dataa);
		$('#output').html(html);
	}
	
	 function errorHandler(err){
    console.log(err);
  }
});
