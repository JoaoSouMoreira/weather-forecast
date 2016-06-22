import alt from '../alt-singleton.js';
import CitiesActions from 'actions/cities.js';
import CitiesSource from 'sources/cities.js';

class CitiesStore {
  constructor() {
    this.state = { openCities: [], isLoading: false };

    this.bindListeners({
      openCity: CitiesActions.openCity,
      closeCity: CitiesActions.closeCity
    });
  }

  openCity(city) {
    this.setState({ isLoading: true });
    const openCities = this.state.openCities;
    const openCity = openCities.find((openCity) => openCity.city.name === city.label);

    if (!openCity) {
      CitiesSource.get(city.value).then((response) => {
        return response.json();
      }).then((json) => {
        openCities.push(json);
        this.setState({ openCities: openCities, isLoading: false });
      })
    }
  }

  closeCity(city) {
    const openCities = this.state.openCities.filter((openCity) => openCity.city.name !== city);

    this.setState({ openCities: openCities });
  }
}

export default alt.createStore(CitiesStore, 'CitiesStore');
