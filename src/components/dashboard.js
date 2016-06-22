import React from 'react';

import ForecastNavbar from 'components/navbar.js';
import SearchDashboard from 'components/search-dashboard.js';
import ForecastDashboard from 'components/forecast-dashboard.js';
import Footer from 'components/footer.js';

import 'bootstrap.less';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.onViewChange = this.onViewChange.bind(this);

    this.state = { view: 'home'};
  }

  onViewChange(city) {
    this.setState({ view: city });
  }

  render() {
    let dashboard = null;

    if (this.state.view === 'home') {
      dashboard = <SearchDashboard selectView={this.onViewChange}></SearchDashboard>;
    } else {
      dashboard = <ForecastDashboard view={this.state.view}></ForecastDashboard>;
    }

    return (<div>
      <ForecastNavbar selectedNav={this.state.view} selectView={this.onViewChange}></ForecastNavbar>
      {dashboard}
      <Footer></Footer>
    </div>)
  }
}

export default Dashboard;
