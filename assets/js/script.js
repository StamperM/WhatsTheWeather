var cityName = document.querySelector("#cityName");
var apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
var weatherApiKey ="283f7d6c1e685eac6be05c60305a774a"
var cityLat
var cityLong
var cityStorage=JSON.parse(localStorage.getItem("City")|| "[]");
var currentWeather
var dailyWeather
var cityList = document.querySelector("#listOfCities";)
function poplulateCityList() {
    cityList.each
    // localStorage.setItem(city, ${cityName}.val(cityStorage));
}
// capture user input for city
// get city from local storage and (have to get which grab the mc'ds)
// set city to local storeage(after you get you set, )
// append to search list
document.getElementById("#istOfCities").innerHTML = cityStorage;
console.log(cityStorage);
// fetch geolocation
function getLatAndLong() {
    var cityInput = (cityName.value);
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
}
// fetch weather
function getWeather(){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${cityLat}&lon=${cityLong}&exclude=minutely,hourly,alerts&appid=${weatherApiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

    })
}


// populate weather for today's date -icon,temp, humidity,wind speed
// fetch the api https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// populate weather for next 5 days - icon,temp, humidity,wind speed
// using search list populate current and future. 
// create get data function 

city = cityName