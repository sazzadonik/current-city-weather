let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", weatherUpdate);

function weatherUpdate(){
    let city = document.getElementById("getCity").value;
    if(city !=""){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85ce9e8df451790d9c831a4f976c8ce3`)
        .then(res => res.json())
        .then(data => {
            const weatherDetails = data.main;
            const temperature = Math.floor(weatherDetails.temp - 273.15);
            const city = data.name;
            const weatherCondition = data.weather[0].main;
            const iconName = data.weather[0].icon + ".png";
            const iconUrl = "http://openweathermap.org/img/w/" + iconName
        document.getElementById("temperature").innerText = temperature;
        document.getElementById("city").innerText = city;
        document.getElementById("weatherCondition").innerText = weatherCondition;
        document.getElementById("iconUrl").src = iconUrl;
        });
    }else{
        alert("Enter a valid city")
    }
    
}