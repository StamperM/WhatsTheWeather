var cityName = document.querySelector("#cityName")

// capture user input for city
// get city from local storage and (have to get which grab the mc'ds)
// set city to local storeage(after you get you set, )
// append to search list
// fetch geolocation
fetch("http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}")
.then(function(response)){
return response
})
then(function(data)){
    console.log(data);
}
// fetch weather
// populate weather for today's date -icon,temp, humidity,wind speed
// fetch the api https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// populate weather for next 5 days - icon,temp, humidity,wind speed
// using search list populate current and future. 
// create get data function 
