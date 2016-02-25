$(document).ready(function(){
   var baseUrlWeather = 'https://api.forecast.io/forecast/';
   var baseUrlAddress = 'asdfasdfasdfasdfasdfasdfasdf';
	var address = 'address';
	var lat = {};
	var long = {};
	
	$('#go').on('click',loadWeatherHtml);
	$('#go').on('click',getcoordinates);
	
	$('#go2').on('click',getcoordinates2);	
	
	function loadWeatherHtml(){
		$('#welcome').css('display', 'none');
		$('#address-input-bar2').css('display', 'initial');	
		$('body').css('background-image', 'url("https://www.wpfaster.org/wp-content/uploads/2014/06/sunshine-and-clouds-background.jpg")');
		$('body').css('background-size', '100% 100%');
	}
	
	function getcoordinates(){
		address = $('#enterlocation').val();
		var ajaxObjects = {
			    url: buildUrlAddress (address),
			    success: successHandler,
			    error: errorHandler,
		};
		
		$.ajax(ajaxObjects);
	}
	
	function getcoordinates2(){
		address = $('#enterlocation2').val();
		var ajaxObjects = {
			    url: buildUrlAddress (address),
			    success: successHandler,
			    error: errorHandler,
		};
		
		$.ajax(ajaxObjects);
	}
	
	function buildUrlAddress(address){
     return 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address +'&key='+addressApiKey;
   }

	function successHandler(addressData){
	   lat = addressData.results[0].geometry.location.lat;
		long = addressData.results[0].geometry.location.lng;
		displayWeather(lat,long);
	}
	
	function errorHandler(err){
      console.log(err);
   }
	
	function displayWeather(lat,long){
		var ajaxObjects = {
			    url: buildUrlWeather (lat,long),
			    dataType: 'jsonp',
			    success: successHandler2,
			    error: errorHandler,
		};
		
		$.ajax(ajaxObjects);
	}

   function buildUrlWeather(lat, long){
    return 'https://api.forecast.io/forecast/' + weatherApiKey+'/'+lat+','+long;
  }
	
	
	function successHandler2(wdata){
		console.log(wdata);
		var source = $('#info').html();
		var template = Handlebars.compile(source);
		var dataa = {
			location: wdata.latitude,
			
			todayHi: wdata.daily.data[0].apparentTemperatureMax,
			todayLow: wdata.daily.data[0].apparentTemperatureMin,
			pRainToday: wdata.daily.data[0].precipProbability*100,
			humidityToday: wdata.daily.data[0].humidity,
			todaySummary: wdata.daily.data[0].summary,
			todayIcon: wdata.daily.data[0].icon,
			
			tomorrowHi: wdata.daily.data[1].apparentTemperatureMax,
			tomorrowLow: wdata.daily.data[1].apparentTemperatureMin,
			pRainTomorrow: wdata.daily.data[1].precipProbability*100,
			humidityTomorrow: wdata.daily.data[1].humidity,
			tomorrowSummary:wdata.daily.data[1].summary,
			tomorrowIcon: wdata.daily.data[1].icon,
			
			tomorrowTomHi: wdata.daily.data[2].apparentTemperatureMax,
			tomorrowTomLow: wdata.daily.data[2].apparentTemperatureMin,
			pRainTomorrowTom: wdata.daily.data[2].precipProbability*100,
			humidityTomorrowTom: wdata.daily.data[2].humidity,
			tomorrowTomSummary: wdata.daily.data[2].summary,
			tomorrowTomIcon: wdata.daily.data[2].icon,
			
			currentTime1: wdata.hourly.data[0].time,
			currentH1: wdata.hourly.data[0].apparentTemperature,
			percentRainH1: wdata.hourly.data[0].precipProbability*100,
			iconH1: wdata.hourly.data[0].icon,
			summaryH1: wdata.hourly.data[0].summary,	
		   
			currentTime2: wdata.hourly.data[1].time,
			currentH2: wdata.hourly.data[1].apparentTemperature,
			percentRainH2: wdata.hourly.data[1].precipProbability*100,
			iconH2: wdata.hourly.data[1].icon,
			summaryH2: wdata.hourly.data[1].summary,	
			
			currentTime3: wdata.hourly.data[2].time,
			currentH3: wdata.hourly.data[2].apparentTemperature,
			percentRainH3: wdata.hourly.data[2].precipProbability*100,
			iconH3: wdata.hourly.data[2].icon,
			summaryH3: wdata.hourly.data[2].summary,
			
			currentTime4: wdata.hourly.data[3].time,
			currentH4: wdata.hourly.data[3].apparentTemperature,
			percentRainH4: wdata.hourly.data[3].precipProbability*100,
			iconH4: wdata.hourly.data[3].icon,
			summaryH4: wdata.hourly.data[3].summary,
			
			currentTime5: wdata.hourly.data[4].time,
			currentH5: wdata.hourly.data[4].apparentTemperature,
			percentRainH5: wdata.hourly.data[4].precipProbability*100,
			iconH5: wdata.hourly.data[4].icon,
			summaryH5: wdata.hourly.data[4].summary,
			
			currentTime6: wdata.hourly.data[5].time,
			currentH6: wdata.hourly.data[5].apparentTemperature,
			percentRainH6: wdata.hourly.data[5].precipProbability*100,
			iconH6: wdata.hourly.data[5].icon,
			summaryH6: wdata.hourly.data[5].summary,
			
			currentTime7: wdata.hourly.data[6].time,
			currentH7: wdata.hourly.data[6].apparentTemperature,
			percentRainH7: wdata.hourly.data[6].precipProbability*100,
			iconH7:wdata.hourly.data[6].icon,
			summaryH7: wdata.hourly.data[6].summary,
			
			currentTime8: wdata.hourly.data[7].time,
			currentH8: wdata.hourly.data[7].apparentTemperature,
			percentRainH8: wdata.hourly.data[7].precipProbability*100,
			iconH8: wdata.hourly.data[7].icon,
			summaryH8: wdata.hourly.data[7].summary,
			
			currentTime9: wdata.hourly.data[8].time,
			currentH9: wdata.hourly.data[8].apparentTemperature,
			percentRainH9: wdata.hourly.data[8].precipProbability*100,
			iconH9: wdata.hourly.data[8].icon,
			summaryH9: wdata.hourly.data[8].summary,
			
			currentTime10: wdata.hourly.data[9].time,
			currentH10: wdata.hourly.data[9].apparentTemperature,
			percentRainH10: wdata.hourly.data[9].precipProbability*100,
			iconH10: wdata.hourly.data[9].icon,
			summaryH10: wdata.hourly.data[9].summary,
			
			currentTime11: wdata.hourly.data[10].time,
			currentH11: wdata.hourly.data[10].apparentTemperature,
			percentRainH11: wdata.hourly.data[10].precipProbability*100,
			iconH11: wdata.hourly.data[10].icon,
			summaryH11: wdata.hourly.data[10].summary,
			
			currentTime12: wdata.hourly.data[11].time,
			currentH12: wdata.hourly.data[11].apparentTemperature,
			percentRainH12: wdata.hourly.data[11].precipProbability*100,
			iconH12: wdata.hourly.data[11].icon,
			summaryH12: wdata.hourly.data[11].summary,			
		};
			dataa.percentRainH1 = dataa.percentRainH1.toFixed();
		   dataa.percentRainH2 = dataa.percentRainH2.toFixed();
			dataa.percentRainH3 = dataa.percentRainH3.toFixed();
			dataa.percentRainH4 = dataa.percentRainH4.toFixed();
			dataa.percentRainH5 = dataa.percentRainH5.toFixed();
			dataa.percentRainH6 = dataa.percentRainH6.toFixed();
			dataa.percentRainH7 = dataa.percentRainH7.toFixed();
			dataa.percentRainH8 = dataa.percentRainH8.toFixed();
			dataa.percentRainH9 = dataa.percentRainH9.toFixed();
			dataa.percentRainH10 = dataa.percentRainH10.toFixed();
			dataa.percentRainH11 = dataa.percentRainH11.toFixed();
			dataa.percentRainH12 = dataa.percentRainH12.toFixed();
		
			dataa.pRainToday = dataa.pRainToday.toFixed();
			dataa.pRainTomorrow = dataa.pRainTomorrow.toFixed();
			dataa.pRainTomorrowTom = dataa.pRainTomorrowTom.toFixed();
		
			dataa.todayHi = dataa.todayHi.toFixed();
			dataa.todayLow = dataa.todayLow.toFixed();
			dataa.tomorrowHi = dataa.tomorrowHi.toFixed();
			dataa.tomorrowLow = dataa.tomorrowLow.toFixed();
			dataa.tomorrowTomHi = dataa.tomorrowTomHi.toFixed();
			dataa.tomorrowTomLow = dataa.tomorrowTomLow.toFixed();
			
			dataa.currentH1 = dataa.currentH1.toFixed();
			dataa.currentH2 = dataa.currentH2.toFixed();
			dataa.currentH3 = dataa.currentH3.toFixed();
			dataa.currentH4 = dataa.currentH4.toFixed();
		   dataa.currentH5 = dataa.currentH5.toFixed();
			dataa.currentH6 = dataa.currentH6.toFixed();
			dataa.currentH7 = dataa.currentH7.toFixed();
			dataa.currentH8 = dataa.currentH8.toFixed();
			dataa.currentH9 = dataa.currentH9.toFixed();
			dataa.currentH10 = dataa.currentH10.toFixed();
			dataa.currentH11 = dataa.currentH11.toFixed();
		   dataa.currentH12 = dataa.currentH12.toFixed();
		
			dataa.humidityToday = dataa.humidityToday.toFixed(2);
			dataa.humidityTomorrow = dataa.humidityTomorrow.toFixed(2);
			dataa.humidityTomorrowTom = dataa.humidityTomorrowTom.toFixed(2);
		
		   dataa.currentTime1 = moment.unix(dataa.currentTime1);
			dataa.currentTime2 = moment.unix(dataa.currentTime2);
			dataa.currentTime3 = moment.unix(dataa.currentTime3);
			dataa.currentTime4 = moment.unix(dataa.currentTime4);
			dataa.currentTime5 = moment.unix(dataa.currentTime5);
			dataa.currentTime6 = moment.unix(dataa.currentTime6);
			dataa.currentTime7 = moment.unix(dataa.currentTime7);
			dataa.currentTime8 = moment.unix(dataa.currentTime8);
			dataa.currentTime9 = moment.unix(dataa.currentTime9);
			dataa.currentTime10 = moment.unix(dataa.currentTime10);
			dataa.currentTime11 = moment.unix(dataa.currentTime11);
			dataa.currentTime12 = moment.unix(dataa.currentTime12);
		
		   dataa.currentTime1 = moment(dataa.currentTime1).format("h:mm a");
			dataa.currentTime2 = moment(dataa.currentTime2).format("h:mm a");
			dataa.currentTime3 = moment(dataa.currentTime3).format("h:mm a");
			dataa.currentTime4 = moment(dataa.currentTime4).format("h:mm a");
			dataa.currentTime5 = moment(dataa.currentTime5).format("h:mm a");
			dataa.currentTime6 = moment(dataa.currentTime6).format("h:mm a");
			dataa.currentTime7 = moment(dataa.currentTime7).format("h:mm a");
			dataa.currentTime8 = moment(dataa.currentTime8).format("h:mm a");
			dataa.currentTime9 = moment(dataa.currentTime9).format("h:mm a");
			dataa.currentTime10 = moment(dataa.currentTime10).format("h:mm a");
			dataa.currentTime11 = moment(dataa.currentTime11).format("h:mm a");
			dataa.currentTime12 = moment(dataa.currentTime12).format("h:mm a");	
			
		var html = template(dataa);
		$('#output').html(html);
		
		$('#location-output').text(address);
	}
	
	
});
