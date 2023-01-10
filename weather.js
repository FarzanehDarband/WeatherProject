let searchClick = document.querySelector('.searchClick');
let searchBox = document.querySelector('.searchBox');

let weather = {
    "apikey": "0e4c529bf8afdc80b9bcc6889790ad33",
    fetchWeather: function (city) {
        fetch(
            ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`
        ).then((response) => response.json())
            .then((data) => this.WeatherData(data));
    },
    WeatherData: function (data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, description, temp, humidity, speed);
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.temper').innerText = `${temp}°C`;
        document.querySelector('.humidity').innerText = `Humidity : ${humidity}%`;
        document.querySelector('.wind').innerText = `WindSpeed : ${speed}km/h`;
    },

    
    search: function () {
        this.fetchWeather(searchBox.value);
    }
};   


searchClick.addEventListener('click', function () {
    weather.search();
});
searchClick.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        weather.search();
        
    }
});