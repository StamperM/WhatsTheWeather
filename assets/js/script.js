const today = dayjs();
let cityName = document.querySelector("#cityName");
const apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
const weatherApiKey ="283f7d6c1e685eac6be05c60305a774a";
const fiveDayApiKey ="bb8a3d984c401bd3e0b7c5b109985c9e";
// get city from local storage 
var cityStorage=JSON.parse(localStorage.getItem("City")||"[]");
let currentWeather;
const dailyIcon = document.getElementById("dailyIcon");
const dailyTemp = document.getElementById("dailyTemp");
const dailyHumidity = document.getElementById("dailyHumidity");
const dailyWind = document.getElementById("dailyWind");

const button = document.getElementById("citySearch");
todayDate = document.getElementById("todayDateHTML").innerHTML=(dayjs().format("MMM D, YYYY"));
button.addEventListener("click",getLatAndLong);
poplulateCityList()


// }
// is city on list? 
// if city is not on list add
// then sort()

//  document.querySelector("#citySearch").addEventListener(click,populateSearchResults); 
//  function populateSearchResults(){
//     getLatAndLong();


// console.log(cityStorage);




// fetch geolocation
function getLatAndLong() {
    cityInput = (cityName.value);
    console.log(cityInput);
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
            console.log(cityLong);
            getWeatherCurrent(data[0].lat,data[0].lon);
            getFiveDayWeather(data[0].lat,data[0].lon);
            poplulateCityList();
            
        });

       
        console.log(cityInput);
}


// fetch weather
function getWeatherCurrent(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=imperial`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

        console.log(data.weather[0].icon);
    //   dailyIcon.innerHTML= 
     
 
      dailyTemp.textContent = `Tempature: ${data.main.temp}`;
      dailyHumidity.textContent= `Humidity: ${data.main.humidity}`;
      dailyWind.textContent = ` Wind: ${data.wind.speed}`;
    })
   
    
}


    // 5 day fetch 

function getFiveDayWeather(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${fiveDayApiKey}&units=imperial`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);

    })
}
// capture user input for city

// set city to local storeage
// append to search list


function poplulateCityList() {
    var searchList = document.getElementById('citySelect');
console.log(searchList);

console.log(cityStorage);
    cityStorage.forEach(function(city){
   var cityEl = document.createElement("li");
   console.log(city);
   cityEl.textContent=city;
   console.log(cityEl.textContent);
   searchList.append(cityEl);
})

}


// populate weather for today's date -icon,temp, humidity,wind speed
// function showCurrentWeather(data){
//    const todaysWeather = document.getElementById('currentWeatherDiv')
    
//     {
//         // const currentWeatherEl = document.querySelector(".currentWeatherDiv");
        
//         const fiveDayIconEL = document.createElement('li');
//         const fiveDaydailyTemp = document.createElement("li");
//         const fiveDaydailyHumity = document.createElement("li");
//         const dfiveDayailyWind= document.createElement("li");

//         dailyIcon.classname='fiveDaydaily-img';
//         dailyTemp.classname='fiveDaydaily-info';
//         dailyHumity.className='fiveDaydaily-info';
//         dailyWind.className='fiveDaydaily-info';
       
//         currentWeather.append("li");

//     }




// populate weather for next 5 days - icon,temp, humidity,wind speed

// localStorage.clear()

// using search list populate current and future. 
// create get data function 
