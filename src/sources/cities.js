import 'whatwg-fetch';

import Config from '../../config.json';

class CitiesSource {
  static get(cityId) {
    const appId = Config.WEATHER_APP_ID;

    return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?id=${cityId}&appid=${appId}`, {
      method: 'GET'
    });
  }
}

export default CitiesSource;
