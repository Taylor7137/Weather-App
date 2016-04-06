
	var address = 'address';
	var lat = {};
	var long = {};
	var units = 0;
  var changeUnitsClick = false;
	var wdata = {};

	var app = angular.module('weatherApp', []);

app.controller('frontpageController', function($scope, $location, $http){

	$scope.getCoordinatesClick = function(){
		address = $scope.address;
		getcoordinates1();
	};

	$scope.getCoordinatesKeyup = function(event){
		address = $scope.address;
		getcoordinates11(event);
  };

	function getcoordinates1(){
			$http.get(buildUrlAddress(address))
				.then(function(response){
					successHandler(response.data)
				})
				.catch(function(err){
					console.error(err)
				});
	}

	function getcoordinates11(event){
			if (event.which == 13){
				$http.get(buildUrlAddress(address))
					.then(function(response){
						successHandler(response.data)
					})
					.catch(function(err){
						console.error(err)
					});
			}
	}

	function buildUrlAddress(address){
	     return '/address/'+address;
	}

	function successHandler(addressData){
		 lat = addressData.results[0].geometry.location.lat;
		 long = addressData.results[0].geometry.location.lng;
		 displayWeather(lat, long);
	}

	function displayWeather(lat,long){
		$http.get(buildUrlWeather(lat,long))
			.then(function(response){
				successHandler2(response.data)
			})
			.catch(function(err){
				console.error(err)
			});
		$location.path('/main')
	}

	function buildUrlWeather(lat,long){
		return '/weather/'+lat+','+long;
	}

});

