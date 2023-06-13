const API_KEY= "732a043a8c4e33ddceefc168cf8e33bf"
const BASE_URL="https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType ,searchParams)=>{
    // https://api.openweathermap.org/data/2.5/weather?q=Jordan&appid=732a043a8c4e33ddceefc168cf8e33bf
    const url =new URL (BASE_URL +"/"+infoType)
    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    url.search=URLSearchParams({...searchParams})
}

// http://api.weatherapi.com/v1/forecast.json?key=3858ed70819a46d0944150122233105&q=07112&days=7