const apikey="b3c0389d1525b312ef967be806154582";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".wheather-icon")

async function checkWheather(city){

    const resposne=await fetch(apiurl +city+ `&appid=${apikey}`)
    let data=await resposne.json();
    if(resposne.status==404)
    {
         document.querySelector(".error").style.display="block";
          document.querySelector(".wheather").style.display="none";
    }
    else{

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";

    if(data.weather[0].main=="Clouds")
    {
        weathericon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weathericon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weathericon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weathericon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weathericon.src="mist.png";
    }
    document.querySelector(".wheather").style.display="block";
    document.querySelector(".error").style.display="none";
    
}
}
searchbtn.addEventListener("click",()=>{
    checkWheather(searchbox.value);
})

