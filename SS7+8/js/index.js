const APP_ID = '503628701a0938d24cc366e3125f41a1'


const searchInput = document.getElementById("search-input");

const cityName = document.querySelector(".city-name");

const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');

const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');



// console.log(
//   fetch(`https://api.openweathermap.org/data/2.5/
//   weather?q=${event.target.value}&appid=${APP_ID}`)
//     .then(response => response.json())
//     .then((data) => console.log(data))

// );

searchInput.addEventListener("change", (event) => {
  // console.log(event.target.value); ////
  ///// request dữ liệu tới server trang openweathermap thông qua 
  // cú pháp fetch

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&units=metric&lang=vi
  `)
    .then(response => response.json())
    .then((data) => {
      console.log(data)

      cityName.innerHTML = data.name;
      weatherState.innerHTML = data.weather[0].description;

      /// Icon lát làm

      temperature.innerHTML = data.main.temp
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

      sunrise.innerHTML = moment.unix(data.sys.sunrise).format("HH:mm");

      sunset.innerHTML = moment.unix(data.sys.sunset).format("HH:mm")

      humidity.innerHTML = data.main.humidity;
      windSpeed.innerHTML = data.wind.speed;


    })

})