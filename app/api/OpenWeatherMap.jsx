var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ac306d43eb353bda3bd97430ccb2f10d&units=imperial';

// api key ac306d43eb353bda3bd97430ccb2f10d


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    // template strings
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    var returnObj = {};

    return axios.get(requestUrl).then(function (res) {
      // handle idiosyncratic errors in openWeatherMap
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        returnObj = {temp: res.data.main.temp, name: res.data.name};
        return returnObj;
      }
    }, function (err) {
      throw new Error(err.data.message);
    });
  }
};
