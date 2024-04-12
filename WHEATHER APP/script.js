document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "3fe7802005d0f6a1ca078f7ecdcb825f";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".searchInput");
    const searchBtn = document.querySelector(".search-button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        // var data = await response.json();

        // document.querySelector(".city").innerHTML = data.name;
        // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        // document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        // document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            if(data.weather[0].main == "Clouds" ){
                weatherIcon.src = "images/cloud.png"
            }
            else if(data.weather[0].main == "Rain" ){
                weatherIcon.src = "images/rain.png"
            }
            else if(data.weather[0].main == "Clear" ){
                weatherIcon.src = "images/clear.png"
            }
            else if(data.weather[0].main == "Drizzel" ){
                weatherIcon.src = "images/drizzel.png"
            }
            else if(data.weather[0].main == "Mist" ){
                weatherIcon.src = "images/mist.png"
            }
            else if(data.weather[0].main == "Snow" ){
                weatherIcon.src= "images/snow.png"
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
    
            console.log(data);
    
        
        }

        // if(data.weather[0].main == "Clouds" ){
        //     weatherIcon.src = "images/cloud.png"
        // }
        // else if(data.weather[0].main == "Rain" ){
        //     weatherIcon.src = "images/rain.png"
        // }
        // else if(data.weather[0].main == "Clear" ){
        //     weatherIcon.src = "images/clear.png"
        // }
        // else if(data.weather[0].main == "Drizzel" ){
        //     weatherIcon.src = "images/drizzel.png"
        // }
        // else if(data.weather[0].main == "Mist" ){
        //     weatherIcon.src = "images/mist.png"
        // }
        // else if(data.weather[0].main == "Snow" ){
        //     weatherIcon.src= "images/snow.png"
        // }
        // document.querySelector(".weather").style.display = "block";

        // console.log(data);
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
