export function getWeatherData(dayData){
    const [date, time] = dayData.dt_txt.split(' ')
    const des = dayData.weather[0].description
    const icon = dayData.weather[0].icon
    const temp = Math.round(dayData.main.temp)
    const tempFeel = Math.round(dayData.main.feels_like)
    const humidity = dayData.main.humidity
    const clouds = dayData.clouds.all
    const wind = dayData.wind.speed

    return {date, time, des, icon, temp, tempFeel, humidity, clouds, wind}
}