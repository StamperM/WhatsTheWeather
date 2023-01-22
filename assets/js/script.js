const today = dayjs();
let cityName = document.querySelector("#cityName");
const apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
const weatherApiKey = "283f7d6c1e685eac6be05c60305a774a";
const fiveDayApiKey = "bb8a3d984c401bd3e0b7c5b109985c9e";
// get city from local storage 
var storedWeather = JSON.parse(localStorage.getItem("city"))|| [];
let currentWeather;
const dailyIcon = document.getElementById("dailyIcon");
const dailyTemp = document.getElementById("dailyTemp");
const dailyHumidity = document.getElementById("dailyHumidity");
const dailyWind = document.getElementById("dailyWind");
const football = {     
    city: {},
    daily: {},
    fiveDay: [],
}
const citySearchbutton = document.getElementsByClassName("citySearch");
const button = document.getElementById("citySearch");
todayDate = document.getElementById("todayDateHTML").innerHTML = (dayjs().format("MMM D, YYYY"));
button.addEventListener("click", getLatAndLong);
// citySearchbutton.addEventListener("click", getLatAndLong);
displayCityData();

console.log(football);







// fetch geolocation
function getLatAndLong() {
  
    cityInput = (cityName.value);

    // console.log(cityInput);
    // cityStorage.push(cityInput);

    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=&appid=" + apiKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            football.city = cityInput;
                getWeatherCurrent(data[0].lat, data[0].lon);
            getFiveDayWeather(data[0].lat, data[0].lon);
            if(storedWeather.indexOf(cityInput)=== -1){
                storedWeather.push(cityInput);
            localStorage.setItem("city", JSON.stringify(storedWeather));
            }
            console.log("football",football);
            displayCityData();
            
        });


}


// fetch weather
function getWeatherCurrent(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=imperial`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            console.log(data.weather[0].icon);
            
            football.daily = {
                cityNameDaily: data.name,
                weatherIcon:data.weather[0].icon,
                dailyTemp: data.main.temp,
                dailyHumidity: data.main.humidity,
                dailyWind: data.wind.speed,
                
            }
            displayCurrentWeather();
            //     dailyTemp.textContent = `Tempature: ${data.main.temp}`;
            // dailyHumidity.textContent = `Humidity: ${data.main.humidity}`;
            // dailyWind.textContent = ` Wind: ${data.wind.speed}`;
        })


}


// 5 day fetch 

function getFiveDayWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${fiveDayApiKey}&units=imperial`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            football.fiveDay = [];
            console.log(data);
            const fivedays = data.list.slice(0,5);
            fivedays.forEach((everyday)=>{
            football.fiveDay.push( {
                date: everyday.dt_txt,
                fiveDayweatherIcon: everyday.weather[0].icon,
                tempature: everyday.main.temp,
                windSpeed: everyday.wind.speed,
                humidity: everyday.main.humidity,
            })
        })
            displayFiveDay()
        })
}

function displayCityData() {
    const soccer = document.getElementById('soccer');
    soccer.innerHTML='';
    let template = "<ul>"
    storedWeather.forEach((city) => {
        template +=
            ` <li class="citySearch"><button class="citySearch">${city}</button></li>`
    })
    template += `</ul>`
    console.log(soccer);
    console.log(template);
    soccer.insertAdjacentHTML("beforeend", template);
}


function displayCurrentWeather(){
    console.log('display footbal',football);
   
const containerTodaysWeather = document.getElementById("currentWeatherDiv");
let todaysWeather = "<div>";
containerTodaysWeather.innerHTML ="";
todaysWeather += `
<h2>${football.city}</h2>
<h2> ${todayDate}</h2 >
<div id="dailyWeatherIcon"> <img src="./assets/icons/${football.daily.weatherIcon}.png" alt=""></div>
  <ul>
<li id="dailyTemp">Tempature: ${football.daily.dailyTemp}</li>
  <li id="dailyHumidity">Humidity: ${football.daily.dailyHumidity}</li>
  <li id="dailyWind">Wind Speeds: ${football.daily.dailyWind}</li>
</ul>`
  
console.log("todays Weather",todaysWeather);
console.log("container",containerTodaysWeather);

todaysWeather += `</div>`;
containerTodaysWeather.insertAdjacentHTML("beforeend", todaysWeather);
}

function displayFiveDay(){
    console.log("fiveDar",football);
    const aCard= document.getElementById("fiveday");
    // console.log("a card", weatherCards);
    aCard.innerHTML="";
let eachDay = "<div class=colCards>"
football.fiveDay.forEach((everyday)=>{
    eachDay +=`
<h2>${everyday.date}</h2>
  <ul>
    <li><img src="./assets/icons/${everyday.fiveDayweatherIcon}.png"</li>
   <li>Tempature: ${everyday.tempature}</li>
   <li>Wind Speed: ${everyday.windSpeed}</li>
    <li>Humidity: ${everyday.humidity}</li>
  </ul>`
})

eachDay += "</div>"
aCard.insertAdjacentHTML("beforeend",eachDay);
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

// capture user input for city

// set city to local storeage
// append to search list


// function poplulateCityList() {
//     var searchList = document.getElementById('citySelect');
// console.log(searchList);

// console.log(cityStorage);
//     cityStorage.forEach(function(city){
//    var cityEl = document.createElement("li");
//    console.log(city);
//    cityEl.textContent=city;
//    console.log(cityEl.textContent);
//    searchList.append(cityEl);
// })

// }