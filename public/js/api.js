$(document).ready(function(){
	var address = 'address';
	var lat = {};
	var long = {};
	
	$('#enterlocation').on('keyup',loadWeatherHtml1);
	$('#go').on('click',loadWeatherHtml2);
	$('#enterlocation').on('keyup',getcoordinates1);
	$('#go').on('click',getcoordinates11);
	
	$('#enterlocation2').on('keyup',getcoordinates2);
	$('#go2').on('click',getcoordinates22);	
		
	function loadWeatherHtml1(event){
		if (event.which == 13){
			$('#welcome').css('display', 'none');
			$('#address-input-bar2').css('display', 'initial');	
			$('body').css('background-image', 'url("https://www.wpfaster.org/wp-content/uploads/2014/06/sunshine-and-clouds-background.jpg")');
			$('body').css('background-size', '100% 100%');
		}
	}
	
	function loadWeatherHtml2(){
			$('#welcome').css('display', 'none');
			$('#address-input-bar2').css('display', 'initial');	
			$('body').css('background-image', 'url("https://www.wpfaster.org/wp-content/uploads/2014/06/sunshine-and-clouds-background.jpg")');
			$('body').css('background-size', '100% 100%');
	}
	
	function getcoordinates1(event){
		if (event.which == 13){
			address = $('#enterlocation').val();
			var ajaxObjects = {
					 url: buildUrlAddress (address),
					 success: successHandler,
					 error: errorHandler,
			};

			$.ajax(ajaxObjects);}
	}
	
	function getcoordinates11(){
			address = $('#enterlocation').val();
			var ajaxObjects = {
					 url: buildUrlAddress (address),
					 success: successHandler,
					 error: errorHandler,
			};

			$.ajax(ajaxObjects);
	}
	
	function getcoordinates2(event){
		if (event.which == 13){
			address = $('#enterlocation2').val();
			var ajaxObjects = {
					 url: buildUrlAddress (address),
					 success: successHandler,
					 error: errorHandler,
			};
		
		$.ajax(ajaxObjects);}
	}
	
	function getcoordinates22(){
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
			
			timeZone: wdata.timezone,
			
			currentlyIcon: wdata.currently.icon,
			currentlyTemp: wdata.currently.temperature,
			currentlyPress: wdata.currently.pressure,
			currentlyDew: wdata.currently.dewPoint,
			currentlyVis: wdata.currently.visibility,
			currentlyHumid: wdata.currently.humidity,
			currentlySum: wdata.daily.summary,
			
			day0: wdata.daily.data[0].time,
			day0Icon: wdata.daily.data[0].icon,
			day0HiTemp: wdata.daily.data[0].apparentTemperatureMax,
			day0HiTempTime: wdata.daily.data[0].apparentTemperatureMaxTime,
			day0LowTemp: wdata.daily.data[0].apparentTemperatureMin,
			day0LowTempTime: wdata.daily.data[0].apparentTemperatureMinTime,
			day0Rain: wdata.daily.data[0].precipProbability*100,
			day0Clouds: wdata.daily.data[0].cloudCover,
			day0Dew: wdata.daily.data[0].dewPoint,
			day0Humid: wdata.daily.data[0].humidity,
			day0Press: wdata.daily.data[0].pressure,
			day0Sunrise: wdata.daily.data[0].sunriseTime,
			day0Sunset: wdata.daily.data[0].sunsetTime,
			day0Vis: wdata.daily.data[0].visibility,
			day0WindSpeed: wdata.daily.data[0].windSpeed,
			day0WindBearing: wdata.daily.data[0].windBearing,
			day0Moon: wdata.daily.data[0].moonPhase,
			day0Summary: wdata.daily.data[0].summary,
			
			day1: wdata.daily.data[1].time,
			day1Icon: wdata.daily.data[1].icon,
			day1HiTemp: wdata.daily.data[1].apparentTemperatureMax,
			day1HiTempTime: wdata.daily.data[1].apparentTemperatureMaxTime,
			day1LowTemp: wdata.daily.data[1].apparentTemperatureMin,
			day1LowTempTime: wdata.daily.data[1].apparentTemperatureMinTime,
			day1Rain: wdata.daily.data[1].precipProbability*100,
			day1Clouds: wdata.daily.data[1].cloudCover,
			day1Dew: wdata.daily.data[1].dewPoint,
			day1Humid: wdata.daily.data[1].humidity,
			day1Press: wdata.daily.data[1].pressure,
			day1Sunrise: wdata.daily.data[1].sunriseTime,
			day1Sunset: wdata.daily.data[1].sunsetTime,
			day1Vis: wdata.daily.data[1].visibility,
			day1WindSpeed: wdata.daily.data[1].windSpeed,
			day1WindBearing: wdata.daily.data[1].windBearing,
			day1Moon: wdata.daily.data[1].moonPhase,
			day1Summary: wdata.daily.data[1].summary,
			
			day2: wdata.daily.data[2].time,
			day2Icon: wdata.daily.data[2].icon,
			day2HiTemp: wdata.daily.data[2].apparentTemperatureMax,
			day2HiTempTime: wdata.daily.data[2].apparentTemperatureMaxTime,
			day2LowTemp: wdata.daily.data[2].apparentTemperatureMin,
			day2LowTempTime: wdata.daily.data[2].apparentTemperatureMinTime,
			day2Rain: wdata.daily.data[2].precipProbability*100,
			day2Clouds: wdata.daily.data[2].cloudCover,
			day2Dew: wdata.daily.data[2].dewPoint,
			day2Humid: wdata.daily.data[2].humidity,
			day2Press: wdata.daily.data[2].pressure,
			day2Sunrise: wdata.daily.data[2].sunriseTime,
			day2Sunset: wdata.daily.data[2].sunsetTime,
			day2Vis: wdata.daily.data[2].visibility,
			day2WindSpeed: wdata.daily.data[2].windSpeed,
			day2WindBearing: wdata.daily.data[2].windBearing,
			day2Moon: wdata.daily.data[2].moonPhase,
			day2Summary: wdata.daily.data[2].summary,
			
			day3: wdata.daily.data[3].time,
			day3Icon: wdata.daily.data[3].icon,
			day3HiTemp: wdata.daily.data[3].apparentTemperatureMax,
			day3HiTempTime: wdata.daily.data[3].apparentTemperatureMaxTime,
			day3LowTemp: wdata.daily.data[3].apparentTemperatureMin,
			day3LowTempTime: wdata.daily.data[3].apparentTemperatureMinTime,
			day3Rain: wdata.daily.data[3].precipProbability*100,
			day3Clouds: wdata.daily.data[3].cloudCover,
			day3Dew: wdata.daily.data[3].dewPoint,
			day3Humid: wdata.daily.data[3].humidity,
			day3Press: wdata.daily.data[3].pressure,
			day3Sunrise: wdata.daily.data[3].sunriseTime,
			day3Sunset: wdata.daily.data[3].sunsetTime,
			day3Vis: wdata.daily.data[3].visibility,
			day3WindSpeed: wdata.daily.data[3].windSpeed,
			day3WindBearing: wdata.daily.data[3].windBearing,
			day3Moon: wdata.daily.data[3].moonPhase,
			day3Summary: wdata.daily.data[3].summary,
			
			day4: wdata.daily.data[4].time,
			day4Icon: wdata.daily.data[4].icon,
			day4HiTemp: wdata.daily.data[4].apparentTemperatureMax,
			day4HiTempTime: wdata.daily.data[4].apparentTemperatureMaxTime,
			day4LowTemp: wdata.daily.data[4].apparentTemperatureMin,
			day4LowTempTime: wdata.daily.data[4].apparentTemperatureMinTime,
			day4Rain: wdata.daily.data[4].precipProbability*100,
			day4Clouds: wdata.daily.data[4].cloudCover,
			day4Dew: wdata.daily.data[4].dewPoint,
			day4Humid: wdata.daily.data[4].humidity,
			day4Press: wdata.daily.data[4].pressure,
			day4Sunrise: wdata.daily.data[4].sunriseTime,
			day4Sunset: wdata.daily.data[4].sunsetTime,
			day4Vis: wdata.daily.data[4].visibility,
			day4WindSpeed: wdata.daily.data[4].windSpeed,
			day4WindBearing: wdata.daily.data[4].windBearing,
			day4Moon: wdata.daily.data[4].moonPhase,
			day4Summary: wdata.daily.data[4].summary,
			
			day5: wdata.daily.data[5].time,
			day5Icon: wdata.daily.data[5].icon,
			day5HiTemp: wdata.daily.data[5].apparentTemperatureMax,
			day5HiTempTime: wdata.daily.data[5].apparentTemperatureMaxTime,
			day5LowTemp: wdata.daily.data[5].apparentTemperatureMin,
			day5LowTempTime: wdata.daily.data[5].apparentTemperatureMinTime,
			day5Rain: wdata.daily.data[5].precipProbability*100,
			day5Clouds: wdata.daily.data[5].cloudCover,
			day5Dew: wdata.daily.data[5].dewPoint,
			day5Humid: wdata.daily.data[5].humidity,
			day5Press: wdata.daily.data[5].pressure,
			day5Sunrise: wdata.daily.data[5].sunriseTime,
			day5Sunset: wdata.daily.data[5].sunsetTime,
			day5Vis: wdata.daily.data[5].visibility,
			day5WindSpeed: wdata.daily.data[5].windSpeed,
			day5WindBearing: wdata.daily.data[5].windBearing,
			day5Moon: wdata.daily.data[5].moonPhase,
			day5Summary: wdata.daily.data[5].summary,
			
			day6: wdata.daily.data[6].time,
			day6Icon: wdata.daily.data[6].icon,
			day6HiTemp: wdata.daily.data[6].apparentTemperatureMax,
			day6HiTempTime: wdata.daily.data[6].apparentTemperatureMaxTime,
			day6LowTemp: wdata.daily.data[6].apparentTemperatureMin,
			day6LowTempTime: wdata.daily.data[6].apparentTemperatureMinTime,
			day6Rain: wdata.daily.data[6].precipProbability*100,
			day6Clouds: wdata.daily.data[6].cloudCover,
			day6Dew: wdata.daily.data[6].dewPoint,
			day6Humid: wdata.daily.data[6].humidity,
			day6Press: wdata.daily.data[6].pressure,
			day6Sunrise: wdata.daily.data[6].sunriseTime,
			day6Sunset: wdata.daily.data[6].sunsetTime,
			day6Vis: wdata.daily.data[6].visibility,
			day6WindSpeed: wdata.daily.data[6].windSpeed,
			day6WindBearing: wdata.daily.data[6].windBearing,
			day6Moon: wdata.daily.data[6].moonPhase,
			day6Summary: wdata.daily.data[6].summary,
			
			day7: wdata.daily.data[7].time,
			day7Icon: wdata.daily.data[7].icon,
			day7HiTemp: wdata.daily.data[7].apparentTemperatureMax,
			day7HiTempTime: wdata.daily.data[7].apparentTemperatureMaxTime,
			day7LowTemp: wdata.daily.data[7].apparentTemperatureMin,
			day7LowTempTime: wdata.daily.data[7].apparentTemperatureMinTime,
			day7Rain: wdata.daily.data[7].precipProbability*100,
			day7Clouds: wdata.daily.data[7].cloudCover,
			day7Dew: wdata.daily.data[7].dewPoint,
			day7Humid: wdata.daily.data[7].humidity,
			day7Press: wdata.daily.data[7].pressure,
			day7Sunrise: wdata.daily.data[7].sunriseTime,
			day7Sunset: wdata.daily.data[7].sunsetTime,
			day7Vis: wdata.daily.data[7].visibility,
			day7WindSpeed: wdata.daily.data[7].windSpeed,
			day7WindBearing: wdata.daily.data[7].windBearing,
			day7Moon: wdata.daily.data[7].moonPhase,
			day7Summary: wdata.daily.data[7].summary,
			
			time1: wdata.hourly.data[1].time,
			hourTemp1: wdata.hourly.data[1].apparentTemperature,
			hourRain1: wdata.hourly.data[1].precipProbability*100,
			hourIcon1: wdata.hourly.data[1].icon,
			hourInten1: wdata.hourly.data[1].precipIntensity,
			hourClouds1: wdata.hourly.data[1].cloudCover, 
			hourDew1: wdata.hourly.data[1].dewPoint,
			hourHumid1: wdata.hourly.data[1].humidity,
			hourPress1: wdata.hourly.data[1].pressure,
			hourVis1: wdata.hourly.data[1].visibility,
			hourWindSpeed1: wdata.hourly.data[1].windSpeed,
			hourWindBearing1: wdata.hourly.data[1].windBearing,
			
			time2: wdata.hourly.data[2].time,
			hourTemp2: wdata.hourly.data[2].apparentTemperature,
			hourRain2: wdata.hourly.data[2].precipProbability*100,
			hourIcon2: wdata.hourly.data[2].icon,
			hourInten2: wdata.hourly.data[2].precipIntensity,
			hourClouds2: wdata.hourly.data[2].cloudCover, 
			hourDew2: wdata.hourly.data[2].dewPoint,
			hourHumid2: wdata.hourly.data[2].humidity,
			hourPress2: wdata.hourly.data[2].pressure,
			hourVis2: wdata.hourly.data[2].visibility,
			hourWindSpeed2: wdata.hourly.data[2].windSpeed,
			hourWindBearing2: wdata.hourly.data[2].windBearing,
			
			time3: wdata.hourly.data[3].time,
			hourTemp3: wdata.hourly.data[3].apparentTemperature,
			hourRain3: wdata.hourly.data[3].precipProbability*100,
			hourIcon3: wdata.hourly.data[3].icon,
			hourInten3: wdata.hourly.data[3].precipIntensity,
			hourClouds3: wdata.hourly.data[3].cloudCover, 
			hourDew3: wdata.hourly.data[3].dewPoint,
			hourHumid3: wdata.hourly.data[3].humidity,
			hourPress3: wdata.hourly.data[3].pressure,
			hourVis3: wdata.hourly.data[3].visibility,
			hourWindSpeed3: wdata.hourly.data[3].windSpeed,
			hourWindBearing3: wdata.hourly.data[3].windBearing,
			
			time4: wdata.hourly.data[4].time,
			hourTemp4: wdata.hourly.data[4].apparentTemperature,
			hourRain4: wdata.hourly.data[4].precipProbability*100,
			hourIcon4: wdata.hourly.data[4].icon,
			hourInten4: wdata.hourly.data[4].precipIntensity,
			hourClouds4: wdata.hourly.data[4].cloudCover, 
			hourDew4: wdata.hourly.data[4].dewPoint,
			hourHumid4: wdata.hourly.data[4].humidity,
			hourPress4: wdata.hourly.data[4].pressure,
			hourVis4: wdata.hourly.data[4].visibility,
			hourWindSpeed4: wdata.hourly.data[4].windSpeed,
			hourWindBearing4: wdata.hourly.data[4].windBearing,
			
			time5: wdata.hourly.data[5].time,
			hourTemp5: wdata.hourly.data[5].apparentTemperature,
			hourRain5: wdata.hourly.data[5].precipProbability*100,
			hourIcon5: wdata.hourly.data[5].icon,
			hourInten5: wdata.hourly.data[5].precipIntensity,
			hourClouds5: wdata.hourly.data[5].cloudCover, 
			hourDew5: wdata.hourly.data[5].dewPoint,
			hourHumid5: wdata.hourly.data[5].humidity,
			hourPress5: wdata.hourly.data[5].pressure,
			hourVis5: wdata.hourly.data[5].visibility,
			hourWindSpeed5: wdata.hourly.data[5].windSpeed,
			hourWindBearing5: wdata.hourly.data[5].windBearing,
			
			time6: wdata.hourly.data[6].time,
			hourTemp6: wdata.hourly.data[6].apparentTemperature,
			hourRain6: wdata.hourly.data[6].precipProbability*100,
			hourIcon6: wdata.hourly.data[6].icon,
			hourInten6: wdata.hourly.data[6].precipIntensity,
			hourClouds6: wdata.hourly.data[6].cloudCover, 
			hourDew6: wdata.hourly.data[6].dewPoint,
			hourHumid6: wdata.hourly.data[6].humidity,
			hourPress6: wdata.hourly.data[6].pressure,
			hourVis6: wdata.hourly.data[6].visibility,
			hourWindSpeed6: wdata.hourly.data[6].windSpeed,
			hourWindBearing6: wdata.hourly.data[6].windBearing,
			
			time7: wdata.hourly.data[7].time,
			hourTemp7: wdata.hourly.data[7].apparentTemperature,
			hourRain7: wdata.hourly.data[7].precipProbability*100,
			hourIcon7: wdata.hourly.data[7].icon,
			hourInten7: wdata.hourly.data[7].precipIntensity,
			hourClouds7: wdata.hourly.data[7].cloudCover, 
			hourDew7: wdata.hourly.data[7].dewPoint,
			hourHumid7: wdata.hourly.data[7].humidity,
			hourPress7: wdata.hourly.data[7].pressure,
			hourVis7: wdata.hourly.data[7].visibility,
			hourWindSpeed7: wdata.hourly.data[7].windSpeed,
			hourWindBearing7: wdata.hourly.data[7].windBearing,
			
			time8: wdata.hourly.data[8].time,
			hourTemp8: wdata.hourly.data[8].apparentTemperature,
			hourRain8: wdata.hourly.data[8].precipProbability*100,
			hourIcon8: wdata.hourly.data[8].icon,
			hourInten8: wdata.hourly.data[8].precipIntensity,
			hourClouds8: wdata.hourly.data[8].cloudCover, 
			hourDew8: wdata.hourly.data[8].dewPoint,
			hourHumid8: wdata.hourly.data[8].humidity,
			hourPress8: wdata.hourly.data[8].pressure,
			hourVis8: wdata.hourly.data[8].visibility,
			hourWindSpeed8: wdata.hourly.data[8].windSpeed,
			hourWindBearing8: wdata.hourly.data[8].windBearing,
			
			time9: wdata.hourly.data[9].time,
			hourTemp9: wdata.hourly.data[9].apparentTemperature,
			hourRain9: wdata.hourly.data[9].precipProbability*100,
			hourIcon9: wdata.hourly.data[9].icon,
			hourInten9: wdata.hourly.data[9].precipIntensity,
			hourClouds9: wdata.hourly.data[9].cloudCover, 
			hourDew9: wdata.hourly.data[9].dewPoint,
			hourHumid9: wdata.hourly.data[9].humidity,
			hourPress9: wdata.hourly.data[9].pressure,
			hourVis9: wdata.hourly.data[9].visibility,
			hourWindSpeed9: wdata.hourly.data[9].windSpeed,
			hourWindBearing9: wdata.hourly.data[9].windBearing,
			
			time10: wdata.hourly.data[10].time,
			hourTemp10: wdata.hourly.data[10].apparentTemperature,
			hourRain10: wdata.hourly.data[10].precipProbability*100,
			hourIcon10: wdata.hourly.data[10].icon,
			hourInten10: wdata.hourly.data[10].precipIntensity,
			hourClouds10: wdata.hourly.data[10].cloudCover, 
			hourDew10: wdata.hourly.data[10].dewPoint,
			hourHumid10: wdata.hourly.data[10].humidity,
			hourPress10: wdata.hourly.data[10].pressure,
			hourVis10: wdata.hourly.data[10].visibility,
			hourWindSpeed10: wdata.hourly.data[10].windSpeed,
			hourWindBearing10: wdata.hourly.data[10].windBearing,
			
			time11: wdata.hourly.data[11].time,
			hourTemp11: wdata.hourly.data[11].apparentTemperature,
			hourRain11: wdata.hourly.data[11].precipProbability*100,
			hourIcon11: wdata.hourly.data[11].icon,
			hourInten11: wdata.hourly.data[11].precipIntensity,
			hourClouds11: wdata.hourly.data[11].cloudCover, 
			hourDew11: wdata.hourly.data[11].dewPoint,
			hourHumid11: wdata.hourly.data[11].humidity,
			hourPress11: wdata.hourly.data[11].pressure,
			hourVis11: wdata.hourly.data[11].visibility,
			hourWindSpeed11: wdata.hourly.data[11].windSpeed,
			hourWindBearing11: wdata.hourly.data[11].windBearing,
			
			time12: wdata.hourly.data[12].time,
			hourTemp12: wdata.hourly.data[12].apparentTemperature,
			hourRain12: wdata.hourly.data[12].precipProbability*100,
			hourIcon12: wdata.hourly.data[12].icon,
			hourInten12: wdata.hourly.data[12].precipIntensity,
			hourClouds12: wdata.hourly.data[12].cloudCover, 
			hourDew12: wdata.hourly.data[12].dewPoint,
			hourHumid12: wdata.hourly.data[12].humidity,
			hourPress12: wdata.hourly.data[12].pressure,
			hourVis12: wdata.hourly.data[12].visibility,
			hourWindSpeed12: wdata.hourly.data[12].windSpeed,
			hourWindBearing12: wdata.hourly.data[12].windBearing,
			
			time13: wdata.hourly.data[13].time,
			hourTemp13: wdata.hourly.data[13].apparentTemperature,
			hourRain13: wdata.hourly.data[13].precipProbability*100,
			hourIcon13: wdata.hourly.data[13].icon,
			hourInten13: wdata.hourly.data[13].precipIntensity,
			hourClouds13: wdata.hourly.data[13].cloudCover, 
			hourDew13: wdata.hourly.data[13].dewPoint,
			hourHumid13: wdata.hourly.data[13].humidity,
			hourPress13: wdata.hourly.data[13].pressure,
			hourVis13: wdata.hourly.data[13].visibility,
			hourWindSpeed13: wdata.hourly.data[13].windSpeed,
			hourWindBearing13: wdata.hourly.data[13].windBearing,
			
			time14: wdata.hourly.data[14].time,
			hourTemp14: wdata.hourly.data[14].apparentTemperature,
			hourRain14: wdata.hourly.data[14].precipProbability*100,
			hourIcon14: wdata.hourly.data[14].icon,
			hourInten14: wdata.hourly.data[14].precipIntensity,
			hourClouds14: wdata.hourly.data[14].cloudCover, 
			hourDew14: wdata.hourly.data[14].dewPoint,
			hourHumid14: wdata.hourly.data[14].humidity,
			hourPress14: wdata.hourly.data[14].pressure,
			hourVis14: wdata.hourly.data[14].visibility,
			hourWindSpeed14: wdata.hourly.data[14].windSpeed,
			hourWindBearing14: wdata.hourly.data[14].windBearing,
			
			time15: wdata.hourly.data[15].time,
			hourTemp15: wdata.hourly.data[15].apparentTemperature,
			hourRain15: wdata.hourly.data[15].precipProbability*100,
			hourIcon15: wdata.hourly.data[15].icon,
			hourInten15: wdata.hourly.data[15].precipIntensity,
			hourClouds15: wdata.hourly.data[15].cloudCover, 
			hourDew15: wdata.hourly.data[15].dewPoint,
			hourHumid15: wdata.hourly.data[15].humidity,
			hourPress15: wdata.hourly.data[15].pressure,
			hourVis15: wdata.hourly.data[15].visibility,
			hourWindSpeed15: wdata.hourly.data[15].windSpeed,
			hourWindBearing15: wdata.hourly.data[15].windBearing,
			
			time16: wdata.hourly.data[16].time,
			hourTemp16: wdata.hourly.data[16].apparentTemperature,
			hourRain16: wdata.hourly.data[16].precipProbability*100,
			hourIcon16: wdata.hourly.data[16].icon,
			hourInten16: wdata.hourly.data[16].precipIntensity,
			hourClouds16: wdata.hourly.data[16].cloudCover, 
			hourDew16: wdata.hourly.data[16].dewPoint,
			hourHumid16: wdata.hourly.data[16].humidity,
			hourPress16: wdata.hourly.data[16].pressure,
			hourVis16: wdata.hourly.data[16].visibility,
			hourWindSpeed16: wdata.hourly.data[16].windSpeed,
			hourWindBearing16: wdata.hourly.data[16].windBearing,
			
			time17: wdata.hourly.data[17].time,
			hourTemp17: wdata.hourly.data[17].apparentTemperature,
			hourRain17: wdata.hourly.data[17].precipProbability*100,
			hourIcon17: wdata.hourly.data[17].icon,
			hourInten17: wdata.hourly.data[17].precipIntensity,
			hourClouds17: wdata.hourly.data[17].cloudCover, 
			hourDew17: wdata.hourly.data[17].dewPoint,
			hourHumid17: wdata.hourly.data[17].humidity,
			hourPress17: wdata.hourly.data[17].pressure,
			hourVis17: wdata.hourly.data[17].visibility,
			hourWindSpeed17: wdata.hourly.data[17].windSpeed,
			hourWindBearing17: wdata.hourly.data[17].windBearing,
			
			time18: wdata.hourly.data[18].time,
			hourTemp18: wdata.hourly.data[18].apparentTemperature,
			hourRain18: wdata.hourly.data[18].precipProbability*100,
			hourIcon18: wdata.hourly.data[18].icon,
			hourInten18: wdata.hourly.data[18].precipIntensity,
			hourClouds18: wdata.hourly.data[18].cloudCover, 
			hourDew18: wdata.hourly.data[18].dewPoint,
			hourHumid18: wdata.hourly.data[18].humidity,
			hourPress18: wdata.hourly.data[18].pressure,
			hourVis18: wdata.hourly.data[18].visibility,
			hourWindSpeed18: wdata.hourly.data[18].windSpeed,
			hourWindBearing18: wdata.hourly.data[18].windBearing,
			
			time19: wdata.hourly.data[19].time,
			hourTemp19: wdata.hourly.data[19].apparentTemperature,
			hourRain19: wdata.hourly.data[19].precipProbability*100,
			hourIcon19: wdata.hourly.data[19].icon,
			hourInten19: wdata.hourly.data[19].precipIntensity,
			hourClouds19: wdata.hourly.data[19].cloudCover, 
			hourDew19: wdata.hourly.data[19].dewPoint,
			hourHumid19: wdata.hourly.data[19].humidity,
			hourPress19: wdata.hourly.data[19].pressure,
			hourVis19: wdata.hourly.data[19].visibility,
			hourWindSpeed19: wdata.hourly.data[19].windSpeed,
			hourWindBearing19: wdata.hourly.data[19].windBearing,
			
			time20: wdata.hourly.data[20].time,
			hourTemp20: wdata.hourly.data[20].apparentTemperature,
			hourRain20: wdata.hourly.data[20].precipProbability*100,
			hourIcon20: wdata.hourly.data[20].icon,
			hourInten20: wdata.hourly.data[20].precipIntensity,
			hourClouds20: wdata.hourly.data[20].cloudCover, 
			hourDew20: wdata.hourly.data[20].dewPoint,
			hourHumid20: wdata.hourly.data[20].humidity,
			hourPress20: wdata.hourly.data[20].pressure,
			hourVis20: wdata.hourly.data[20].visibility,
			hourWindSpeed20: wdata.hourly.data[20].windSpeed,
			hourWindBearing20: wdata.hourly.data[20].windBearing,
			
			time21: wdata.hourly.data[21].time,
			hourTemp21: wdata.hourly.data[21].apparentTemperature,
			hourRain21: wdata.hourly.data[21].precipProbability*100,
			hourIcon21: wdata.hourly.data[21].icon,
			hourInten21: wdata.hourly.data[21].precipIntensity,
			hourClouds21: wdata.hourly.data[21].cloudCover, 
			hourDew21: wdata.hourly.data[21].dewPoint,
			hourHumid21: wdata.hourly.data[21].humidity,
			hourPress21: wdata.hourly.data[21].pressure,
			hourVis21: wdata.hourly.data[21].visibility,
			hourWindSpeed21: wdata.hourly.data[21].windSpeed,
			hourWindBearing21: wdata.hourly.data[21].windBearing,
			
			time22: wdata.hourly.data[22].time,
			hourTemp22: wdata.hourly.data[22].apparentTemperature,
			hourRain22: wdata.hourly.data[22].precipProbability*100,
			hourIcon22: wdata.hourly.data[22].icon,
			hourInten22: wdata.hourly.data[22].precipIntensity,
			hourClouds22: wdata.hourly.data[22].cloudCover, 
			hourDew22: wdata.hourly.data[22].dewPoint,
			hourHumid22: wdata.hourly.data[22].humidity,
			hourPress22: wdata.hourly.data[22].pressure,
			hourVis22: wdata.hourly.data[22].visibility,
			hourWindSpeed22: wdata.hourly.data[22].windSpeed,
			hourWindBearing22: wdata.hourly.data[22].windBearing,
			
			time23: wdata.hourly.data[23].time,
			hourTemp23: wdata.hourly.data[23].apparentTemperature,
			hourRain23: wdata.hourly.data[23].precipProbability*100,
			hourIcon23: wdata.hourly.data[23].icon,
			hourInten23: wdata.hourly.data[23].precipIntensity,
			hourClouds23: wdata.hourly.data[23].cloudCover, 
			hourDew23: wdata.hourly.data[23].dewPoint,
			hourHumid23: wdata.hourly.data[23].humidity,
			hourPress23: wdata.hourly.data[23].pressure,
			hourVis23: wdata.hourly.data[23].visibility,
			hourWindSpeed23: wdata.hourly.data[23].windSpeed,
			hourWindBearing23: wdata.hourly.data[23].windBearing,
			
			time24: wdata.hourly.data[24].time,
			hourTemp24: wdata.hourly.data[24].apparentTemperature,
			hourRain24: wdata.hourly.data[24].precipProbability*100,
			hourIcon24: wdata.hourly.data[24].icon,
			hourInten24: wdata.hourly.data[24].precipIntensity,
			hourClouds24: wdata.hourly.data[24].cloudCover, 
			hourDew24: wdata.hourly.data[24].dewPoint,
			hourHumid24: wdata.hourly.data[24].humidity,
			hourPress24: wdata.hourly.data[24].pressure,
			hourVis24: wdata.hourly.data[24].visibility,
			hourWindSpeed24: wdata.hourly.data[24].windSpeed,
			hourWindBearing24: wdata.hourly.data[24].windBearing,
			
			time25: wdata.hourly.data[25].time,
			hourTemp25: wdata.hourly.data[25].apparentTemperature,
			hourRain25: wdata.hourly.data[25].precipProbability*100,
			hourIcon25: wdata.hourly.data[25].icon,
			hourInten25: wdata.hourly.data[25].precipIntensity,
			hourClouds25: wdata.hourly.data[25].cloudCover, 
			hourDew25: wdata.hourly.data[25].dewPoint,
			hourHumid25: wdata.hourly.data[25].humidity,
			hourPress25: wdata.hourly.data[25].pressure,
			hourVis25: wdata.hourly.data[25].visibility,
			hourWindSpeed25: wdata.hourly.data[25].windSpeed,
			hourWindBearing25: wdata.hourly.data[25].windBearing,
			
			time26: wdata.hourly.data[26].time,
			hourTemp26: wdata.hourly.data[26].apparentTemperature,
			hourRain26: wdata.hourly.data[26].precipProbability*100,
			hourIcon26: wdata.hourly.data[26].icon,
			hourInten26: wdata.hourly.data[26].precipIntensity,
			hourClouds26: wdata.hourly.data[26].cloudCover, 
			hourDew26: wdata.hourly.data[26].dewPoint,
			hourHumid26: wdata.hourly.data[26].humidity,
			hourPress26: wdata.hourly.data[26].pressure,
			hourVis26: wdata.hourly.data[26].visibility,
			hourWindSpeed26: wdata.hourly.data[26].windSpeed,
			hourWindBearing26: wdata.hourly.data[26].windBearing,
			
			time27: wdata.hourly.data[27].time,
			hourTemp27: wdata.hourly.data[27].apparentTemperature,
			hourRain27: wdata.hourly.data[27].precipProbability*100,
			hourIcon27: wdata.hourly.data[27].icon,
			hourInten27: wdata.hourly.data[27].precipIntensity,
			hourClouds27: wdata.hourly.data[27].cloudCover, 
			hourDew27: wdata.hourly.data[27].dewPoint,
			hourHumid27: wdata.hourly.data[27].humidity,
			hourPress27: wdata.hourly.data[27].pressure,
			hourVis27: wdata.hourly.data[27].visibility,
			hourWindSpeed27: wdata.hourly.data[27].windSpeed,
			hourWindBearing27: wdata.hourly.data[27].windBearing,
			
			time28: wdata.hourly.data[28].time,
			hourTemp28: wdata.hourly.data[28].apparentTemperature,
			hourRain28: wdata.hourly.data[28].precipProbability*100,
			hourIcon28: wdata.hourly.data[28].icon,
			hourInten28: wdata.hourly.data[28].precipIntensity,
			hourClouds28: wdata.hourly.data[28].cloudCover, 
			hourDew28: wdata.hourly.data[28].dewPoint,
			hourHumid28: wdata.hourly.data[28].humidity,
			hourPress28: wdata.hourly.data[28].pressure,
			hourVis28: wdata.hourly.data[28].visibility,
			hourWindSpeed28: wdata.hourly.data[28].windSpeed,
			hourWindBearing28: wdata.hourly.data[28].windBearing,
			
			time29: wdata.hourly.data[29].time,
			hourTemp29: wdata.hourly.data[29].apparentTemperature,
			hourRain29: wdata.hourly.data[29].precipProbability*100,
			hourIcon29: wdata.hourly.data[29].icon,
			hourInten29: wdata.hourly.data[29].precipIntensity,
			hourClouds29: wdata.hourly.data[29].cloudCover, 
			hourDew29: wdata.hourly.data[29].dewPoint,
			hourHumid29: wdata.hourly.data[29].humidity,
			hourPress29: wdata.hourly.data[29].pressure,
			hourVis29: wdata.hourly.data[29].visibility,
			hourWindSpeed29: wdata.hourly.data[29].windSpeed,
			hourWindBearing29: wdata.hourly.data[29].windBearing,
			
			time30: wdata.hourly.data[30].time,
			hourTemp30: wdata.hourly.data[30].apparentTemperature,
			hourRain30: wdata.hourly.data[30].precipProbability*100,
			hourIcon30: wdata.hourly.data[30].icon,
			hourInten30: wdata.hourly.data[30].precipIntensity,
			hourClouds30: wdata.hourly.data[30].cloudCover, 
			hourDew30: wdata.hourly.data[30].dewPoint,
			hourHumid30: wdata.hourly.data[30].humidity,
			hourPress30: wdata.hourly.data[30].pressure,
			hourVis30: wdata.hourly.data[30].visibility,
			hourWindSpeed30: wdata.hourly.data[30].windSpeed,
			hourWindBearing30: wdata.hourly.data[30].windBearing,
			
			time31: wdata.hourly.data[31].time,
			hourTemp31: wdata.hourly.data[31].apparentTemperature,
			hourRain31: wdata.hourly.data[31].precipProbability*100,
			hourIcon31: wdata.hourly.data[31].icon,
			hourInten31: wdata.hourly.data[31].precipIntensity,
			hourClouds31: wdata.hourly.data[31].cloudCover, 
			hourDew31: wdata.hourly.data[31].dewPoint,
			hourHumid31: wdata.hourly.data[31].humidity,
			hourPress31: wdata.hourly.data[31].pressure,
			hourVis31: wdata.hourly.data[31].visibility,
			hourWindSpeed31: wdata.hourly.data[31].windSpeed,
			hourWindBearing31: wdata.hourly.data[31].windBearing,
			
			time32: wdata.hourly.data[32].time,
			hourTemp32: wdata.hourly.data[32].apparentTemperature,
			hourRain32: wdata.hourly.data[32].precipProbability*100,
			hourIcon32: wdata.hourly.data[32].icon,
			hourInten32: wdata.hourly.data[32].precipIntensity,
			hourClouds32: wdata.hourly.data[32].cloudCover, 
			hourDew32: wdata.hourly.data[32].dewPoint,
			hourHumid32: wdata.hourly.data[32].humidity,
			hourPress32: wdata.hourly.data[32].pressure,
			hourVis32: wdata.hourly.data[32].visibility,
			hourWindSpeed32: wdata.hourly.data[32].windSpeed,
			hourWindBearing32: wdata.hourly.data[32].windBearing,
			
			time33: wdata.hourly.data[33].time,
			hourTemp33: wdata.hourly.data[33].apparentTemperature,
			hourRain33: wdata.hourly.data[33].precipProbability*100,
			hourIcon33: wdata.hourly.data[33].icon,
			hourInten33: wdata.hourly.data[33].precipIntensity,
			hourClouds33: wdata.hourly.data[33].cloudCover, 
			hourDew33: wdata.hourly.data[33].dewPoint,
			hourHumid33: wdata.hourly.data[33].humidity,
			hourPress33: wdata.hourly.data[33].pressure,
			hourVis33: wdata.hourly.data[33].visibility,
			hourWindSpeed33: wdata.hourly.data[33].windSpeed,
			hourWindBearing33: wdata.hourly.data[33].windBearing,
			
			time34: wdata.hourly.data[34].time,
			hourTemp34: wdata.hourly.data[34].apparentTemperature,
			hourRain34: wdata.hourly.data[34].precipProbability*100,
			hourIcon34: wdata.hourly.data[34].icon,
			hourInten34: wdata.hourly.data[34].precipIntensity,
			hourClouds34: wdata.hourly.data[34].cloudCover, 
			hourDew34: wdata.hourly.data[34].dewPoint,
			hourHumid34: wdata.hourly.data[34].humidity,
			hourPress34: wdata.hourly.data[34].pressure,
			hourVis34: wdata.hourly.data[34].visibility,
			hourWindSpeed34: wdata.hourly.data[34].windSpeed,
			hourWindBearing34: wdata.hourly.data[34].windBearing,
			
			time35: wdata.hourly.data[35].time,
			hourTemp35: wdata.hourly.data[35].apparentTemperature,
			hourRain35: wdata.hourly.data[35].precipProbability*100,
			hourIcon35: wdata.hourly.data[35].icon,
			hourInten35: wdata.hourly.data[35].precipIntensity,
			hourClouds35: wdata.hourly.data[35].cloudCover, 
			hourDew35: wdata.hourly.data[35].dewPoint,
			hourHumid35: wdata.hourly.data[35].humidity,
			hourPress35: wdata.hourly.data[35].pressure,
			hourVis35: wdata.hourly.data[35].visibility,
			hourWindSpeed35: wdata.hourly.data[35].windSpeed,
			hourWindBearing35: wdata.hourly.data[35].windBearing,
			
			time36: wdata.hourly.data[36].time,
			hourTemp36: wdata.hourly.data[36].apparentTemperature,
			hourRain36: wdata.hourly.data[36].precipProbability*100,
			hourIcon36: wdata.hourly.data[36].icon,
			hourInten36: wdata.hourly.data[36].precipIntensity,
			hourClouds36: wdata.hourly.data[36].cloudCover, 
			hourDew36: wdata.hourly.data[36].dewPoint,
			hourHumid36: wdata.hourly.data[36].humidity,
			hourPress36: wdata.hourly.data[36].pressure,
			hourVis36: wdata.hourly.data[36].visibility,
			hourWindSpeed36: wdata.hourly.data[36].windSpeed,
			hourWindBearing36: wdata.hourly.data[36].windBearing,
			
			time37: wdata.hourly.data[37].time,
			hourTemp37: wdata.hourly.data[37].apparentTemperature,
			hourRain37: wdata.hourly.data[37].precipProbability*100,
			hourIcon37: wdata.hourly.data[37].icon,
			hourInten37: wdata.hourly.data[37].precipIntensity,
			hourClouds37: wdata.hourly.data[37].cloudCover, 
			hourDew37: wdata.hourly.data[37].dewPoint,
			hourHumid37: wdata.hourly.data[37].humidity,
			hourPress37: wdata.hourly.data[37].pressure,
			hourVis37: wdata.hourly.data[37].visibility,
			hourWindSpeed37: wdata.hourly.data[37].windSpeed,
			hourWindBearing37: wdata.hourly.data[37].windBearing,
			
			time38: wdata.hourly.data[38].time,
			hourTemp38: wdata.hourly.data[38].apparentTemperature,
			hourRain38: wdata.hourly.data[38].precipProbability*100,
			hourIcon38: wdata.hourly.data[38].icon,
			hourInten38: wdata.hourly.data[38].precipIntensity,
			hourClouds38: wdata.hourly.data[38].cloudCover, 
			hourDew38: wdata.hourly.data[38].dewPoint,
			hourHumid38: wdata.hourly.data[38].humidity,
			hourPress38: wdata.hourly.data[38].pressure,
			hourVis38: wdata.hourly.data[38].visibility,
			hourWindSpeed38: wdata.hourly.data[38].windSpeed,
			hourWindBearing38: wdata.hourly.data[38].windBearing,
			
			time39: wdata.hourly.data[39].time,
			hourTemp39: wdata.hourly.data[39].apparentTemperature,
			hourRain39: wdata.hourly.data[39].precipProbability*100,
			hourIcon39: wdata.hourly.data[39].icon,
			hourInten39: wdata.hourly.data[39].precipIntensity,
			hourClouds39: wdata.hourly.data[39].cloudCover, 
			hourDew39: wdata.hourly.data[39].dewPoint,
			hourHumid39: wdata.hourly.data[39].humidity,
			hourPress39: wdata.hourly.data[39].pressure,
			hourVis39: wdata.hourly.data[39].visibility,
			hourWindSpeed39: wdata.hourly.data[39].windSpeed,
			hourWindBearing39: wdata.hourly.data[39].windBearing,
			
			time40: wdata.hourly.data[40].time,
			hourTemp40: wdata.hourly.data[40].apparentTemperature,
			hourRain40: wdata.hourly.data[40].precipProbability*100,
			hourIcon40: wdata.hourly.data[40].icon,
			hourInten40: wdata.hourly.data[40].precipIntensity,
			hourClouds40: wdata.hourly.data[40].cloudCover, 
			hourDew40: wdata.hourly.data[40].dewPoint,
			hourHumid40: wdata.hourly.data[40].humidity,
			hourPress40: wdata.hourly.data[40].pressure,
			hourVis40: wdata.hourly.data[40].visibility,
			hourWindSpeed40: wdata.hourly.data[40].windSpeed,
			hourWindBearing40: wdata.hourly.data[40].windBearing,
			
			time41: wdata.hourly.data[41].time,
			hourTemp41: wdata.hourly.data[41].apparentTemperature,
			hourRain41: wdata.hourly.data[41].precipProbability*100,
			hourIcon41: wdata.hourly.data[41].icon,
			hourInten41: wdata.hourly.data[41].precipIntensity,
			hourClouds41: wdata.hourly.data[41].cloudCover, 
			hourDew41: wdata.hourly.data[41].dewPoint,
			hourHumid41: wdata.hourly.data[41].humidity,
			hourPress41: wdata.hourly.data[41].pressure,
			hourVis41: wdata.hourly.data[41].visibility,
			hourWindSpeed41: wdata.hourly.data[41].windSpeed,
			hourWindBearing41: wdata.hourly.data[41].windBearing,
			
			time42: wdata.hourly.data[42].time,
			hourTemp42: wdata.hourly.data[42].apparentTemperature,
			hourRain42: wdata.hourly.data[42].precipProbability*100,
			hourIcon42: wdata.hourly.data[42].icon,
			hourInten42: wdata.hourly.data[42].precipIntensity,
			hourClouds42: wdata.hourly.data[42].cloudCover, 
			hourDew42: wdata.hourly.data[42].dewPoint,
			hourHumid42: wdata.hourly.data[42].humidity,
			hourPress42: wdata.hourly.data[42].pressure,
			hourVis42: wdata.hourly.data[42].visibility,
			hourWindSpeed42: wdata.hourly.data[42].windSpeed,
			hourWindBearing42: wdata.hourly.data[42].windBearing,
			
			time43: wdata.hourly.data[43].time,
			hourTemp43: wdata.hourly.data[43].apparentTemperature,
			hourRain43: wdata.hourly.data[43].precipProbability*100,
			hourIcon43: wdata.hourly.data[43].icon,
			hourInten43: wdata.hourly.data[43].precipIntensity,
			hourClouds43: wdata.hourly.data[43].cloudCover, 
			hourDew43: wdata.hourly.data[43].dewPoint,
			hourHumid43: wdata.hourly.data[43].humidity,
			hourPress43: wdata.hourly.data[43].pressure,
			hourVis43: wdata.hourly.data[43].visibility,
			hourWindSpeed43: wdata.hourly.data[43].windSpeed,
			hourWindBearing43: wdata.hourly.data[43].windBearing,
			
			time44: wdata.hourly.data[44].time,
			hourTemp44: wdata.hourly.data[44].apparentTemperature,
			hourRain44: wdata.hourly.data[44].precipProbability*100,
			hourIcon44: wdata.hourly.data[44].icon,
			hourInten44: wdata.hourly.data[44].precipIntensity,
			hourClouds44: wdata.hourly.data[44].cloudCover, 
			hourDew44: wdata.hourly.data[44].dewPoint,
			hourHumid44: wdata.hourly.data[44].humidity,
			hourPress44: wdata.hourly.data[44].pressure,
			hourVis44: wdata.hourly.data[44].visibility,
			hourWindSpeed44: wdata.hourly.data[44].windSpeed,
			hourWindBearing44: wdata.hourly.data[44].windBearing,
			
			time45: wdata.hourly.data[45].time,
			hourTemp45: wdata.hourly.data[45].apparentTemperature,
			hourRain45: wdata.hourly.data[45].precipProbability*100,
			hourIcon45: wdata.hourly.data[45].icon,
			hourInten45: wdata.hourly.data[45].precipIntensity,
			hourClouds45: wdata.hourly.data[45].cloudCover, 
			hourDew45: wdata.hourly.data[45].dewPoint,
			hourHumid45: wdata.hourly.data[45].humidity,
			hourPress45: wdata.hourly.data[45].pressure,
			hourVis45: wdata.hourly.data[45].visibility,
			hourWindSpeed45: wdata.hourly.data[45].windSpeed,
			hourWindBearing45: wdata.hourly.data[45].windBearing,
			
			time46: wdata.hourly.data[46].time,
			hourTemp46: wdata.hourly.data[46].apparentTemperature,
			hourRain46: wdata.hourly.data[46].precipProbability*100,
			hourIcon46: wdata.hourly.data[46].icon,
			hourInten46: wdata.hourly.data[46].precipIntensity,
			hourClouds46: wdata.hourly.data[46].cloudCover, 
			hourDew46: wdata.hourly.data[46].dewPoint,
			hourHumid46: wdata.hourly.data[46].humidity,
			hourPress46: wdata.hourly.data[46].pressure,
			hourVis46: wdata.hourly.data[46].visibility,
			hourWindSpeed46: wdata.hourly.data[46].windSpeed,
			hourWindBearing46: wdata.hourly.data[46].windBearing,
			
			time47: wdata.hourly.data[47].time,
			hourTemp47: wdata.hourly.data[47].apparentTemperature,
			hourRain47: wdata.hourly.data[47].precipProbability*100,
			hourIcon47: wdata.hourly.data[47].icon,
			hourInten47: wdata.hourly.data[47].precipIntensity,
			hourClouds47: wdata.hourly.data[47].cloudCover, 
			hourDew47: wdata.hourly.data[47].dewPoint,
			hourHumid47: wdata.hourly.data[47].humidity,
			hourPress47: wdata.hourly.data[47].pressure,
			hourVis47: wdata.hourly.data[47].visibility,
			hourWindSpeed47: wdata.hourly.data[47].windSpeed,
			hourWindBearing47: wdata.hourly.data[47].windBearing,
			
			time48: wdata.hourly.data[48].time,
			hourTemp48: wdata.hourly.data[48].apparentTemperature,
			hourRain48: wdata.hourly.data[48].precipProbability*100,
			hourIcon48: wdata.hourly.data[48].icon,
			hourInten48: wdata.hourly.data[48].precipIntensity,
			hourClouds48: wdata.hourly.data[48].cloudCover, 
			hourDew48: wdata.hourly.data[48].dewPoint,
			hourHumid48: wdata.hourly.data[48].humidity,
			hourPress48: wdata.hourly.data[48].pressure,
			hourVis48: wdata.hourly.data[48].visibility,
			hourWindSpeed48: wdata.hourly.data[48].windSpeed,
			hourWindBearing48: wdata.hourly.data[48].windBearing,
			
		};
		   
			dataa.currentlyTemp = dataa.currentlyTemp.toFixed();
		   dataa.currentlyPress = dataa.currentlyPress.toFixed();
			dataa.currentlyDew = dataa.currentlyDew.toFixed();
			dataa.currentlyVis = dataa.currentlyVis.toFixed(2);
			dataa.currentlyHumid = dataa.currentlyHumid.toFixed(2);
		
			dataa.day0HiTemp = dataa.day0HiTemp.toFixed();
			dataa.day1HiTemp = dataa.day1HiTemp.toFixed();
			dataa.day2HiTemp = dataa.day2HiTemp.toFixed();
			dataa.day3HiTemp = dataa.day3HiTemp.toFixed();
			dataa.day4HiTemp = dataa.day4HiTemp.toFixed();
			dataa.day5HiTemp = dataa.day5HiTemp.toFixed();
			dataa.day6HiTemp = dataa.day6HiTemp.toFixed();
			dataa.day7HiTemp = dataa.day7HiTemp.toFixed();		
		
			dataa.day0LowTemp = dataa.day0LowTemp.toFixed();
			dataa.day1LowTemp = dataa.day1LowTemp.toFixed();
			dataa.day2LowTemp = dataa.day2LowTemp.toFixed();
			dataa.day3LowTemp = dataa.day3LowTemp.toFixed();
			dataa.day4LowTemp = dataa.day4LowTemp.toFixed();
			dataa.day5LowTemp = dataa.day5LowTemp.toFixed();
			dataa.day6LowTemp = dataa.day6LowTemp.toFixed();
			dataa.day7LowTemp = dataa.day7LowTemp.toFixed();	
		
			dataa.day0Dew = dataa.day0Dew.toFixed();
			dataa.day1Dew = dataa.day1Dew.toFixed();
			dataa.day2Dew = dataa.day2Dew.toFixed();
			dataa.day3Dew = dataa.day3Dew.toFixed();
			dataa.day4Dew = dataa.day4Dew.toFixed();
			dataa.day5Dew = dataa.day5Dew.toFixed();
			dataa.day6Dew = dataa.day6Dew.toFixed();
			dataa.day7Dew = dataa.day7Dew.toFixed();
		
			dataa.day0Humid = dataa.day0Humid.toFixed();
			dataa.day1Humid = dataa.day1Humid.toFixed();
			dataa.day2Humid = dataa.day2Humid.toFixed();
			dataa.day3Humid = dataa.day3Humid.toFixed();
			dataa.day4Humid = dataa.day4Humid.toFixed();
			dataa.day5Humid = dataa.day5Humid.toFixed();
			dataa.day6Humid = dataa.day6Humid.toFixed();
			dataa.day7Humid = dataa.day7Humid.toFixed();
				
			dataa.day0Press = dataa.day0Press.toFixed();
			dataa.day1Press = dataa.day1Press.toFixed();
			dataa.day2Press = dataa.day2Press.toFixed();
			dataa.day3Press = dataa.day3Press.toFixed();
			dataa.day4Press = dataa.day4Press.toFixed();
			dataa.day5Press = dataa.day5Press.toFixed();
			dataa.day6Press = dataa.day6Press.toFixed();
			dataa.day7Press = dataa.day7Press.toFixed();
		
			dataa.hourTemp1 = dataa.hourTemp1.toFixed();
			dataa.hourTemp2 = dataa.hourTemp2.toFixed();
			dataa.hourTemp3 = dataa.hourTemp3.toFixed();
			dataa.hourTemp4 = dataa.hourTemp4.toFixed();
			dataa.hourTemp5 = dataa.hourTemp5.toFixed();
			dataa.hourTemp6 = dataa.hourTemp6.toFixed();
			dataa.hourTemp7 = dataa.hourTemp7.toFixed();
			dataa.hourTemp8 = dataa.hourTemp8.toFixed();
			dataa.hourTemp9 = dataa.hourTemp9.toFixed();
			dataa.hourTemp10 = dataa.hourTemp10.toFixed();
			dataa.hourTemp11 = dataa.hourTemp11.toFixed();
			dataa.hourTemp12 = dataa.hourTemp12.toFixed();
			dataa.hourTemp13 = dataa.hourTemp13.toFixed();
			dataa.hourTemp14 = dataa.hourTemp14.toFixed();
			dataa.hourTemp15 = dataa.hourTemp15.toFixed();
			dataa.hourTemp16 = dataa.hourTemp16.toFixed();
			dataa.hourTemp17 = dataa.hourTemp17.toFixed();
			dataa.hourTemp18 = dataa.hourTemp18.toFixed();
			dataa.hourTemp19 = dataa.hourTemp19.toFixed();
			dataa.hourTemp20 = dataa.hourTemp20.toFixed();
			dataa.hourTemp21 = dataa.hourTemp21.toFixed();
			dataa.hourTemp22 = dataa.hourTemp22.toFixed();
			dataa.hourTemp23 = dataa.hourTemp23.toFixed();
			dataa.hourTemp24 = dataa.hourTemp24.toFixed();
			dataa.hourTemp25 = dataa.hourTemp25.toFixed();
			dataa.hourTemp26 = dataa.hourTemp26.toFixed();
			dataa.hourTemp27 = dataa.hourTemp27.toFixed();
			dataa.hourTemp28 = dataa.hourTemp28.toFixed();
			dataa.hourTemp29 = dataa.hourTemp29.toFixed();
			dataa.hourTemp30 = dataa.hourTemp30.toFixed();
			dataa.hourTemp31 = dataa.hourTemp31.toFixed();
			dataa.hourTemp32 = dataa.hourTemp32.toFixed();
			dataa.hourTemp33 = dataa.hourTemp33.toFixed();
			dataa.hourTemp34 = dataa.hourTemp34.toFixed();
			dataa.hourTemp35 = dataa.hourTemp35.toFixed();
			dataa.hourTemp36 = dataa.hourTemp36.toFixed();
			dataa.hourTemp37 = dataa.hourTemp37.toFixed();
			dataa.hourTemp38 = dataa.hourTemp38.toFixed();
			dataa.hourTemp39 = dataa.hourTemp39.toFixed();
			dataa.hourTemp40 = dataa.hourTemp40.toFixed();
			dataa.hourTemp41 = dataa.hourTemp41.toFixed();
			dataa.hourTemp42 = dataa.hourTemp42.toFixed();
			dataa.hourTemp43 = dataa.hourTemp43.toFixed();
			dataa.hourTemp44 = dataa.hourTemp44.toFixed();
			dataa.hourTemp45 = dataa.hourTemp45.toFixed();
			dataa.hourTemp46 = dataa.hourTemp46.toFixed();
			dataa.hourTemp47 = dataa.hourTemp47.toFixed();
			dataa.hourTemp48 = dataa.hourTemp48.toFixed();
		
			dataa.hourDew1 = dataa.hourDew1.toFixed();
			dataa.hourDew2 = dataa.hourDew2.toFixed();
			dataa.hourDew3 = dataa.hourDew3.toFixed();
			dataa.hourDew4 = dataa.hourDew4.toFixed();
			dataa.hourDew5 = dataa.hourDew5.toFixed();
			dataa.hourDew6 = dataa.hourDew6.toFixed();
			dataa.hourDew7 = dataa.hourDew7.toFixed();
			dataa.hourDew8 = dataa.hourDew8.toFixed();
			dataa.hourDew9 = dataa.hourDew9.toFixed();
			dataa.hourDew10 = dataa.hourDew10.toFixed();
			dataa.hourDew11 = dataa.hourDew11.toFixed();
			dataa.hourDew12 = dataa.hourDew12.toFixed();
			dataa.hourDew13 = dataa.hourDew13.toFixed();
			dataa.hourDew14 = dataa.hourDew14.toFixed();
			dataa.hourDew15 = dataa.hourDew15.toFixed();
			dataa.hourDew16 = dataa.hourDew16.toFixed();
			dataa.hourDew17 = dataa.hourDew17.toFixed();
			dataa.hourDew18 = dataa.hourDew18.toFixed();
			dataa.hourDew19 = dataa.hourDew19.toFixed();
			dataa.hourDew20 = dataa.hourDew20.toFixed();
			dataa.hourDew21 = dataa.hourDew21.toFixed();
			dataa.hourDew22 = dataa.hourDew22.toFixed();
			dataa.hourDew23 = dataa.hourDew23.toFixed();
			dataa.hourDew24 = dataa.hourDew24.toFixed();
			dataa.hourDew25 = dataa.hourDew25.toFixed();
			dataa.hourDew26 = dataa.hourDew26.toFixed();
			dataa.hourDew27 = dataa.hourDew27.toFixed();
			dataa.hourDew28 = dataa.hourDew28.toFixed();
			dataa.hourDew29 = dataa.hourDew29.toFixed();
			dataa.hourDew30 = dataa.hourDew30.toFixed();
			dataa.hourDew31 = dataa.hourDew31.toFixed();
			dataa.hourDew32 = dataa.hourDew32.toFixed();
			dataa.hourDew33 = dataa.hourDew33.toFixed();
			dataa.hourDew34 = dataa.hourDew34.toFixed();
			dataa.hourDew35 = dataa.hourDew35.toFixed();
			dataa.hourDew36 = dataa.hourDew36.toFixed();
			dataa.hourDew37 = dataa.hourDew37.toFixed();
			dataa.hourDew38 = dataa.hourDew38.toFixed();
			dataa.hourDew39 = dataa.hourDew39.toFixed();
			dataa.hourDew40 = dataa.hourDew40.toFixed();
			dataa.hourDew41 = dataa.hourDew41.toFixed();
			dataa.hourDew42 = dataa.hourDew42.toFixed();
			dataa.hourDew43 = dataa.hourDew43.toFixed();
			dataa.hourDew44 = dataa.hourDew44.toFixed();
			dataa.hourDew45 = dataa.hourDew45.toFixed();
			dataa.hourDew46 = dataa.hourDew46.toFixed();
			dataa.hourDew47 = dataa.hourDew47.toFixed();
			dataa.hourDew48 = dataa.hourDew48.toFixed();
		
			dataa.hourPress1 = dataa.hourPress1.toFixed();
			dataa.hourPress2 = dataa.hourPress2.toFixed();
			dataa.hourPress3 = dataa.hourPress3.toFixed();
			dataa.hourPress4 = dataa.hourPress4.toFixed();
			dataa.hourPress5 = dataa.hourPress5.toFixed();
			dataa.hourPress6 = dataa.hourPress6.toFixed();
			dataa.hourPress7 = dataa.hourPress7.toFixed();
			dataa.hourPress8 = dataa.hourPress8.toFixed();
			dataa.hourPress9 = dataa.hourPress9.toFixed();
			dataa.hourPress10 = dataa.hourPress10.toFixed();
			dataa.hourPress11 = dataa.hourPress11.toFixed();
			dataa.hourPress12 = dataa.hourPress12.toFixed();
			dataa.hourPress13 = dataa.hourPress13.toFixed();
			dataa.hourPress14 = dataa.hourPress14.toFixed();
			dataa.hourPress15 = dataa.hourPress15.toFixed();
			dataa.hourPress16 = dataa.hourPress16.toFixed();
			dataa.hourPress17 = dataa.hourPress17.toFixed();
			dataa.hourPress18 = dataa.hourPress18.toFixed();
			dataa.hourPress19 = dataa.hourPress19.toFixed();
			dataa.hourPress20 = dataa.hourPress20.toFixed();
			dataa.hourPress21 = dataa.hourPress21.toFixed();
			dataa.hourPress22 = dataa.hourPress22.toFixed();
			dataa.hourPress23 = dataa.hourPress23.toFixed();
			dataa.hourPress24 = dataa.hourPress24.toFixed();
			dataa.hourPress25 = dataa.hourPress25.toFixed();
			dataa.hourPress26 = dataa.hourPress26.toFixed();
			dataa.hourPress27 = dataa.hourPress27.toFixed();
			dataa.hourPress28 = dataa.hourPress28.toFixed();
			dataa.hourPress29 = dataa.hourPress29.toFixed();
			dataa.hourPress30 = dataa.hourPress30.toFixed();
			dataa.hourPress31 = dataa.hourPress31.toFixed();
			dataa.hourPress32 = dataa.hourPress32.toFixed();
			dataa.hourPress33 = dataa.hourPress33.toFixed();
			dataa.hourPress34 = dataa.hourPress34.toFixed();
			dataa.hourPress35 = dataa.hourPress35.toFixed();
			dataa.hourPress36 = dataa.hourPress36.toFixed();
			dataa.hourPress37 = dataa.hourPress37.toFixed();
			dataa.hourPress38 = dataa.hourPress38.toFixed();
			dataa.hourPress39 = dataa.hourPress39.toFixed();
			dataa.hourPress40 = dataa.hourPress40.toFixed();
			dataa.hourPress41 = dataa.hourPress41.toFixed();
			dataa.hourPress42 = dataa.hourPress42.toFixed();
			dataa.hourPress43 = dataa.hourPress43.toFixed();
			dataa.hourPress44 = dataa.hourPress44.toFixed();
			dataa.hourPress45 = dataa.hourPress45.toFixed();
			dataa.hourPress46 = dataa.hourPress46.toFixed();
			dataa.hourPress47 = dataa.hourPress47.toFixed();
			dataa.hourPress48 = dataa.hourPress48.toFixed();
		
		   dataa.day0 = moment(moment.unix(dataa.day0)).format("dddd");
			dataa.day1 = moment(moment.unix(dataa.day1)).format("dddd");
			dataa.day2 = moment(moment.unix(dataa.day2)).format("dddd");
			dataa.day3 = moment(moment.unix(dataa.day3)).format("dddd");
			dataa.day4 = moment(moment.unix(dataa.day4)).format("dddd");		
			dataa.day5 = moment(moment.unix(dataa.day5)).format("dddd");
			dataa.day6 = moment(moment.unix(dataa.day6)).format("dddd");
			dataa.day7 = moment(moment.unix(dataa.day7)).format("dddd");
		
			dataa.day0HiTempTime = moment(moment.unix(dataa.day0HiTempTime)).format("h:mm a");
			dataa.day1HiTempTime = moment(moment.unix(dataa.day1HiTempTime)).format("h:mm a");
			dataa.day2HiTempTime = moment(moment.unix(dataa.day2HiTempTime)).format("h:mm a");
			dataa.day3HiTempTime = moment(moment.unix(dataa.day3HiTempTime)).format("h:mm a");
			dataa.day4HiTempTime = moment(moment.unix(dataa.day4HiTempTime)).format("h:mm a");		
			dataa.day5HiTempTime = moment(moment.unix(dataa.day5HiTempTime)).format("h:mm a");
			dataa.day6HiTempTime = moment(moment.unix(dataa.day6HiTempTime)).format("h:mm a");
			dataa.day7HiTempTime = moment(moment.unix(dataa.day7HiTempTime)).format("h:mm a");
		
			dataa.day0LowTempTime = moment(moment.unix(dataa.day0LowTempTime)).format("h:mm a");
			dataa.day1LowTempTime = moment(moment.unix(dataa.day1LowTempTime)).format("h:mm a");
			dataa.day2LowTempTime = moment(moment.unix(dataa.day2LowTempTime)).format("h:mm a");
			dataa.day3LowTempTime = moment(moment.unix(dataa.day3LowTempTime)).format("h:mm a");
			dataa.day4LowTempTime = moment(moment.unix(dataa.day4LowTempTime)).format("h:mm a");		
			dataa.day5LowTempTime = moment(moment.unix(dataa.day5LowTempTime)).format("h:mm a");
			dataa.day6LowTempTime = moment(moment.unix(dataa.day6LowTempTime)).format("h:mm a");
			dataa.day7LowTempTime = moment(moment.unix(dataa.day7LowTempTime)).format("h:mm a");
		
			dataa.day0Sunrise = moment(moment.unix(dataa.day0Sunrise)).format("h:mm a");
			dataa.day1Sunrise = moment(moment.unix(dataa.day1Sunrise)).format("h:mm a");
			dataa.day2Sunrise = moment(moment.unix(dataa.day2Sunrise)).format("h:mm a");
			dataa.day3Sunrise = moment(moment.unix(dataa.day3Sunrise)).format("h:mm a");
			dataa.day4Sunrise = moment(moment.unix(dataa.day4Sunrise)).format("h:mm a");		
			dataa.day5Sunrise = moment(moment.unix(dataa.day5Sunrise)).format("h:mm a");
			dataa.day6Sunrise = moment(moment.unix(dataa.day6Sunrise)).format("h:mm a");
			dataa.day7Sunrise = moment(moment.unix(dataa.day7Sunrise)).format("h:mm a");
		
			dataa.day0Sunset = moment(moment.unix(dataa.day0Sunset)).format("h:mm a");
			dataa.day1Sunset = moment(moment.unix(dataa.day1Sunset)).format("h:mm a");
			dataa.day2Sunset = moment(moment.unix(dataa.day2Sunset)).format("h:mm a");
			dataa.day3Sunset = moment(moment.unix(dataa.day3Sunset)).format("h:mm a");
			dataa.day4Sunset = moment(moment.unix(dataa.day4Sunset)).format("h:mm a");		
			dataa.day5Sunset = moment(moment.unix(dataa.day5Sunset)).format("h:mm a");
			dataa.day6Sunset = moment(moment.unix(dataa.day6Sunset)).format("h:mm a");
			dataa.day7Sunset = moment(moment.unix(dataa.day7Sunset)).format("h:mm a");
		
			dataa.time1 = moment(moment.unix(dataa.time1)).format("dddd, h:mm a");
			dataa.time2 = moment(moment.unix(dataa.time2)).format("dddd, h:mm a");
			dataa.time3 = moment(moment.unix(dataa.time3)).format("dddd, h:mm a");
			dataa.time4 = moment(moment.unix(dataa.time4)).format("dddd, h:mm a");
			dataa.time5 = moment(moment.unix(dataa.time5)).format("dddd, h:mm a");
			dataa.time6 = moment(moment.unix(dataa.time6)).format("dddd, h:mm a");
			dataa.time7 = moment(moment.unix(dataa.time7)).format("dddd, h:mm a");
			dataa.time8 = moment(moment.unix(dataa.time8)).format("dddd, h:mm a");
			dataa.time9 = moment(moment.unix(dataa.time9)).format("dddd, h:mm a");
			dataa.time10 = moment(moment.unix(dataa.time10)).format("dddd, h:mm a");
			dataa.time11 = moment(moment.unix(dataa.time11)).format("dddd, h:mm a");
			dataa.time12 = moment(moment.unix(dataa.time12)).format("dddd, h:mm a");
			dataa.time13 = moment(moment.unix(dataa.time13)).format("dddd, h:mm a");
			dataa.time14 = moment(moment.unix(dataa.time14)).format("dddd, h:mm a");
			dataa.time15 = moment(moment.unix(dataa.time15)).format("dddd, h:mm a");
			dataa.time16 = moment(moment.unix(dataa.time16)).format("dddd, h:mm a");
			dataa.time17 = moment(moment.unix(dataa.time17)).format("dddd, h:mm a");
			dataa.time18 = moment(moment.unix(dataa.time18)).format("dddd, h:mm a");
			dataa.time19 = moment(moment.unix(dataa.time19)).format("dddd, h:mm a");
			dataa.time20 = moment(moment.unix(dataa.time20)).format("dddd, h:mm a");
			dataa.time21 = moment(moment.unix(dataa.time21)).format("dddd, h:mm a");
			dataa.time22 = moment(moment.unix(dataa.time22)).format("dddd, h:mm a");
			dataa.time23 = moment(moment.unix(dataa.time23)).format("dddd, h:mm a");
			dataa.time24 = moment(moment.unix(dataa.time24)).format("dddd, h:mm a");
			dataa.time25 = moment(moment.unix(dataa.time25)).format("dddd, h:mm a");
			dataa.time26 = moment(moment.unix(dataa.time26)).format("dddd, h:mm a");
			dataa.time27 = moment(moment.unix(dataa.time27)).format("dddd, h:mm a");
			dataa.time28 = moment(moment.unix(dataa.time28)).format("dddd, h:mm a");
			dataa.time29 = moment(moment.unix(dataa.time29)).format("dddd, h:mm a");
			dataa.time30 = moment(moment.unix(dataa.time30)).format("dddd, h:mm a");
			dataa.time31 = moment(moment.unix(dataa.time31)).format("dddd, h:mm a");
			dataa.time32 = moment(moment.unix(dataa.time32)).format("dddd, h:mm a");
			dataa.time33 = moment(moment.unix(dataa.time33)).format("dddd, h:mm a");
			dataa.time34 = moment(moment.unix(dataa.time34)).format("dddd, h:mm a");
			dataa.tim35 = moment(moment.unix(dataa.time35)).format("dddd, h:mm a");
			dataa.time36 = moment(moment.unix(dataa.time36)).format("dddd, h:mm a");
			dataa.time37 = moment(moment.unix(dataa.time37)).format("dddd, h:mm a");
			dataa.time38 = moment(moment.unix(dataa.time38)).format("dddd, h:mm a");
			dataa.time39 = moment(moment.unix(dataa.time39)).format("dddd, h:mm a");
			dataa.time40 = moment(moment.unix(dataa.time40)).format("dddd, h:mm a");
			dataa.time41 = moment(moment.unix(dataa.time41)).format("dddd, h:mm a");
			dataa.time42 = moment(moment.unix(dataa.time42)).format("dddd, h:mm a");
			dataa.time43 = moment(moment.unix(dataa.time43)).format("dddd, h:mm a");
			dataa.time44 = moment(moment.unix(dataa.time44)).format("dddd, h:mm a");
			dataa.time45 = moment(moment.unix(dataa.time45)).format("dddd, h:mm a");
			dataa.time46 = moment(moment.unix(dataa.time46)).format("dddd, h:mm a");
			dataa.time47 = moment(moment.unix(dataa.time47)).format("dddd, h:mm a");
			dataa.time48 = moment(moment.unix(dataa.time48)).format("dddd, h:mm a");
		
			
		var html = template(dataa);
		$('#output').html(html);
		
		$('#location-output').text(address);
	}
	
	
});
