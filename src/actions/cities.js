import alt from '../alt-singleton.js';

class CitiesActions {

  openCity(city) {
    return city;
  }

  closeCity(city) {
    return city;
  }
}

export default alt.createActions(CitiesActions);
