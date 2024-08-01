//Viết call API cho cities
const GEO_API_OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'RapidAPI',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };
const CITIES_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=';
  
const fetchCityData = (cityName, callback) => {
    fetch(CITIES_url+cityName, GEO_API_OPTIONS)
        .then(res => res.json())
        .then(callback)
        .catch(e=>console.log(e))
};


//Viết call API cho Content
const FORECAST_url = 'https://api.openweathermap.org/data/2.5'
const FORECAST_key = 'API key'
const fetchForecastData = (lat, lon, callback) => {
    fetch(`${FORECAST_url}/forecast?lat=${lat}&lon=${lon}&appid=${FORECAST_key}&units=metric`)
        .then(res => res.json())
        .then(callback)
        .catch(e=>console.log(e))
}

export {fetchCityData, fetchForecastData}