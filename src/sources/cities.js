import 'whatwg-fetch';

class CitiesSource {
  static get(cityId) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?id=${cityId}&appid=SECRET`, {
      method: 'GET'
    });
  }
}

export default CitiesSource;
