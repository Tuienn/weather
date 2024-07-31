import { getWeatherData } from "./getWeatherData";

export function groupDay_date(week){
    let days = new Array(6);
    let index = 0;

    days[0] = [getWeatherData(week[0])]
    days[1] = []
    days[2] = []
    days[3] = []
    days[4] = []
    days[5] = []
    let tempMin = 100, tempMax = -100 //Xét the temp
    let humidityMin = 100, humidityMax = -1
    let cloudsMin = 100, cloudsMax = -1
    let windMin = 100, windMax = -1

    for(let i=1; i<40; i++){
        const now = week[i].dt_txt.split(' ')
        const preTime = week[i-1].dt_txt.split(' ')

        const weatherData = getWeatherData(week[i])
        // console.log(now, preTime);

        if(now[0]===preTime[0]){
            if(weatherData.temp<tempMin)
                tempMin = weatherData.temp
            if(weatherData.temp>tempMax)
                tempMax = weatherData.temp
    
            if(weatherData.humidity<humidityMin)
                humidityMin = weatherData.humidity
            if(weatherData.humidity>humidityMax)
                humidityMax = weatherData.humidity
    
            if(weatherData.clouds<cloudsMin)
                cloudsMin = weatherData.clouds
            if(weatherData.clouds>cloudsMax)
                cloudsMax = weatherData.clouds
    
            if(weatherData.wind<windMin)
                windMin = weatherData.wind
            if(weatherData.wind>windMax)
                windMax = weatherData.wind
        }

        if(now[0] !== preTime[0] && index<5){
            days[index].push({
                date: preTime[0], 
                tempMin,
                tempMax,
                humidityMin,
                humidityMax,
                cloudsMin, 
                cloudsMax,
                windMin, 
                windMax
            })
            index++;
        }

        if(i===39){
            days[index].push({
                date: preTime[0], 
                tempMin,
                tempMax,
                humidityMin,
                humidityMax,
                cloudsMin, 
                cloudsMax,
                windMin, 
                windMax
            })
            break;
        }

        days[index].push(weatherData)
    }
    return days
}
export function getLastOfArray(arr){
    return arr[arr.length-1]
}