app.controller('mainController', function($scope, $location, $http){

	console.log(lat,long);

	displayWeather(lat,long)

	$scope.changeUnits = function(lat,long){
			console.log('I have been clicked');
			changeUnitsClick = true;

			if (units == 0){
				displayWeatherSI(lat, long);
			}else {
				displayWeather(lat, long);
			}
		}

	$scope.getCoordinatesTwoClick = function(){
		address = $scope.addressTwo;
		getcoordinates1();
	};

	$scope.getCoordinatesTwoKeyup = function(event){
		address = $scope.addressTwo;
		getcoordinates11(event);
	};

	function getcoordinates1(){
		$http.get(buildUrlAddress(address))
			.then(function(response){
				successHandlerB(response.data)
			})
			.catch(function(err){
				console.error(err)
			});
	}

	function getcoordinates11(event){
			if (event.which == 13){
				$http.get(buildUrlAddress(address))
					.then(function(response){
						successHandlerB(response.data)
					})
					.catch(function(err){
						console.error(err)
					});
			}
	}

	function successHandlerB(addressData){
		 lat = addressData.results[0].geometry.location.lat;
		 long = addressData.results[0].geometry.location.lng;
		if (units == 0){
			displayWeather(lat,long);
		} else {
			displayWeatherSI(lat,long);
		}
	}

	function displayWeather(lat,long){
		$http.get(buildUrlWeather(lat,long))
			.then(function(response){
				successHandler2(response.data)
			})
			.catch(function(err){
				console.error(err)
			});
	}

	function displayWeatherSI(lat,long){
		$http.get(buildUrlWeatherSI(lat,long))
			.then(function(response){
				successHandler2(response.data)
			})
			.catch(function(err){
				console.error(err)
			});
	}

	function buildUrlAddress(address){
			 return '/address/'+address;
	}

	function buildUrlWeather(lat,long){
		return '/weather/'+lat+','+long;
	}

	function buildUrlWeatherSI(lat,long){
	 return '/weatherSI/'+lat+','+long;
	}

});

	function successHandler2(wdata){
		console.log(wdata);
    var dataa = {

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
			rainInten1: wdata.hourly.data[1].precipIntensity,
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
			rainInten2: wdata.hourly.data[2].precipIntensity,
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
			rainInten3: wdata.hourly.data[3].precipIntensity,
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
			rainInten4: wdata.hourly.data[4].precipIntensity,
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
			rainInten5: wdata.hourly.data[5].precipIntensity,
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
			rainInten6: wdata.hourly.data[6].precipIntensity,
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
			rainInten7: wdata.hourly.data[7].precipIntensity,
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
			rainInten8: wdata.hourly.data[8].precipIntensity,
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
			rainInten9: wdata.hourly.data[9].precipIntensity,
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
			rainInten10: wdata.hourly.data[10].precipIntensity,
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
			rainInten11: wdata.hourly.data[11].precipIntensity,
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
			rainInten12: wdata.hourly.data[12].precipIntensity,
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
			rainInten13: wdata.hourly.data[13].precipIntensity,
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
			rainInten14: wdata.hourly.data[14].precipIntensity,
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
			rainInten15: wdata.hourly.data[15].precipIntensity,
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
			rainInten16: wdata.hourly.data[16].precipIntensity,
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
			rainInten17: wdata.hourly.data[17].precipIntensity,
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
			rainInten18: wdata.hourly.data[18].precipIntensity,
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
			rainInten19: wdata.hourly.data[19].precipIntensity,
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
			rainInten20: wdata.hourly.data[20].precipIntensity,
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
			rainInten21: wdata.hourly.data[21].precipIntensity,
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
			rainInten22: wdata.hourly.data[22].precipIntensity,
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
			rainInten23: wdata.hourly.data[23].precipIntensity,
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
			rainInten24: wdata.hourly.data[24].precipIntensity,
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
			rainInten25: wdata.hourly.data[25].precipIntensity,
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
			rainInten26: wdata.hourly.data[26].precipIntensity,
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
			rainInten27: wdata.hourly.data[27].precipIntensity,
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
			rainInten28: wdata.hourly.data[28].precipIntensity,
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
			rainInten29: wdata.hourly.data[29].precipIntensity,
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
			rainInten30: wdata.hourly.data[30].precipIntensity,
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
			rainInten31: wdata.hourly.data[31].precipIntensity,
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
			rainInten32: wdata.hourly.data[32].precipIntensity,
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
			rainInten33: wdata.hourly.data[33].precipIntensity,
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
			rainInten34: wdata.hourly.data[34].precipIntensity,
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
			rainInten35: wdata.hourly.data[35].precipIntensity,
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
			rainInten36: wdata.hourly.data[36].precipIntensity,
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
			rainInten37: wdata.hourly.data[37].precipIntensity,
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
			rainInten38: wdata.hourly.data[38].precipIntensity,
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
			rainInten39: wdata.hourly.data[39].precipIntensity,
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
			rainInten40: wdata.hourly.data[40].precipIntensity,
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
			rainInten41: wdata.hourly.data[41].precipIntensity,
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
			rainInten42: wdata.hourly.data[42].precipIntensity,
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
			rainInten43: wdata.hourly.data[43].precipIntensity,
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
			rainInten44: wdata.hourly.data[44].precipIntensity,
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
			rainInten45: wdata.hourly.data[45].precipIntensity,
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
			rainInten46: wdata.hourly.data[46].precipIntensity,
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
			rainInten47: wdata.hourly.data[47].precipIntensity,
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
			rainInten48: wdata.hourly.data[48].precipIntensity,
			hourClouds48: wdata.hourly.data[48].cloudCover,
			hourDew48: wdata.hourly.data[48].dewPoint,
			hourHumid48: wdata.hourly.data[48].humidity,
			hourPress48: wdata.hourly.data[48].pressure,
			hourVis48: wdata.hourly.data[48].visibility,
			hourWindSpeed48: wdata.hourly.data[48].windSpeed,
			hourWindBearing48: wdata.hourly.data[48].windBearing,

		}

		console.log(dataa);

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

			dataa.day0Rain = dataa.day0Rain.toFixed();
			dataa.day1Rain = dataa.day1Rain.toFixed();
			dataa.day2Rain = dataa.day2Rain.toFixed();
			dataa.day3Rain = dataa.day3Rain.toFixed();
			dataa.day4Rain = dataa.day4Rain.toFixed();
			dataa.day5Rain = dataa.day5Rain.toFixed();
			dataa.day6Rain = dataa.day6Rain.toFixed();
			dataa.day7Rain = dataa.day7Rain.toFixed();

			dataa.day0Dew = dataa.day0Dew.toFixed();
			dataa.day1Dew = dataa.day1Dew.toFixed();
			dataa.day2Dew = dataa.day2Dew.toFixed();
			dataa.day3Dew = dataa.day3Dew.toFixed();
			dataa.day4Dew = dataa.day4Dew.toFixed();
			dataa.day5Dew = dataa.day5Dew.toFixed();
			dataa.day6Dew = dataa.day6Dew.toFixed();
			dataa.day7Dew = dataa.day7Dew.toFixed();

			dataa.day0Humid = dataa.day0Humid.toFixed(2);
			dataa.day1Humid = dataa.day1Humid.toFixed(2);
			dataa.day2Humid = dataa.day2Humid.toFixed(2);
			dataa.day3Humid = dataa.day3Humid.toFixed(2);
			dataa.day4Humid = dataa.day4Humid.toFixed(2);
			dataa.day5Humid = dataa.day5Humid.toFixed(2);
			dataa.day6Humid = dataa.day6Humid.toFixed(2);
			dataa.day7Humid = dataa.day7Humid.toFixed(2);

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

			dataa.hourHumid1 = dataa.hourHumid1.toFixed(2);
			dataa.hourHumid2 = dataa.hourHumid2.toFixed(2);
			dataa.hourHumid3 = dataa.hourHumid3.toFixed(2);
			dataa.hourHumid4 = dataa.hourHumid4.toFixed(2);
			dataa.hourHumid5 = dataa.hourHumid5.toFixed(2);
			dataa.hourHumid6 = dataa.hourHumid6.toFixed(2);
			dataa.hourHumid7 = dataa.hourHumid7.toFixed(2);
			dataa.hourHumid8 = dataa.hourHumid8.toFixed(2);
			dataa.hourHumid9 = dataa.hourHumid9.toFixed(2);
			dataa.hourHumid10 = dataa.hourHumid10.toFixed(2);
			dataa.hourHumid11 = dataa.hourHumid11.toFixed(2);
			dataa.hourHumid12 = dataa.hourHumid12.toFixed(2);
			dataa.hourHumid13 = dataa.hourHumid13.toFixed(2);
			dataa.hourHumid14 = dataa.hourHumid14.toFixed(2);
			dataa.hourHumid15 = dataa.hourHumid15.toFixed(2);
			dataa.hourHumid16 = dataa.hourHumid16.toFixed(2);
			dataa.hourHumid17 = dataa.hourHumid17.toFixed(2);
			dataa.hourHumid18 = dataa.hourHumid18.toFixed(2);
			dataa.hourHumid19 = dataa.hourHumid19.toFixed(2);
			dataa.hourHumid20 = dataa.hourHumid20.toFixed(2);
			dataa.hourHumid21 = dataa.hourHumid21.toFixed(2);
			dataa.hourHumid22 = dataa.hourHumid22.toFixed(2);
			dataa.hourHumid23 = dataa.hourHumid23.toFixed(2);
			dataa.hourHumid24 = dataa.hourHumid24.toFixed(2);
			dataa.hourHumid25 = dataa.hourHumid25.toFixed(2);
			dataa.hourHumid26 = dataa.hourHumid26.toFixed(2);
			dataa.hourHumid27 = dataa.hourHumid27.toFixed(2);
			dataa.hourHumid28 = dataa.hourHumid28.toFixed(2);
			dataa.hourHumid29 = dataa.hourHumid29.toFixed(2);
			dataa.hourHumid30 = dataa.hourHumid30.toFixed(2);
			dataa.hourHumid31 = dataa.hourHumid31.toFixed(2);
			dataa.hourHumid32 = dataa.hourHumid32.toFixed(2);
			dataa.hourHumid33 = dataa.hourHumid33.toFixed(2);
			dataa.hourHumid34 = dataa.hourHumid34.toFixed(2);
			dataa.hourHumid35 = dataa.hourHumid35.toFixed(2);
			dataa.hourHumid36 = dataa.hourHumid36.toFixed(2);
			dataa.hourHumid37 = dataa.hourHumid37.toFixed(2);
			dataa.hourHumid38 = dataa.hourHumid38.toFixed(2);
			dataa.hourHumid39 = dataa.hourHumid39.toFixed(2);
			dataa.hourHumid40 = dataa.hourHumid40.toFixed(2);
			dataa.hourHumid41 = dataa.hourHumid41.toFixed(2);
			dataa.hourHumid42 = dataa.hourHumid42.toFixed(2);
			dataa.hourHumid43 = dataa.hourHumid43.toFixed(2);
			dataa.hourHumid44 = dataa.hourHumid44.toFixed(2);
			dataa.hourHumid45 = dataa.hourHumid45.toFixed(2);
			dataa.hourHumid46 = dataa.hourHumid46.toFixed(2);
			dataa.hourHumid47 = dataa.hourHumid47.toFixed(2);
			dataa.hourHumid48 = dataa.hourHumid48.toFixed(2);

			dataa.hourRain1 = dataa.hourRain1.toFixed();
			dataa.hourRain2 = dataa.hourRain2.toFixed();
			dataa.hourRain3 = dataa.hourRain3.toFixed();
			dataa.hourRain4 = dataa.hourRain4.toFixed();
			dataa.hourRain5 = dataa.hourRain5.toFixed();
			dataa.hourRain6 = dataa.hourRain6.toFixed();
			dataa.hourRain7 = dataa.hourRain7.toFixed();
			dataa.hourRain8 = dataa.hourRain8.toFixed();
			dataa.hourRain9 = dataa.hourRain9.toFixed();
			dataa.hourRain10 = dataa.hourRain10.toFixed();
			dataa.hourRain11 = dataa.hourRain11.toFixed();
			dataa.hourRain12 = dataa.hourRain12.toFixed();
			dataa.hourRain13 = dataa.hourRain13.toFixed();
			dataa.hourRain14 = dataa.hourRain14.toFixed();
			dataa.hourRain15 = dataa.hourRain15.toFixed();
			dataa.hourRain16 = dataa.hourRain16.toFixed();
			dataa.hourRain17 = dataa.hourRain17.toFixed();
			dataa.hourRain18 = dataa.hourRain18.toFixed();
			dataa.hourRain19 = dataa.hourRain19.toFixed();
			dataa.hourRain20 = dataa.hourRain20.toFixed();
			dataa.hourRain21 = dataa.hourRain21.toFixed();
			dataa.hourRain22 = dataa.hourRain22.toFixed();
			dataa.hourRain23 = dataa.hourRain23.toFixed();
			dataa.hourRain24 = dataa.hourRain24.toFixed();
			dataa.hourRain25 = dataa.hourRain25.toFixed();
			dataa.hourRain26 = dataa.hourRain26.toFixed();
			dataa.hourRain27 = dataa.hourRain27.toFixed();
			dataa.hourRain28 = dataa.hourRain28.toFixed();
			dataa.hourRain29 = dataa.hourRain29.toFixed();
			dataa.hourRain30 = dataa.hourRain30.toFixed();
			dataa.hourRain31 = dataa.hourRain31.toFixed();
			dataa.hourRain32 = dataa.hourRain32.toFixed();
			dataa.hourRain33 = dataa.hourRain33.toFixed();
			dataa.hourRain34 = dataa.hourRain34.toFixed();
			dataa.hourRain35 = dataa.hourRain35.toFixed();
			dataa.hourRain36 = dataa.hourRain36.toFixed();
			dataa.hourRain37 = dataa.hourRain37.toFixed();
			dataa.hourRain38 = dataa.hourRain38.toFixed();
			dataa.hourRain39 = dataa.hourRain39.toFixed();
			dataa.hourRain40 = dataa.hourRain40.toFixed();
			dataa.hourRain41 = dataa.hourRain41.toFixed();
			dataa.hourRain42 = dataa.hourRain42.toFixed();
			dataa.hourRain43 = dataa.hourRain43.toFixed();
			dataa.hourRain44 = dataa.hourRain44.toFixed();
			dataa.hourRain45 = dataa.hourRain45.toFixed();
			dataa.hourRain46 = dataa.hourRain46.toFixed();
			dataa.hourRain47 = dataa.hourRain47.toFixed();
			dataa.hourRain48 = dataa.hourRain48.toFixed();

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

			dataa.hourWindSpeed1 = dataa.hourWindSpeed1.toFixed(1);
			dataa.hourWindSpeed2 = dataa.hourWindSpeed2.toFixed(1);
			dataa.hourWindSpeed3 = dataa.hourWindSpeed3.toFixed(1);
			dataa.hourWindSpeed4 = dataa.hourWindSpeed4.toFixed(1);
			dataa.hourWindSpeed5 = dataa.hourWindSpeed5.toFixed(1);
			dataa.hourWindSpeed6 = dataa.hourWindSpeed6.toFixed(1);
			dataa.hourWindSpeed7 = dataa.hourWindSpeed7.toFixed(1);
			dataa.hourWindSpeed8 = dataa.hourWindSpeed8.toFixed(1);
			dataa.hourWindSpeed9 = dataa.hourWindSpeed9.toFixed(1);
			dataa.hourWindSpeed10 = dataa.hourWindSpeed10.toFixed(1);
			dataa.hourWindSpeed11 = dataa.hourWindSpeed11.toFixed(1);
			dataa.hourWindSpeed12 = dataa.hourWindSpeed12.toFixed(1);
			dataa.hourWindSpeed13 = dataa.hourWindSpeed13.toFixed(1);
			dataa.hourWindSpeed14 = dataa.hourWindSpeed14.toFixed(1);
			dataa.hourWindSpeed15 = dataa.hourWindSpeed15.toFixed(1);
			dataa.hourWindSpeed16 = dataa.hourWindSpeed16.toFixed(1);
			dataa.hourWindSpeed17 = dataa.hourWindSpeed17.toFixed(1);
			dataa.hourWindSpeed18 = dataa.hourWindSpeed18.toFixed(1);
			dataa.hourWindSpeed19 = dataa.hourWindSpeed19.toFixed(1);
			dataa.hourWindSpeed20 = dataa.hourWindSpeed20.toFixed(1);
			dataa.hourWindSpeed21 = dataa.hourWindSpeed21.toFixed(1);
			dataa.hourWindSpeed22 = dataa.hourWindSpeed22.toFixed(1);
			dataa.hourWindSpeed23 = dataa.hourWindSpeed23.toFixed(1);
			dataa.hourWindSpeed24 = dataa.hourWindSpeed24.toFixed(1);
			dataa.hourWindSpeed25 = dataa.hourWindSpeed25.toFixed(1);
			dataa.hourWindSpeed26 = dataa.hourWindSpeed26.toFixed(1);
			dataa.hourWindSpeed27 = dataa.hourWindSpeed27.toFixed(1);
			dataa.hourWindSpeed28 = dataa.hourWindSpeed28.toFixed(1);
			dataa.hourWindSpeed29 = dataa.hourWindSpeed29.toFixed(1);
			dataa.hourWindSpeed30 = dataa.hourWindSpeed30.toFixed(1);
			dataa.hourWindSpeed31 = dataa.hourWindSpeed31.toFixed(1);
			dataa.hourWindSpeed32 = dataa.hourWindSpeed32.toFixed(1);
			dataa.hourWindSpeed33 = dataa.hourWindSpeed33.toFixed(1);
			dataa.hourWindSpeed34 = dataa.hourWindSpeed34.toFixed(1);
			dataa.hourWindSpeed35 = dataa.hourWindSpeed35.toFixed(1);
			dataa.hourWindSpeed36 = dataa.hourWindSpeed36.toFixed(1);
			dataa.hourWindSpeed37 = dataa.hourWindSpeed37.toFixed(1);
			dataa.hourWindSpeed38 = dataa.hourWindSpeed38.toFixed(1);
			dataa.hourWindSpeed39 = dataa.hourWindSpeed39.toFixed(1);
			dataa.hourWindSpeed40 = dataa.hourWindSpeed40.toFixed(1);
			dataa.hourWindSpeed41 = dataa.hourWindSpeed41.toFixed(1);
			dataa.hourWindSpeed42 = dataa.hourWindSpeed42.toFixed(1);
			dataa.hourWindSpeed43 = dataa.hourWindSpeed43.toFixed(1);
			dataa.hourWindSpeed44 = dataa.hourWindSpeed44.toFixed(1);
			dataa.hourWindSpeed45 = dataa.hourWindSpeed45.toFixed(1);
			dataa.hourWindSpeed46 = dataa.hourWindSpeed46.toFixed(1);
			dataa.hourWindSpeed47 = dataa.hourWindSpeed47.toFixed(1);
			dataa.hourWindSpeed48 = dataa.hourWindSpeed48.toFixed(1);

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
			dataa.time35 = moment(moment.unix(dataa.time35)).format("dddd, h:mm a");
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

			$scope.timeZone = dataa.timezone;

			$scope.currentlyIcon = dataa.currentlyIcon;
			$scope.currentlyTemp = dataa.currentlyTemp;
			$scope.currentlyPress = dataa.currentlyPress;
			$scope.currentlyDew = dataa.currentlyDew;
			$scope.currentlyVis = dataa.currentlyVis;
			$scope.currentlyHumid = dataa.currentlyHumid;
			$scope.currentlySum = dataa.currentlySum;

			$scope.day0 = dataa.day0;
			$scope.day0Icon = dataa.day0Icon;
			$scope.day0HiTemp = dataa.day0HiTemp;
			$scope.day0HiTempTime = dataa.day0HiTempTime;
			$scope.day0LowTemp = dataa.day0LowTemp;
			$scope.day0LowTempTime = dataa.day0LowTempTime;
			$scope.day0Rain = dataa.day0Rain;
			$scope.day0Clouds = dataa.day0Clouds;
			$scope.day0Dew = dataa.day0Dew;
			$scope.day0Humid = dataa.day0Humid;
			$scope.day0Press = dataa.day0Press;
			$scope.day0Sunrise = dataa.day0Sunrise;
			$scope.day0Sunset = dataa.day0Sunset;
			$scope.day0Vis = dataa.day0Vis;
			$scope.day0WindSpeed = dataa.day0WindSpeed;
			$scope.day0WindBearing = dataa.day0WindBearing;
			$scope.day0Moon = dataa.day0Moon;
			$scope.day0Summary = dataa.day0Summary;

			$scope.day1 = dataa.day1;
			$scope.day1Icon = dataa.day1Icon;
			$scope.day1HiTemp = dataa.day1HiTemp;
			$scope.day1HiTempTime = dataa.day1HiTempTime;
			$scope.day1LowTemp = dataa.day1LowTemp;
			$scope.day1LowTempTime = dataa.day1LowTempTime;
			$scope.day1Rain = dataa.day1Rain;
			$scope.day1Clouds = dataa.day1Clouds;
			$scope.day1Dew = dataa.day1Dew;
			$scope.day1Humid = dataa.day1Humid;
			$scope.day1Press = dataa.day1Press;
			$scope.day1Sunrise = dataa.day1Sunrise;
			$scope.day1Sunset = dataa.day1Sunset;
			$scope.day1Vis = dataa.day1Vis;
			$scope.day1WindSpeed = dataa.day1WindSpeed;
			$scope.day1WindBearing = dataa.day1WindBearing;
			$scope.day1Moon = dataa.day1Moon;
			$scope.day1Summary = dataa.day1Summary;

			$scope.day2 = dataa.day2;
			$scope.day2Icon = dataa.day2Icon;
			$scope.day2HiTemp = dataa.day2HiTemp;
			$scope.day2HiTempTime = dataa.day2HiTempTime;
			$scope.day2LowTemp = dataa.day2LowTemp;
			$scope.day2LowTempTime = dataa.day2LowTempTime;
			$scope.day2Rain = dataa.day2Rain;
			$scope.day2Clouds = dataa.day2Clouds;
			$scope.day2Dew = dataa.day2Dew;
			$scope.day2Humid = dataa.day2Humid;
			$scope.day2Press = dataa.day2Press;
			$scope.day2Sunrise = dataa.day2Sunrise;
			$scope.day2Sunset = dataa.day2Sunset;
			$scope.day2Vis = dataa.day2Vis;
			$scope.day2WindSpeed = dataa.day2WindSpeed;
			$scope.day2WindBearing = dataa.day2WindBearing;
			$scope.day2Moon = dataa.day2Moon;
			$scope.day2Summary = dataa.day2Summary;

			$scope.day3 = dataa.day3;
			$scope.day3Icon = dataa.day3Icon;
			$scope.day3HiTemp = dataa.day3HiTemp;
			$scope.day3HiTempTime = dataa.day3HiTempTime;
			$scope.day3LowTemp = dataa.day3LowTemp;
			$scope.day3LowTempTime = dataa.day3LowTempTime;
			$scope.day3Rain = dataa.day3Rain;
			$scope.day3Clouds = dataa.day3Clouds;
			$scope.day3Dew = dataa.day3Dew;
			$scope.day3Humid = dataa.day3Humid;
			$scope.day3Press = dataa.day3Press;
			$scope.day3Sunrise = dataa.day3Sunrise;
			$scope.day3Sunset = dataa.day3Sunset;
			$scope.day3Vis = dataa.day3Vis;
			$scope.day3WindSpeed = dataa.day3WindSpeed;
			$scope.day3WindBearing = dataa.day3WindBearing;
			$scope.day3Moon = dataa.day3Moon;
			$scope.day3Summary = dataa.day3Summary;

			$scope.day4 = dataa.day4;
			$scope.day4Icon = dataa.day4Icon;
			$scope.day4HiTemp = dataa.day4HiTemp;
			$scope.day4HiTempTime = dataa.day4HiTempTime;
			$scope.day4LowTemp = dataa.day4LowTemp;
			$scope.day4LowTempTime = dataa.day4LowTempTime;
			$scope.day4Rain = dataa.day4Rain;
			$scope.day4Clouds = dataa.day4Clouds;
			$scope.day4Dew = dataa.day4Dew;
			$scope.day4Humid = dataa.day4Humid;
			$scope.day4Press = dataa.day4Press;
			$scope.day4Sunrise = dataa.day4Sunrise;
			$scope.day4Sunset = dataa.day4Sunset;
			$scope.day4Vis = dataa.day4Vis;
			$scope.day4WindSpeed = dataa.day4WindSpeed;
			$scope.day4WindBearing = dataa.day4WindBearing;
			$scope.day4Moon = dataa.day4Moon;
			$scope.day4Summary = dataa.day4Summary;

			$scope.day5 = dataa.day5;
			$scope.day5Icon = dataa.day5Icon;
			$scope.day5HiTemp = dataa.day5HiTemp;
			$scope.day5HiTempTime = dataa.day5HiTempTime;
			$scope.day5LowTemp = dataa.day5LowTemp;
			$scope.day5LowTempTime = dataa.day5LowTempTime;
			$scope.day5Rain = dataa.day5Rain;
			$scope.day5Clouds = dataa.day5Clouds;
			$scope.day5Dew = dataa.day5Dew;
			$scope.day5Humid = dataa.day5Humid;
			$scope.day5Press = dataa.day5Press;
			$scope.day5Sunrise = dataa.day5Sunrise;
			$scope.day5Sunset = dataa.day5Sunset;
			$scope.day5Vis = dataa.day5Vis;
			$scope.day5WindSpeed = dataa.day5WindSpeed;
			$scope.day5WindBearing = dataa.day5WindBearing;
			$scope.day5Moon = dataa.day5Moon;
			$scope.day5Summary = dataa.day5Summary;

			$scope.day6 = dataa.day6;
			$scope.day6Icon = dataa.day6Icon;
			$scope.day6HiTemp = dataa.day6HiTemp;
			$scope.day6HiTempTime = dataa.day6HiTempTime;
			$scope.day6LowTemp = dataa.day6LowTemp;
			$scope.day6LowTempTime = dataa.day6LowTempTime;
			$scope.day6Rain = dataa.day6Rain;
			$scope.day6Clouds = dataa.day6Clouds;
			$scope.day6Dew = dataa.day6Dew;
			$scope.day6Humid = dataa.day6Humid;
			$scope.day6Press = dataa.day6Press;
			$scope.day6Sunrise = dataa.day6Sunrise;
			$scope.day6Sunset = dataa.day6Sunset;
			$scope.day6Vis = dataa.day6Vis;
			$scope.day6WindSpeed = dataa.day6WindSpeed;
			$scope.day6WindBearing = dataa.day6WindBearing;
			$scope.day6Moon = dataa.day6Moon;
			$scope.day6Summary = dataa.day6Summary;

			$scope.day7 = dataa.day7;
			$scope.day7Icon = dataa.day7Icon;
			$scope.day7HiTemp = dataa.day7HiTemp;
			$scope.day7HiTempTime = dataa.day7HiTempTime;
			$scope.day7LowTemp = dataa.day7LowTemp;
			$scope.day7LowTempTime = dataa.day7LowTempTime;
			$scope.day7Rain = dataa.day7Rain;
			$scope.day7Clouds = dataa.day7Clouds;
			$scope.day7Dew = dataa.day7Dew;
			$scope.day7Humid = dataa.day7Humid;
			$scope.day7Press = dataa.day7Press;
			$scope.day7Sunrise = dataa.day7Sunrise;
			$scope.day7Sunset = dataa.day7Sunset;
			$scope.day7Vis = dataa.day7Vis;
			$scope.day7WindSpeed = dataa.day7WindSpeed;
			$scope.day7WindBearing = dataa.day7WindBearing;
			$scope.day7Moon = dataa.day7Moon;
			$scope.day7Summary = dataa.day7Summary;

			$scope.time1 = dataa.time1;
			$scope.hourTemp1 = dataa.hourTemp1;
			$scope.hourRain1 = dataa.hourRain1;
			$scope.hourIcon1 = dataa.hourIcon1;
			$scope.rainInten1 = dataa.rainInten1;
			$scope.hourClouds1 = dataa.hourClouds1;
			$scope.hourDew1 = dataa.hourDew1;
			$scope.hourHumid1 = dataa.hourHumid1;
			$scope.hourPress1 = dataa.hourPress1;
			$scope.hourVis1 = dataa.hourVis1;
			$scope.hourWindSpeed1 = dataa.hourWindSpeed1;
			$scope.hourWindBearing1 = dataa.hourWindBearing1;

			$scope.time2 = dataa.time2;
			$scope.hourTemp2 = dataa.hourTemp2;
			$scope.hourRain2 = dataa.hourRain2;
			$scope.hourIcon2 = dataa.hourIcon2;
			$scope.rainInten2 = dataa.rainInten2;
			$scope.hourClouds2 = dataa.hourClouds2;
			$scope.hourDew2 = dataa.hourDew2;
			$scope.hourHumid2 = dataa.hourHumid2;
			$scope.hourPress2 = dataa.hourPress2;
			$scope.hourVis2 = dataa.hourVis2;
			$scope.hourWindSpeed2 = dataa.hourWindSpeed2;
			$scope.hourWindBearing2 = dataa.hourWindBearing2;

			$scope.time3 = dataa.time3;
			$scope.hourTemp3 = dataa.hourTemp3;
			$scope.hourRain3 = dataa.hourRain3;
			$scope.hourIcon3 = dataa.hourIcon3;
			$scope.rainInten3 = dataa.rainInten3;
			$scope.hourClouds3 = dataa.hourClouds3;
			$scope.hourDew3 = dataa.hourDew3;
			$scope.hourHumid3 = dataa.hourHumid3;
			$scope.hourPress3 = dataa.hourPress3;
			$scope.hourVis3 = dataa.hourVis3;
			$scope.hourWindSpeed3 = dataa.hourWindSpeed3;
			$scope.hourWindBearing3 = dataa.hourWindBearing3;

			$scope.time4 = dataa.time4;
			$scope.hourTemp4 = dataa.hourTemp4;
			$scope.hourRain4 = dataa.hourRain4;
			$scope.hourIcon4 = dataa.hourIcon4;
			$scope.rainInten4 = dataa.rainInten4;
			$scope.hourClouds4 = dataa.hourClouds4;
			$scope.hourDew4 = dataa.hourDew4;
			$scope.hourHumid4 = dataa.hourHumid4;
			$scope.hourPress4 = dataa.hourPress4;
			$scope.hourVis4 = dataa.hourVis4;
			$scope.hourWindSpeed4 = dataa.hourWindSpeed4;
			$scope.hourWindBearing4 = dataa.hourWindBearing4;

			$scope.time5 = dataa.time5;
			$scope.hourTemp5 = dataa.hourTemp5;
			$scope.hourRain5 = dataa.hourRain5;
			$scope.hourIcon5 = dataa.hourIcon5;
			$scope.rainInten5 = dataa.rainInten5;
			$scope.hourClouds5 = dataa.hourClouds5;
			$scope.hourDew5 = dataa.hourDew5;
			$scope.hourHumid5 = dataa.hourHumid5;
			$scope.hourPress5 = dataa.hourPress5;
			$scope.hourVis5 = dataa.hourVis5;
			$scope.hourWindSpeed5 = dataa.hourWindSpeed5;
			$scope.hourWindBearing5 = dataa.hourWindBearing5;

			$scope.time6 = dataa.time6;
			$scope.hourTemp6 = dataa.hourTemp6;
			$scope.hourRain6 = dataa.hourRain6;
			$scope.hourIcon6 = dataa.hourIcon6;
			$scope.rainInten6 = dataa.rainInten6;
			$scope.hourClouds6 = dataa.hourClouds6;
			$scope.hourDew6 = dataa.hourDew6;
			$scope.hourHumid6 = dataa.hourHumid6;
			$scope.hourPress6 = dataa.hourPress6;
			$scope.hourVis6 = dataa.hourVis6;
			$scope.hourWindSpeed6 = dataa.hourWindSpeed6;
			$scope.hourWindBearing6 = dataa.hourWindBearing6;

			$scope.time7 = dataa.time7;
			$scope.hourTemp7 = dataa.hourTemp7;
			$scope.hourRain7 = dataa.hourRain7;
			$scope.hourIcon7 = dataa.hourIcon7;
			$scope.rainInten7 = dataa.rainInten7;
			$scope.hourClouds7 = dataa.hourClouds7;
			$scope.hourDew7 = dataa.hourDew7;
			$scope.hourHumid7 = dataa.hourHumid7;
			$scope.hourPress7 = dataa.hourPress7;
			$scope.hourVis7 = dataa.hourVis7;
			$scope.hourWindSpeed7 = dataa.hourWindSpeed7;
			$scope.hourWindBearing7 = dataa.hourWindBearing7;

			$scope.time8 = dataa.time8;
			$scope.hourTemp8 = dataa.hourTemp8;
			$scope.hourRain8 = dataa.hourRain8;
			$scope.hourIcon8 = dataa.hourIcon8;
			$scope.rainInten8 = dataa.rainInten8;
			$scope.hourClouds8 = dataa.hourClouds8;
			$scope.hourDew8 = dataa.hourDew8;
			$scope.hourHumid8 = dataa.hourHumid8;
			$scope.hourPress8 = dataa.hourPress8;
			$scope.hourVis8 = dataa.hourVis8;
			$scope.hourWindSpeed8 = dataa.hourWindSpeed8;
			$scope.hourWindBearing8 = dataa.hourWindBearing8;

			$scope.time9 = dataa.time9;
			$scope.hourTemp9 = dataa.hourTemp9;
			$scope.hourRain9 = dataa.hourRain9;
			$scope.hourIcon9 = dataa.hourIcon9;
			$scope.rainInten9 = dataa.rainInten9;
			$scope.hourClouds9 = dataa.hourClouds9;
			$scope.hourDew9 = dataa.hourDew9;
			$scope.hourHumid9 = dataa.hourHumid9;
			$scope.hourPress9 = dataa.hourPress9;
			$scope.hourVis9 = dataa.hourVis9;
			$scope.hourWindSpeed9 = dataa.hourWindSpeed9;
			$scope.hourWindBearing9 = dataa.hourWindBearing9;

			$scope.time10 = dataa.time10;
			$scope.hourTemp10 = dataa.hourTemp10;
			$scope.hourRain10 = dataa.hourRain10;
			$scope.hourIcon10 = dataa.hourIcon10;
			$scope.rainInten10 = dataa.rainInten10;
			$scope.hourClouds10 = dataa.hourClouds10;
			$scope.hourDew10 = dataa.hourDew10;
			$scope.hourHumid10 = dataa.hourHumid10;
			$scope.hourPress10 = dataa.hourPress10;
			$scope.hourVis10 = dataa.hourVis10;
			$scope.hourWindSpeed10 = dataa.hourWindSpeed10;
			$scope.hourWindBearing10 = dataa.hourWindBearing10;

			$scope.time11 = dataa.time11;
			$scope.hourTemp11 = dataa.hourTemp11;
			$scope.hourRain11 = dataa.hourRain11;
			$scope.hourIcon11 = dataa.hourIcon11;
			$scope.rainInten11 = dataa.rainInten11;
			$scope.hourClouds11 = dataa.hourClouds11;
			$scope.hourDew11 = dataa.hourDew11;
			$scope.hourHumid11 = dataa.hourHumid11;
			$scope.hourPress11 = dataa.hourPress11;
			$scope.hourVis11 = dataa.hourVis11;
			$scope.hourWindSpeed11 = dataa.hourWindSpeed11;
			$scope.hourWindBearing11 = dataa.hourWindBearing11;

			$scope.time12 = dataa.time12;
			$scope.hourTemp12 = dataa.hourTemp12;
			$scope.hourRain12 = dataa.hourRain12;
			$scope.hourIcon12 = dataa.hourIcon12;
			$scope.rainInten12 = dataa.rainInten12;
			$scope.hourClouds12 = dataa.hourClouds12;
			$scope.hourDew12 = dataa.hourDew12;
			$scope.hourHumid12 = dataa.hourHumid12;
			$scope.hourPress12 = dataa.hourPress12;
			$scope.hourVis12 = dataa.hourVis12;
			$scope.hourWindSpeed12 = dataa.hourWindSpeed12;
			$scope.hourWindBearing12 = dataa.hourWindBearing12;

			$scope.time13 = dataa.time13;
			$scope.hourTemp13 = dataa.hourTemp13;
			$scope.hourRain13 = dataa.hourRain13;
			$scope.hourIcon13 = dataa.hourIcon13;
			$scope.rainInten13 = dataa.rainInten13;
			$scope.hourClouds13 = dataa.hourClouds13;
			$scope.hourDew13 = dataa.hourDew13;
			$scope.hourHumid13 = dataa.hourHumid13;
			$scope.hourPress13 = dataa.hourPress13;
			$scope.hourVis13 = dataa.hourVis13;
			$scope.hourWindSpeed13 = dataa.hourWindSpeed13;
			$scope.hourWindBearing13 = dataa.hourWindBearing13;

			$scope.time14 = dataa.time14;
			$scope.hourTemp14 = dataa.hourTemp14;
			$scope.hourRain14 = dataa.hourRain14;
			$scope.hourIcon14 = dataa.hourIcon14;
			$scope.rainInten14 = dataa.rainInten14;
			$scope.hourClouds14 = dataa.hourClouds14;
			$scope.hourDew14 = dataa.hourDew14;
			$scope.hourHumid14 = dataa.hourHumid14;
			$scope.hourPress14 = dataa.hourPress14;
			$scope.hourVis14 = dataa.hourVis14;
			$scope.hourWindSpeed14 = dataa.hourWindSpeed14;
			$scope.hourWindBearing14 = dataa.hourWindBearing14;

			$scope.time15 = dataa.time15;
			$scope.hourTemp15 = dataa.hourTemp15;
			$scope.hourRain15 = dataa.hourRain15;
			$scope.hourIcon15 = dataa.hourIcon15;
			$scope.rainInten15 = dataa.rainInten15;
			$scope.hourClouds15 = dataa.hourClouds15;
			$scope.hourDew15 = dataa.hourDew15;
			$scope.hourHumid15 = dataa.hourHumid15;
			$scope.hourPress15 = dataa.hourPress15;
			$scope.hourVis15 = dataa.hourVis15;
			$scope.hourWindSpeed15 = dataa.hourWindSpeed15;
			$scope.hourWindBearing15 = dataa.hourWindBearing15;

			$scope.time16 = dataa.time16;
			$scope.hourTemp16 = dataa.hourTemp16;
			$scope.hourRain16 = dataa.hourRain16;
			$scope.hourIcon16 = dataa.hourIcon16;
			$scope.rainInten16 = dataa.rainInten16;
			$scope.hourClouds16 = dataa.hourClouds16;
			$scope.hourDew16 = dataa.hourDew16;
			$scope.hourHumid16 = dataa.hourHumid16;
			$scope.hourPress16 = dataa.hourPress16;
			$scope.hourVis16 = dataa.hourVis16;
			$scope.hourWindSpeed16 = dataa.hourWindSpeed16;
			$scope.hourWindBearing16 = dataa.hourWindBearing16;

			$scope.time17 = dataa.time17;
			$scope.hourTemp17 = dataa.hourTemp17;
			$scope.hourRain17 = dataa.hourRain17;
			$scope.hourIcon17 = dataa.hourIcon17;
			$scope.rainInten17 = dataa.rainInten17;
			$scope.hourClouds17 = dataa.hourClouds17;
			$scope.hourDew17 = dataa.hourDew17;
			$scope.hourHumid17 = dataa.hourHumid17;
			$scope.hourPress17 = dataa.hourPress17;
			$scope.hourVis17 = dataa.hourVis17;
			$scope.hourWindSpeed17 = dataa.hourWindSpeed17;
			$scope.hourWindBearing17 = dataa.hourWindBearing17;

			$scope.time18 = dataa.time18;
			$scope.hourTemp18 = dataa.hourTemp18;
			$scope.hourRain18 = dataa.hourRain18;
			$scope.hourIcon18 = dataa.hourIcon18;
			$scope.rainInten18 = dataa.rainInten18;
			$scope.hourClouds18 = dataa.hourClouds18;
			$scope.hourDew18 = dataa.hourDew18;
			$scope.hourHumid18 = dataa.hourHumid18;
			$scope.hourPress18 = dataa.hourPress18;
			$scope.hourVis18 = dataa.hourVis18;
			$scope.hourWindSpeed18 = dataa.hourWindSpeed18;
			$scope.hourWindBearing18 = dataa.hourWindBearing18;

			$scope.time19 = dataa.time19;
			$scope.hourTemp19 = dataa.hourTemp19;
			$scope.hourRain19 = dataa.hourRain19;
			$scope.hourIcon19 = dataa.hourIcon19;
			$scope.rainInten19 = dataa.rainInten19;
			$scope.hourClouds19 = dataa.hourClouds19;
			$scope.hourDew19 = dataa.hourDew19;
			$scope.hourHumid19 = dataa.hourHumid19;
			$scope.hourPress19 = dataa.hourPress19;
			$scope.hourVis19 = dataa.hourVis19;
			$scope.hourWindSpeed19 = dataa.hourWindSpeed19;
			$scope.hourWindBearing19 = dataa.hourWindBearing19;

			$scope.time20 = dataa.time20;
			$scope.hourTemp20 = dataa.hourTemp20;
			$scope.hourRain20 = dataa.hourRain20;
			$scope.hourIcon20 = dataa.hourIcon20;
			$scope.rainInten20 = dataa.rainInten20;
			$scope.hourClouds20 = dataa.hourClouds20;
			$scope.hourDew20 = dataa.hourDew20;
			$scope.hourHumid20 = dataa.hourHumid20;
			$scope.hourPress20 = dataa.hourPress20;
			$scope.hourVis20 = dataa.hourVis20;
			$scope.hourWindSpeed20 = dataa.hourWindSpeed20;
			$scope.hourWindBearing20 = dataa.hourWindBearing20;

			$scope.time21 = dataa.time21;
			$scope.hourTemp21 = dataa.hourTemp21;
			$scope.hourRain21 = dataa.hourRain21;
			$scope.hourIcon21 = dataa.hourIcon21;
			$scope.rainInten21 = dataa.rainInten21;
			$scope.hourClouds21 = dataa.hourClouds21;
			$scope.hourDew21 = dataa.hourDew21;
			$scope.hourHumid21 = dataa.hourHumid21;
			$scope.hourPress21 = dataa.hourPress21;
			$scope.hourVis21 = dataa.hourVis21;
			$scope.hourWindSpeed21 = dataa.hourWindSpeed21;
			$scope.hourWindBearing21 = dataa.hourWindBearing21;

			$scope.time22 = dataa.time22;
			$scope.hourTemp22 = dataa.hourTemp22;
			$scope.hourRain22 = dataa.hourRain22;
			$scope.hourIcon22 = dataa.hourIcon22;
			$scope.rainInten22 = dataa.rainInten22;
			$scope.hourClouds22 = dataa.hourClouds22;
			$scope.hourDew22 = dataa.hourDew22;
			$scope.hourHumid22 = dataa.hourHumid22;
			$scope.hourPress22 = dataa.hourPress22;
			$scope.hourVis22 = dataa.hourVis22;
			$scope.hourWindSpeed22 = dataa.hourWindSpeed22;
			$scope.hourWindBearing22 = dataa.hourWindBearing22;

			$scope.time23 = dataa.time23;
			$scope.hourTemp23 = dataa.hourTemp23;
			$scope.hourRain23 = dataa.hourRain23;
			$scope.hourIcon23 = dataa.hourIcon23;
			$scope.rainInten23 = dataa.rainInten23;
			$scope.hourClouds23 = dataa.hourClouds23;
			$scope.hourDew23 = dataa.hourDew23;
			$scope.hourHumid23 = dataa.hourHumid23;
			$scope.hourPress23 = dataa.hourPress23;
			$scope.hourVis23 = dataa.hourVis23;
			$scope.hourWindSpeed23 = dataa.hourWindSpeed23;
			$scope.hourWindBearing23 = dataa.hourWindBearing23;

			$scope.time24 = dataa.time24;
			$scope.hourTemp24 = dataa.hourTemp24;
			$scope.hourRain24 = dataa.hourRain24;
			$scope.hourIcon24 = dataa.hourIcon24;
			$scope.rainInten24 = dataa.rainInten24;
			$scope.hourClouds24 = dataa.hourClouds24;
			$scope.hourDew24 = dataa.hourDew24;
			$scope.hourHumid24 = dataa.hourHumid24;
			$scope.hourPress24 = dataa.hourPress24;
			$scope.hourVis24 = dataa.hourVis24;
			$scope.hourWindSpeed24 = dataa.hourWindSpeed24;
			$scope.hourWindBearing24 = dataa.hourWindBearing24;

			$scope.time25 = dataa.time25;
			$scope.hourTemp25 = dataa.hourTemp25;
			$scope.hourRain25 = dataa.hourRain25;
			$scope.hourIcon25 = dataa.hourIcon25;
			$scope.rainInten25 = dataa.rainInten25;
			$scope.hourClouds25 = dataa.hourClouds25;
			$scope.hourDew25 = dataa.hourDew25;
			$scope.hourHumid25 = dataa.hourHumid25;
			$scope.hourPress25 = dataa.hourPress25;
			$scope.hourVis25 = dataa.hourVis25;
			$scope.hourWindSpeed25 = dataa.hourWindSpeed25;
			$scope.hourWindBearing25 = dataa.hourWindBearing25;

			$scope.time26 = dataa.time26;
			$scope.hourTemp26 = dataa.hourTemp26;
			$scope.hourRain26 = dataa.hourRain26;
			$scope.hourIcon26 = dataa.hourIcon26;
			$scope.rainInten26 = dataa.rainInten26;
			$scope.hourClouds26 = dataa.hourClouds26;
			$scope.hourDew26 = dataa.hourDew26;
			$scope.hourHumid26 = dataa.hourHumid26;
			$scope.hourPress26 = dataa.hourPress26;
			$scope.hourVis26 = dataa.hourVis26;
			$scope.hourWindSpeed26 = dataa.hourWindSpeed26;
			$scope.hourWindBearing26 = dataa.hourWindBearing26;

			$scope.time27 = dataa.time27;
			$scope.hourTemp27 = dataa.hourTemp27;
			$scope.hourRain27 = dataa.hourRain27;
			$scope.hourIcon27 = dataa.hourIcon27;
			$scope.rainInten27 = dataa.rainInten27;
			$scope.hourClouds27 = dataa.hourClouds27;
			$scope.hourDew27 = dataa.hourDew27;
			$scope.hourHumid27 = dataa.hourHumid27;
			$scope.hourPress27 = dataa.hourPress27;
			$scope.hourVis27 = dataa.hourVis27;
			$scope.hourWindSpeed27 = dataa.hourWindSpeed27;
			$scope.hourWindBearing27 = dataa.hourWindBearing27;

			$scope.time28 = dataa.time28;
			$scope.hourTemp28 = dataa.hourTemp28;
			$scope.hourRain28 = dataa.hourRain28;
			$scope.hourIcon28 = dataa.hourIcon28;
			$scope.rainInten28 = dataa.rainInten28;
			$scope.hourClouds28 = dataa.hourClouds28;
			$scope.hourDew28 = dataa.hourDew28;
			$scope.hourHumid28 = dataa.hourHumid28;
			$scope.hourPress28 = dataa.hourPress28;
			$scope.hourVis28 = dataa.hourVis28;
			$scope.hourWindSpeed28 = dataa.hourWindSpeed28;
			$scope.hourWindBearing28 = dataa.hourWindBearing28;

			$scope.time29 = dataa.time29;
			$scope.hourTemp29 = dataa.hourTemp29;
			$scope.hourRain29 = dataa.hourRain29;
			$scope.hourIcon29 = dataa.hourIcon29;
			$scope.rainInten29 = dataa.rainInten29;
			$scope.hourClouds29 = dataa.hourClouds29;
			$scope.hourDew29 = dataa.hourDew29;
			$scope.hourHumid29 = dataa.hourHumid29;
			$scope.hourPress29 = dataa.hourPress29;
			$scope.hourVis29 = dataa.hourVis29;
			$scope.hourWindSpeed29 = dataa.hourWindSpeed29;
			$scope.hourWindBearing29 = dataa.hourWindBearing29;

			$scope.time30 = dataa.time30;
			$scope.hourTemp30 = dataa.hourTemp30;
			$scope.hourRain30 = dataa.hourRain30;
			$scope.hourIcon30 = dataa.hourIcon30;
			$scope.rainInten30 = dataa.rainInten30;
			$scope.hourClouds30 = dataa.hourClouds30;
			$scope.hourDew30 = dataa.hourDew30;
			$scope.hourHumid30 = dataa.hourHumid30;
			$scope.hourPress30 = dataa.hourPress30;
			$scope.hourVis30 = dataa.hourVis30;
			$scope.hourWindSpeed30 = dataa.hourWindSpeed30;
			$scope.hourWindBearing30 = dataa.hourWindBearing30;

			$scope.time31 = dataa.time31;
			$scope.hourTemp31 = dataa.hourTemp31;
			$scope.hourRain31 = dataa.hourRain31;
			$scope.hourIcon31 = dataa.hourIcon31;
			$scope.rainInten31 = dataa.rainInten31;
			$scope.hourClouds31 = dataa.hourClouds31;
			$scope.hourDew31 = dataa.hourDew31;
			$scope.hourHumid31 = dataa.hourHumid31;
			$scope.hourPress31 = dataa.hourPress31;
			$scope.hourVis31 = dataa.hourVis31;
			$scope.hourWindSpeed31 = dataa.hourWindSpeed31;
			$scope.hourWindBearing31 = dataa.hourWindBearing31;

			$scope.time32 = dataa.time32;
			$scope.hourTemp32 = dataa.hourTemp32;
			$scope.hourRain32 = dataa.hourRain32;
			$scope.hourIcon32 = dataa.hourIcon32;
			$scope.rainInten32 = dataa.rainInten32;
			$scope.hourClouds32 = dataa.hourClouds32;
			$scope.hourDew32 = dataa.hourDew32;
			$scope.hourHumid32 = dataa.hourHumid32;
			$scope.hourPress32 = dataa.hourPress32;
			$scope.hourVis32 = dataa.hourVis32;
			$scope.hourWindSpeed32 = dataa.hourWindSpeed32;
			$scope.hourWindBearing32 = dataa.hourWindBearing32;

			$scope.time33 = dataa.time33;
			$scope.hourTemp33 = dataa.hourTemp33;
			$scope.hourRain33 = dataa.hourRain33;
			$scope.hourIcon33 = dataa.hourIcon33;
			$scope.rainInten33 = dataa.rainInten33;
			$scope.hourClouds33 = dataa.hourClouds33;
			$scope.hourDew33 = dataa.hourDew33;
			$scope.hourHumid33 = dataa.hourHumid33;
			$scope.hourPress33 = dataa.hourPress33;
			$scope.hourVis33 = dataa.hourVis33;
			$scope.hourWindSpeed33 = dataa.hourWindSpeed33;
			$scope.hourWindBearing33 = dataa.hourWindBearing33;

			$scope.time34 = dataa.time34;
			$scope.hourTemp34 = dataa.hourTemp34;
			$scope.hourRain34 = dataa.hourRain34;
			$scope.hourIcon34 = dataa.hourIcon34;
			$scope.rainInten34 = dataa.rainInten34;
			$scope.hourClouds34 = dataa.hourClouds34;
			$scope.hourDew34 = dataa.hourDew34;
			$scope.hourHumid34 = dataa.hourHumid34;
			$scope.hourPress34 = dataa.hourPress34;
			$scope.hourVis34 = dataa.hourVis34;
			$scope.hourWindSpeed34 = dataa.hourWindSpeed34;
			$scope.hourWindBearing34 = dataa.hourWindBearing34;

			$scope.time35 = dataa.time35;
			$scope.hourTemp35 = dataa.hourTemp35;
			$scope.hourRain35 = dataa.hourRain35;
			$scope.hourIcon35 = dataa.hourIcon35;
			$scope.rainInten35 = dataa.rainInten35;
			$scope.hourClouds35 = dataa.hourClouds35;
			$scope.hourDew35 = dataa.hourDew35;
			$scope.hourHumid35 = dataa.hourHumid35;
			$scope.hourPress35 = dataa.hourPress35;
			$scope.hourVis35 = dataa.hourVis35;
			$scope.hourWindSpeed35 = dataa.hourWindSpeed35;
			$scope.hourWindBearing35 = dataa.hourWindBearing35;

			$scope.time36 = dataa.time36;
			$scope.hourTemp36 = dataa.hourTemp36;
			$scope.hourRain36 = dataa.hourRain36;
			$scope.hourIcon36 = dataa.hourIcon36;
			$scope.rainInten36 = dataa.rainInten36;
			$scope.hourClouds36 = dataa.hourClouds36;
			$scope.hourDew36 = dataa.hourDew36;
			$scope.hourHumid36 = dataa.hourHumid36;
			$scope.hourPress36 = dataa.hourPress36;
			$scope.hourVis36 = dataa.hourVis36;
			$scope.hourWindSpeed36 = dataa.hourWindSpeed36;
			$scope.hourWindBearing36 = dataa.hourWindBearing36;

			$scope.time37 = dataa.time37;
			$scope.hourTemp37 = dataa.hourTemp37;
			$scope.hourRain37 = dataa.hourRain37;
			$scope.hourIcon37 = dataa.hourIcon37;
			$scope.rainInten37 = dataa.rainInten37;
			$scope.hourClouds37 = dataa.hourClouds37;
			$scope.hourDew37 = dataa.hourDew37;
			$scope.hourHumid37 = dataa.hourHumid37;
			$scope.hourPress37 = dataa.hourPress37;
			$scope.hourVis37 = dataa.hourVis37;
			$scope.hourWindSpeed37 = dataa.hourWindSpeed37;
			$scope.hourWindBearing37 = dataa.hourWindBearing37;

			$scope.time38 = dataa.time38;
			$scope.hourTemp38 = dataa.hourTemp38;
			$scope.hourRain38 = dataa.hourRain38;
			$scope.hourIcon38 = dataa.hourIcon38;
			$scope.rainInten38 = dataa.rainInten38;
			$scope.hourClouds38 = dataa.hourClouds38;
			$scope.hourDew38 = dataa.hourDew38;
			$scope.hourHumid38 = dataa.hourHumid38;
			$scope.hourPress38 = dataa.hourPress38;
			$scope.hourVis38 = dataa.hourVis38;
			$scope.hourWindSpeed38 = dataa.hourWindSpeed38;
			$scope.hourWindBearing38 = dataa.hourWindBearing38;

			$scope.time39 = dataa.time39;
			$scope.hourTemp39 = dataa.hourTemp39;
			$scope.hourRain39 = dataa.hourRain39;
			$scope.hourIcon39 = dataa.hourIcon39;
			$scope.rainInten39 = dataa.rainInten39;
			$scope.hourClouds39 = dataa.hourClouds39;
			$scope.hourDew39 = dataa.hourDew39;
			$scope.hourHumid39 = dataa.hourHumid39;
			$scope.hourPress39 = dataa.hourPress39;
			$scope.hourVis39 = dataa.hourVis39;
			$scope.hourWindSpeed39 = dataa.hourWindSpeed39;
			$scope.hourWindBearing39 = dataa.hourWindBearing39;

			$scope.time40 = dataa.time40;
			$scope.hourTemp40 = dataa.hourTemp40;
			$scope.hourRain40 = dataa.hourRain40;
			$scope.hourIcon40 = dataa.hourIcon40;
			$scope.rainInten40 = dataa.rainInten40;
			$scope.hourClouds40 = dataa.hourClouds40;
			$scope.hourDew40 = dataa.hourDew40;
			$scope.hourHumid40 = dataa.hourHumid40;
			$scope.hourPress40 = dataa.hourPress40;
			$scope.hourVis40 = dataa.hourVis40;
			$scope.hourWindSpeed40 = dataa.hourWindSpeed40;
			$scope.hourWindBearing40 = dataa.hourWindBearing40;

			$scope.time41 = dataa.time41;
			$scope.hourTemp41 = dataa.hourTemp41;
			$scope.hourRain41 = dataa.hourRain41;
			$scope.hourIcon41 = dataa.hourIcon41;
			$scope.rainInten41 = dataa.rainInten41;
			$scope.hourClouds41 = dataa.hourClouds41;
			$scope.hourDew41 = dataa.hourDew41;
			$scope.hourHumid41 = dataa.hourHumid41;
			$scope.hourPress41 = dataa.hourPress41;
			$scope.hourVis41 = dataa.hourVis41;
			$scope.hourWindSpeed41 = dataa.hourWindSpeed41;
			$scope.hourWindBearing41 = dataa.hourWindBearing41;

			$scope.time42 = dataa.time42;
			$scope.hourTemp42 = dataa.hourTemp42;
			$scope.hourRain42 = dataa.hourRain42;
			$scope.hourIcon42 = dataa.hourIcon42;
			$scope.rainInten42 = dataa.rainInten42;
			$scope.hourClouds42 = dataa.hourClouds42;
			$scope.hourDew42 = dataa.hourDew42;
			$scope.hourHumid42 = dataa.hourHumid42;
			$scope.hourPress42 = dataa.hourPress42;
			$scope.hourVis42 = dataa.hourVis42;
			$scope.hourWindSpeed42 = dataa.hourWindSpeed42;
			$scope.hourWindBearing42 = dataa.hourWindBearing42;

			$scope.time43 = dataa.time43;
			$scope.hourTemp43 = dataa.hourTemp43;
			$scope.hourRain43 = dataa.hourRain43;
			$scope.hourIcon43 = dataa.hourIcon43;
			$scope.rainInten43 = dataa.rainInten43;
			$scope.hourClouds43 = dataa.hourClouds43;
			$scope.hourDew43 = dataa.hourDew43;
			$scope.hourHumid43 = dataa.hourHumid43;
			$scope.hourPress43 = dataa.hourPress43;
			$scope.hourVis43 = dataa.hourVis43;
			$scope.hourWindSpeed43 = dataa.hourWindSpeed43;
			$scope.hourWindBearing43 = dataa.hourWindBearing43;

			$scope.time44 = dataa.time44;
			$scope.hourTemp44 = dataa.hourTemp44;
			$scope.hourRain44 = dataa.hourRain44;
			$scope.hourIcon44 = dataa.hourIcon44;
			$scope.rainInten44 = dataa.rainInten44;
			$scope.hourClouds44 = dataa.hourClouds44;
			$scope.hourDew44 = dataa.hourDew44;
			$scope.hourHumid44 = dataa.hourHumid44;
			$scope.hourPress44 = dataa.hourPress44;
			$scope.hourVis44 = dataa.hourVis44;
			$scope.hourWindSpeed44 = dataa.hourWindSpeed44;
			$scope.hourWindBearing44 = dataa.hourWindBearing44;

			$scope.time45 = dataa.time45;
			$scope.hourTemp45 = dataa.hourTemp45;
			$scope.hourRain45 = dataa.hourRain45;
			$scope.hourIcon45 = dataa.hourIcon45;
			$scope.rainInten45 = dataa.rainInten45;
			$scope.hourClouds45 = dataa.hourClouds45;
			$scope.hourDew45 = dataa.hourDew45;
			$scope.hourHumid45 = dataa.hourHumid45;
			$scope.hourPress45 = dataa.hourPress45;
			$scope.hourVis45 = dataa.hourVis45;
			$scope.hourWindSpeed45 = dataa.hourWindSpeed45;
			$scope.hourWindBearing45 = dataa.hourWindBearing45;

			$scope.time46 = dataa.time46;
			$scope.hourTemp46 = dataa.hourTemp46;
			$scope.hourRain46 = dataa.hourRain46;
			$scope.hourIcon46 = dataa.hourIcon46;
			$scope.rainInten46 = dataa.rainInten46;
			$scope.hourClouds46 = dataa.hourClouds46;
			$scope.hourDew46 = dataa.hourDew46;
			$scope.hourHumid46 = dataa.hourHumid46;
			$scope.hourPress46 = dataa.hourPress46;
			$scope.hourVis46 = dataa.hourVis46;
			$scope.hourWindSpeed46 = dataa.hourWindSpeed46;
			$scope.hourWindBearing46 = dataa.hourWindBearing46;

			$scope.time47 = dataa.time47;
			$scope.hourTemp47 = dataa.hourTemp47;
			$scope.hourRain47 = dataa.hourRain47;
			$scope.hourIcon47 = dataa.hourIcon47;
			$scope.rainInten47 = dataa.rainInten47;
			$scope.hourClouds47 = dataa.hourClouds47;
			$scope.hourDew47 = dataa.hourDew47;
			$scope.hourHumid47 = dataa.hourHumid47;
			$scope.hourPress47 = dataa.hourPress47;
			$scope.hourVis47 = dataa.hourVis47;
			$scope.hourWindSpeed47 = dataa.hourWindSpeed47;
			$scope.hourWindBearing47 = dataa.hourWindBearing47;

			$scope.time48 = dataa.time48;
			$scope.hourTemp48 = dataa.hourTemp48;
			$scope.hourRain48 = dataa.hourRain48;
			$scope.hourIcon48 = dataa.hourIcon48;
			$scope.rainInten48 = dataa.rainInten48;
			$scope.hourClouds48 = dataa.hourClouds48;
			$scope.hourDew48 = dataa.hourDew48;
			$scope.hourHumid48 = dataa.hourHumid48;
			$scope.hourPress48 = dataa.hourPress48;
			$scope.hourVis48 = dataa.hourVis48;
			$scope.hourWindSpeed48 = dataa.hourWindSpeed48;
			$scope.hourWindBearing48 = dataa.hourWindBearing48;

		$scope.Address = address;
		console.log(changeUnitsClick);
		if (changeUnitsClick){
			console.log('inside click');
			if (units == 0){
				$('#buttonUnits').text("Change Units to English");
				$('p.visibility-units').text('Visibility is in kilometers. Stops after 16.09 kilometers');
				$('p.pressure-units').text('Pressure is in Hectopascals (same as mBars)');
				$('p.rain-intensity-units').text('Rain intensity has units of millimeters per hour');
				$('p.wind-speed-units').text('Wind Speed is in m/s');
				$('span.changeUnit').text("C");
				units = 1;
			}else if (units == 1){
				$('#buttonUnits').text("Change Units to SI");
				$('p.visibility-units').text('Visibility is in miles. Stops after 10 miles');
				$('p.pressure-units').text('Pressure is in milliBars');
				$('p.rain-intensity-units').text('Rain intensity has units of inches per hour');
				$('p.wind-speed-units').text('Wind Speed is in mph');
				$('span.changeUnit').text("F");
				units = 0;
			}
		}
		else {
			if (units == 1){
				$('#buttonUnits').text("Change Units to English");
				$('p.visibility-units').text('Visibility is in kilometers. Stops after 16.09 kilometers');
				$('p.pressure-units').text('Pressure is in Hectopascals (same as mBars)');
				$('p.rain-intensity-units').text('Rain intensity has units of millimeters per hour');
				$('p.wind-speed-units').text('Wind Speed is in m/s');
				$('span.changeUnit').text("C");
				units = 1;
			}else if (units == 0){
				$('#buttonUnits').text("Change Units to SI");
				$('p.visibility-units').text('Visibility is in miles. Stops after 10 miles');
				$('p.pressure-units').text('Pressure is in milliBars');
				$('p.rain-intensity-units').text('Rain intensity has units of inches per hour');
				$('p.wind-speed-units').text('Wind Speed is in mph');
				$('span.changeUnit').text("F");
				units = 0;
			}
		}
		changeUnitsClick = false;
		console.log(changeUnitsClick);
		console.log(units);
	};
