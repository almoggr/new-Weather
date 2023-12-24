const apiKey = '2f3b937f1a3f81685793689224021855'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const searchBtn = document.querySelector("#searchBtn")
const weather = document.querySelector('.weather')



const checkWeather = () => {
// async function checkWeather(){
    const searchCity = document.querySelector("#searchCity").value
    if(searchCity == ''){
        currentCity = 'tel aviv'
    }else{
        currentCity = searchCity
    }
    // const weatherImg = document.querySelector(".weather-icon")
    
    fetch(apiUrl + `&appid=${apiKey}&q=${currentCity}`)
    .then(response => response.json())
    .then(data => {
        weather.innerHTML =

    `<img src="images/${data.weather[0].main}.png" class="weather-icon">
            <h1 class="temp">${Math.round(data.main.temp)}°c</h1>
            <h2 class="city">${data.name}</h2>
            <div class="details">
                <div class="col">
                    <img src="images/humidity.png">
                    <div>
                        <p class="humidity">${data.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="images/wind.png">
                    <div>
                        <p class="wind">${data.wind.speed} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>`
    })
    // const response = await fetch(apiUrl + `&appid=${apiKey}&q=${currentCity}`)
    // var data = await response.json()
    
    // weather.innerHTML =

    // `<img src="images/${data.weather[0].main}.png" class="weather-icon">
    //         <h1 class="temp">${Math.round(data.main.temp)}°c</h1>
    //         <h2 class="city">${data.name}</h2>
    //         <div class="details">
    //             <div class="col">
    //                 <img src="images/humidity.png">
    //                 <div>
    //                     <p class="humidity">${data.main.humidity}%</p>
    //                     <p>Humidity</p>
    //                 </div>
    //             </div>
    //             <div class="col">
    //                 <img src="images/wind.png">
    //                 <div>
    //                     <p class="wind">${data.wind.speed} km/h</p>
    //                     <p>Wind Speed</p>
    //                 </div>
    //             </div>
    //         </div>`
    // document.querySelector(".city").innerHTML = data.name
    // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c'
    // document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
    // document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + 'km/h'
    // weatherImg.src = `images/${data.weather[0].main}.png`
}

window.addEventListener('load',checkWeather)