const today = dayjs();
let cityName = document.querySelector("#cityName");
const apiKey = "d5b935342e8b14cd96e3c89d3209dc4a";
const weatherApiKey = "283f7d6c1e685eac6be05c60305a774a";
const fiveDayApiKey = "bb8a3d984c401bd3e0b7c5b109985c9e";
// get city from local storage 
var storedWeather = JSON.parse(localStorage.getItem("football"));
let currentWeather;
const dailyIcon = document.getElementById("dailyIcon");
const dailyTemp = document.getElementById("dailyTemp");
const dailyHumidity = document.getElementById("dailyHumidity");
const dailyWind = document.getElementById("dailyWind");
const football = {
    city: {},
    daily: {},
    fiveDay: {},
}
const citySearchbutton = document.querySelector("citySearch");
const button = document.getElementById("citySearch");
todayDate = document.getElementById("todayDateHTML").innerHTML = (dayjs().format("MMM D, YYYY"));
button.addEventListener("click", getLatAndLong);
// citySearchbutton.addEventListener("click",getLatAndLong);
// displayCityData();









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
            football.city = cityInput,
                getWeatherCurrent(data[0].lat, data[0].lon);
            getFiveDayWeather(data[0].lat, data[0].lon);
            displayCityData();

            localStorage.setItem("football", JSON.stringify(football));
            console.log(football);
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
            //   dailyIcon.innerHTML= 
            football.daily = {
                cityNameDaily: data.name,
                // weatherIcon:data.weather[0].icon,
                dailyTemp: data.main.temp,
                dailyHumidity: data.main.humidity,
                dailyWind: data.wind.speed,
            },

                dailyTemp.textContent = `Tempature: ${data.main.temp}`;
            dailyHumidity.textContent = `Humidity: ${data.main.humidity}`;
            dailyWind.textContent = ` Wind: ${data.wind.speed}`;
        })


}


// 5 day fetch 

function getFiveDayWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${fiveDayApiKey}&units=imperial`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            football.fiveDay = {
                date: data.list[0].dt_txt,
                fiveDayweatherIcon: data.list[0].weather[0].icon,
                tempature: data.list[0].main.temp,
                windSpeed: data.list[0].wind.speed,
                humidity: data.list[0].main.humidity,
            }
        })
}

function displayCityData() {
    const soccer = document.getElementById('soccer');
    let template = "<ul>"
    football.forEach((city) => {
        template +=
            ` <li class="citySearch">${city}</li>`
    })
    template += `</ul>`
    console.log(soccer);
    console.log(template);
    soccer.insertAdjacentHTML("beforeend", template);
}


function displayCurrentWeather(){
const containerTodaysWeather = document.getElementById("currentWeatherDiv");
let todaysWeather = "<div>";
containerTodaysWeather +=
`<h2>${football.city}</h2>`
    `<h2> ${todayDate}</h2 >`
`<div id="dailyWeatherIcon"> <img src="./assets/icons/${football.weatherIcon}.png" alt=""></div>`
  `<ul>`
  `<li id="dailyTemp">Tempature: ${football.dailyTemp}</li>`
  `<li id="dailyHumidity">Humidity: ${football.dailyHumidity}</li>`
  `<li id="dailyWind">Wind Speeds: ${football.dailyWind}</li>`
`</ul>`
  
todaysWeather += `</div>`;
}

function displayFiveDay(){
    const aCard = document.getElementById("fiveDayCards");
let eachDay = "<div>";
football.forEach((fiveDay)=>{
    aCard +=
`<h2>${football.date}</h2>`
  `<ul>`
    `<li><img src="./assets/icons/${football.fiveDayweatherIcon}.png"</li>`
   ` <li>Tempature: ${football.tempature}</li>`
   ` <li>Wind Speed: ${football.windSpeed}</li>`
    `<li>Humidity: ${football.windSpeed}</li>`
  `</ul>`
})

eachDay += "</div>"

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