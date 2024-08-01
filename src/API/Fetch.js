//Viết call API cho cities
const GEO_API_OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd6fe19888dmshaa9707258f13f81p112c45jsn2520a9b4dc94',
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
const FORECAST_key = '5387d63d2fb8c76c1224f21f02dcf4a7'
const fetchForecastData = (lat, lon, callback) => {
    fetch(`${FORECAST_url}/forecast?lat=${lat}&lon=${lon}&appid=${FORECAST_key}&units=metric`)
        .then(res => res.json())
        .then(callback)
        .catch(e=>console.log(e))
}

export {fetchCityData, fetchForecastData}