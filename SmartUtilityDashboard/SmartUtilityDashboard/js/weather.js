// ===============================
// OpenWeatherMap API Key
// ===============================

const apiKey = "6a880a412383276c53e33fa9f4a49bb4";

// ===============================
// Get Weather
// ===============================

async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (city === "") {

        alert("Please enter a city name");

        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("City not found");

        }

        const data = await response.json();

        displayWeather(data);

    }

    catch (error) {

        document.getElementById("weatherResult").innerHTML = `

            <h3 style="color:red;">
                City not found!
            </h3>

        `;

    }

}

// ===============================
// Display Weather
// ===============================

function displayWeather(data) {

    const city = data.name;

    const country = data.sys.country;

    const temp = data.main.temp;

    const humidity = data.main.humidity;

    const pressure = data.main.pressure;

    const wind = data.wind.speed;

    const weather = data.weather[0].main;

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    document.getElementById("weatherResult").innerHTML = `

        <h2>${city}, ${country}</h2>

        <img
        src="https://openweathermap.org/img/wn/${icon}@2x.png">

        <h3>${weather}</h3>

        <p>${description}</p>

        <hr>

        <p><b>🌡 Temperature :</b> ${temp} °C</p>

        <p><b>💧 Humidity :</b> ${humidity}%</p>

        <p><b>🌬 Wind Speed :</b> ${wind} m/s</p>

        <p><b>📊 Pressure :</b> ${pressure} hPa</p>

    `;

}

// ===============================
// Press Enter to Search
// ===============================

document
.getElementById("city")
.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        getWeather();

    }

});