const today = dayjs();
let cityName = document.querySelector("#cityName");
const apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
const weatherApiKey = "283f7d6c1e685eac6be05c60305a774a";
const fiveDayApiKey = "bb8a3d984c401bd3e0b7c5b109985c9e";
// get city from local storage 
var storedWeather = JSON.parse(localStorage.getItem("city")) || [];
let currentWeather;
const dailyIcon = document.getElementById("dailyIcon");
const dailyTemp = document.getElementById("dailyTemp");
const dailyHumidity = document.getElementById("dailyHumidity");
const dailyWind = document.getElementById("dailyWind");
let userSelectedCity;
const football = {
    city: {},
    daily: {},
    fiveDay: [],
}

const button = document.getElementById("citySearch");
todayDate = document.getElementById("todayDateHTML").innerHTML = (dayjs().format("MMM D, YYYY"));
// Triggers the request for geolocation 
button.addEventListener("click", getCitySearch);

// This allows user to select a previouly searched city to be searched for again by clicking the name. 

function getCitySearch(){
       cityInput = cityName.value;
        getLatAndLong(cityInput);
  
    }


// This function kicks off the geolocation request and the data that is return is used for the current and 5 day request and those functions are called in this function. 
function getLatAndLong(city) {

    // cityInput = cityName.value;

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=&appid=" + apiKey)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            football.city = cityInput;
            getWeatherCurrent(data[0].lat, data[0].lon);
            getFiveDayWeather(data[0].lat, data[0].lon);

            if (storedWeather.indexOf(cityInput) === -1) {
                storedWeather.push(cityInput);
                localStorage.setItem("city", JSON.stringify(storedWeather));
            }
            console.log("football", football);
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
                weatherIcon: data.weather[0].icon,
                dailyTemp: data.main.temp,
                dailyHumidity: data.main.humidity,
                dailyWind: data.wind.speed,

            }
            displayCurrentWeather();
            
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
            const fivedays = [data.list[1], data.list[9], data.list[17], data.list[25], data.list[33]];
            fivedays.forEach((everyday) => {
                football.fiveDay.push({
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
// displays the search list that you can select a previously searched city and get the weather
function displayCityData() {
    const soccer = document.getElementById('soccer');
    soccer.innerHTML = '';
    let template = "<ul class=gettingCity>"
    storedWeather.forEach((city) => {
        template +=
            ` <li class="golf" >${city}</li>`
    })
    // <button class=" buttonCity" id ="${city}></button>
    template += `</ul>`
    console.log(soccer);
    console.log(template);
    soccer.insertAdjacentHTML("beforeend", template);

    document.querySelectorAll(".gettingCity").forEach((city) => {
        city.addEventListener("click", (event) => {
           cityInput = event.target.innerHTML;
            getLatAndLong(cityInput);
        })
    }) 

}

// displays the current weather for the searched city
function displayCurrentWeather() {
    console.log('display footbal', football);

    const containerTodaysWeather = document.getElementById("currentWeatherDiv");
    let todaysWeather = "<div>";
    containerTodaysWeather.innerHTML = "";
    todaysWeather += `
<div class="currentSectionONe>
<h2 class="dailyH2">${football.city}</h2>
<h2 class="dailyH2"> ${todayDate}</h2 >
</div>
<div class= currentSectionTwo>
<div id="dailyWeatherIcon"> <img src="./assets/icons/${football.daily.weatherIcon}.png" alt=""></div>
  <ul>
<li id="dailyTemp">Tempature: ${football.daily.dailyTemp}</li>
  <li id="dailyHumidity">Humidity: ${football.daily.dailyHumidity}</li>
  <li id="dailyWind">Wind Speeds: ${football.daily.dailyWind}</li>
</ul>
  </div>`
    console.log("todays Weather", todaysWeather);
    console.log("container", containerTodaysWeather);

    todaysWeather += `</div>`;
    containerTodaysWeather.insertAdjacentHTML("beforeend", todaysWeather);
}
// displays the weather for 5 days of the searched city
function displayFiveDay() {
    console.log("fiveDar", football);
    const aCard = document.getElementById("fiveday");
    // console.log("a card", weatherCards);
    aCard.innerHTML = "";
    let eachDay = "<div class= colCards>"
    football.fiveDay.forEach((everyday) => {
        eachDay += `
<h2>${everyday.date}</h2>
  <ul>
    <li><img src="./assets/icons/${everyday.fiveDayweatherIcon}.png"</li>
   <li>Tempature: ${everyday.tempature}</li>
   <li>Wind Speed: ${everyday.windSpeed}</li>
    <li>Humidity: ${everyday.humidity}</li>
  </ul>`
    })

    eachDay += "</div>"
    aCard.insertAdjacentHTML("beforeend", eachDay);
}





