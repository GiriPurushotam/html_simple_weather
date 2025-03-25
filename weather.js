
        document.addEventListener("DOMContentLoaded", function() {
            const apiKey = "071b7ec6ddd1b7c6169502a2ba2e6e78";
            const city = "Tikathali";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            fetch(apiUrl) .then(Response => Response.json()) .then(data => {
                document.getElementById("city").innerText = data.name;
                document.getElementById("date").innerText = new Date().toLocaleDateString();
                document.getElementById("main-weather").innerText = data.weather[0].main;
                document.getElementById("weather-desc").innerText = data.weather[0].description;
                document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                document.getElementById("temp").innerText = (data.main.temp - 273.15).toFixed(0)  + "°C";
                document.getElementById("pressure").innerText = data.main.pressure + "hPa";
                document.getElementById("humidity").innerText = data.main.humidity + "%";
                document.getElementById("wind-speed").innerText = data.wind.speed + "m/s";
                document.getElementById("wind-direction").innerText = data.wind.deg + "°";
            })

            .catch(error => console.error("Error fetching weather data", error));
            
        });
  