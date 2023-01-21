const today = dayjs();
let cityName = document.querySelector("#cityName");
const apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
const weatherApiKey ="283f7d6c1e685eac6be05c60305a774a";
const fiveDayApiKey ="bb8a3d984c401bd3e0b7c5b109985c9e";
// get city from local storage 
var cityStorage=JSON.parse(localStorage.getItem("City")|| "[]");
let currentWeather;

const dailyIcon = document.getElementById("dailyIcon");
const dailyTemp = document.getElementById("dailyTemp");
const dailyHumidity = document.getElementById("dailyHumidity");
const dailyWind = document.getElementById("dailyWind");






const button = document.getElementById("citySearch");
// const todayDate = document.getElementById('today')
todayDate = document.getElementById("todayDateHTML").innerHTML=(dayjs().format("MMM D, YYYY"));
button.addEventListener("click",getLatAndLong);
// poplulateCityList()

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
            // // poplulateCityList();
            
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
      dailyIcon.innerHTML= <img src="`./assets/icons/${data.weather[0].id }`"alt="">
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
// function poplulateCityList() {
//     var searchList = document.getElementById('listOfCities');
//     cityStorage.forEach(function(city){
//    var cityEl = document.createElement("li");
//    cityEl.textContent=city;
//    console.log(cityEl.innertext);
//    searchList.append("cityEl");
// })
    

//     }


// populate weather for today's date -icon,temp, humidity,wind speed
function showCurrentWeather(data){
   const todaysWeather = document.getElementById('currentWeatherDiv')
    
    {
        // const currentWeatherEl = document.querySelector(".currentWeatherDiv");
        
        const dailyIconEL = document.createElement('li');
        const dailyTemp = document.createElement("li");
        const dailyHumity = document.createElement("li");
        const dailyWind= document.createElement("li");

        
        dailyIcon.classname='daily-img';
        dailyTemp.classname='daily-info';
        dailyHumity.className='daily-info';
        dailyWind.className='daily-info';


       
        currentWeather.append("li")


    }

}


// populate weather for next 5 days - icon,temp, humidity,wind speed



// using search list populate current and future. 
// create get data function 