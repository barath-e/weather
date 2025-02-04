const apikey="71f1028f49687c9adbd75f9103f8b05a"
const apiurl="https://api.openweathermap.org/data/2.5/weather?c&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-icon");

async function checkweather(city){
    const respose = await fetch(apiurl + city+ `&appid=${apikey}`);

    if (respose.status==404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else {
        var data = await respose.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp ").innerHTML =  Math.round(data.main.temp - 273.15) + "°C";
        document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
        document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";
    
    
        if (data.weather[0].main == "Clouds") {
            weatherImg.src="images/clouds.png" 
        } 
        else if (data.weather[0].main ==  "Rain") {
            weatherImg.src="images/rain.png" 
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImg.src="images/drizzle.png" 
        } 
        else if (data.weather[0].main == "Mist") {
            weatherImg.src="images/mist.png" 
        }
        else if (data.weather[0].main == "Clear") {
            weatherImg.src="images/clear.png" 
        }
    
       document.querySelector(".weather").style.display="block";
        
    }
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})

 