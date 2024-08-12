let Cityname = document.getElementById("Cityname")
let Cloudstatus = document.getElementById("Cloudstatus")
let Longitudes = document.getElementById("Longitudes")
let Latitudes = document.getElementById("Latitudes")
let cityid = document.getElementById("cityid")
let Temp = document.getElementById("Temp")
let MaxTemp = document.getElementById("Max-Temp")
let Mintemp = document.getElementById("Min-Temp")
let Feels = document.getElementById("Feels")
let Humidity = document.getElementById("Humidity")
let Wind = document.getElementById("Wind-Speed")
let Visibile = document.getElementById("Visibility")
let Sunrise = document.getElementById("Sunrise")
let Sunset = document.getElementById("Sunset")
let Description = document.getElementById("Description")
let logo = document.getElementById("logo")
let logodes = document.getElementById("logodes")
let ball = document.getElementById("ball")

let search = document.getElementById("city")
let btn = document.getElementById("btn")

function change() {
    document.body.classList.toggle("night")
    document.body.classList.toggle("day")
}

var time
setInterval(() => {
    let d = new Date()
    time = d.getHours()
    console.log(time);
    if (time >= 19 || time <= 4) {
        change()
    }
}, 60000 * 20);



btn.addEventListener("click", async () => {
    var value = await search.value
    var URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b5bb72a1beaf38cda781628b1a6d1e99&units=metric`
    async function Getdata() {
        try {
            let response = await fetch(URL)
            let data = await response.json()
            // console.log(data);
            // console.log(data.name);
            // console.log(data.clouds.all);
            // console.log(data.coord.lon);
            // console.log(data.coord.lat);
            // console.log(data.id);
            // console.log(data.main.temp);
            // console.log(data.main.temp_max);
            // console.log(data.main.temp_min);
            // console.log(data.main.feels_like);
            // console.log(data.main.humidity);
            // console.log(data.wind.speed);
            // console.log(data.visibility);
            // console.log(data.sys.sunrise);
            // console.log(data.sys.sunset);
            // console.log(data.weather[0].description);
            // console.log(data.weather[0].icon);
            logo.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            Cityname.innerText = data.name
            Cloudstatus.innerText = data.clouds.all + "% clouds"
            Longitudes.innerText = data.coord.lon
            Latitudes.innerText = data.coord.lat
            cityid.innerText = data.id
            Temp.innerText = data.main.temp + "°C"
            MaxTemp.innerText = data.main.temp_max + "°C"
            Mintemp.innerText = data.main.temp_min + "°C"
            Feels.innerText = data.main.feels_like + "°C"
            Humidity.innerText = data.main.humidity
            Wind.innerText = data.wind.speed
            Sunrise.innerText = data.sys.sunrise
            Sunset.innerText = data.sys.sunset
            Description.innerText = data.weather[0].description
            Visibile.innerText = data.visibility / 1000 + "  km"
            logodes.innerText = data.weather[0].main


        } catch {
            alert("city not found")
        }
    }
    Getdata()
})


ball.addEventListener("click", async () => {
    await ball.classList.toggle("dark")
    await ball.classList.toggle("light")
    change()
})