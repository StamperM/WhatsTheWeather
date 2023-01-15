var cityName = document.querySelector("#cityName");
var apiKey= "d5b935342e8b14cd96e3c89d3209dc4a";

var cityLat;
var citylong;

function poplulateCityList(){
    // localStorage.setItem(city, ${cityName}.val())
}
// capture user input for city
// get city from local storage and (have to get which grab the mc'ds)
// set city to local storeage(after you get you set, )
// append to search list
// fetch geolocation
function getLatAndLong(){
fetch("http://api.openweathermap.org/geo/1.0/direct?q=gainesville&limit=&appid=d5b935342e8b14cd96e3c89d3209dc4a")
.then(function(response){
return response.json()
})
.then(function(data){
    console.log(data);
    var cityLong=data[0].lon;
    var cityLat= data[0].lat;
    console.log(cityLat);
    console.log(cityLong)
});
}
// fetch weather
// populate weather for today's date -icon,temp, humidity,wind speed
// fetch the api https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// populate weather for next 5 days - icon,temp, humidity,wind speed
// using search list populate current and future. 
// create get data function 
