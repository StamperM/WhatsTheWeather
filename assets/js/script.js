let cityName = document.querySelector("#cityName");
const apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
const weatherApiKey ="283f7d6c1e685eac6be05c60305a774a";
const fiveDayApiKey ="bb8a3d984c401bd3e0b7c5b109985c9e";
let cityLat
let cityLong
var cityStorage=JSON.parse(localStorage.getItem("City")|| "[]");
let currentWeather;
const button = document.getElementById("#citySearch")

button.addEventListener('click', poplulateCityList);

function poplulateCityList() {
    var searchList = document.getElementById('#listOfCities').children;
    if (searchList !+){
    cities.push(searchList);
    cityName.innerHTML=("city");

    }
}
// if this.includes(!cityName){
    
//  }
//  document.querySelector("#citySearch").addEventListener(click,populateSearchResults); 
//  function populateSearchResults(){
//     getLatAndLong();


    // 5 day fetch 
    // localStorage.setItem(city, ${cityName}.val(cityStorage));

// capture user input for city
// get city from local storage and (have to get which grab the mc'ds)
// set city to local storeage(after you get you set, )
// append to search list
// document.getElementById("#listOfCities").innertext= cityStorage;
// console.log(cityStorage);
// fetch geolocation



// function getLatAndLong() {
//     cityInput = (cityName.value);
//     cityStorage.push(cityInput);
//     localStorage.setItem("City",JSON.stringify(cityStorage));
//     fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=&appid=" + apiKey)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (data) {
//             console.log(data);
//              cityLong = data[0].lon;
//              cityLat = data[0].lat;
//             console.log(cityLat);
//             console.log(cityLong);
//             getWeatherCurrent(data[0].lat,data[0].lon);
//             // showCurrentWeather(data)
//             getFiveDayWeather(data[0].lat,data[0].lon);
//         });

       
//         console.log(cityInput);
// }

// // fetch weather
// function getWeatherCurrent(lat,long){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherApiKey}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data);
//        currentWeather= data;
//        console.log(currentWeather);
//     })
   
    
// }


// function getFiveDayWeather(lat,long){
//     fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${fiveDayApiKey}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data);

//     })
// }



// function showCurrentWeather(data){
//    const currentWeather=data;
//     {
//         const currentWeather = document.querySelector(".currentWeatherDiv");
//         const date = document.createElement("h2");
//         const dailyIcon = document.createElement("img");
//         const dailyTemp = document.createElement("h3");
//         const dailyHumity = document.createElement("h4");
//         const dailyWind= document.createElement("p");

//         date.className='date';
//         dailyIcon.classname='daily-img';
//         dailyTemp.classname='daily-info';
//         dailyHumity.className='daily-info';
//         dailyWind.className='daily-info';

//         img.innerHTML=data.weather[0].id;
//         h3.innerHTML=data.main.temp;
//         h4.innerHTML=data.main.humidity;
//         p.innerHTML=data.wind.speed;

//         currentWeather.append(h2,img,h3,h4,p)


//     }

// }
// // populate weather for today's date -icon,temp, humidity,wind speed


// fetch the api https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// populate weather for next 5 days - icon,temp, humidity,wind speed
// using search list populate current and future. 
// create get data function 

// city = cityName

// function getAlltheThings(){
//     getLatAndLong()
//    if
//     getWeatherCurrent();
// }

