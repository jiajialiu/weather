function fetchWeather() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","http://classes.engineering.wustl.edu/cse330/content/weather_json.php",true);
    xmlHttp.addEventListener("load",getInfo,false);
    xmlHttp.send(null);
}

function getInfo(event) {
    var data=JSON.parse(event.target.responseText);
    var city=data.location.city;
    var state=data.location.state;
    var temperature=data.current.temp;
    var humidity=data.atmosphere.humidity;
    var tomorrow= "http://us.yimg.com/i/us/nws/weather/gr/"+data.tomorrow.code+"ds.png";
    var dayafter= "http://us.yimg.com/i/us/nws/weather/gr/"+data.dayafter.code+"ds.png";
    
    var htmlLocationParent = document.getElementsByClassName("weather-loc")[0];
    var htmlTempParent = document.getElementsByClassName("weather-temp")[0];
    var htmlHumiParent = document.getElementsByClassName("weather-humidity")[0];
    var htmlTomorrowParent = document.getElementsByClassName("weather-tomorrow")[0];
    var htmlDayafterParent = document.getElementsByClassName("weather-dayaftertomorrow")[0];
    htmlLocationParent.innerHTML = "<strong>" + city + "</strong>" + " " + state;
    htmlTempParent.innerHTML = temperature;
    htmlHumiParent.innerHTML = humidity;
    htmlTomorrowParent.src=tomorrow;
    htmlDayafterParent.src=dayafter;
}

document.addEventListener("DOMContentLoaded",fetchWeather,false);
document.getElementById("button").addEventListener("cilck",fetchWeather,false);