import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';
import Header from './Header';
import Table from './Table';
import { Footer } from './Footer';
import { ClosestDogCard } from './ClosestDogCard';
// FIXME import { Map } from './Map';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount () {
    // Here is a link to the API Documentation: https://dev.socrata.com/
    axios.get('https://data.austintexas.gov/resource/h8x4-nvyi.json')
      .then((res) => {
        this.props.loadAllDogs(res.data);
      });
  }

  render () {
    const { showAll, showAllDogs, findClosest, filteredResponses, responses } = this.props;
    return (
      <div className='App'>
        <div className='App-header'>
          <Header filter={findClosest} showAll={showAllDogs} responses={responses} />
        </div>
        <p className='App-intro'>
          {/* TODO create and display map from Google Map API */}
          {/* {showMap && <Map />} */}
        </p>
        {filteredResponses.length > 0 && <ClosestDogCard dog={filteredResponses} />}
        {showAll && <Table data={responses} />}
        <Footer />
      </div>
    );
  }
}

export default App;
