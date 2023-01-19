var cityName = document.querySelector("#cityName");
var apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
var weatherApiKey ="283f7d6c1e685eac6be05c60305a774a"
var cityLat
var cityLong
var cityStorage=JSON.parse(localStorage.getItem("City")|| "[]");
var currentWeather
var dailyWeather
var cityInput
function poplulateCityList() {
    var searchList = document.getElementById('#listOfCities').children;
    if (cities != searchList)
    cities.push(searchList);

    
// if this.includes(!cityName){
    
 }
    // 5 day fetch 
    // localStorage.setItem(city, ${cityName}.val(cityStorage));

// capture user input for city
// get city from local storage and (have to get which grab the mc'ds)
// set city to local storeage(after you get you set, )
// append to search list
// document.getElementById("#listOfCities").innertext= cityStorage;
// console.log(cityStorage);
// fetch geolocation
function getLatAndLong() {
    cityInput = (cityName.value);
    cityStorage.push(cityInput);
    localStorage.setItem("City",JSON.stringify(cityStorage));
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=&appid=" + apiKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
             cityLong = data[0].lon;
             cityLat = data[0].lat;
            console.log(cityLat);
            console.log(cityLong)
        });

        getWeather();
        console.log(cityInput);
}


// fetch weather
function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=$-82.59&lon=29.82&appid=${weatherApiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

    })
    console.log(cityLat);
    console.log(cityLong);
}


// populate weather for today's date -icon,temp, humidity,wind speed
// fetch the api https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// populate weather for next 5 days - icon,temp, humidity,wind speed
// using search list populate current and future. 
// create get data function 

// city = cityName