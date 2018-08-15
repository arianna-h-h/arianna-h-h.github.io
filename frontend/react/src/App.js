import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux'

import './App.css';
import { Header } from './Header';
import List from './List';
import Map from './Map';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount () {
    // Here is a link to the API Documentation: https://dev.socrata.com/
    axios.get('https://data.austintexas.gov/resource/h8x4-nvyi.json')
      .then((res) => {
        console.log(res);
        this.props.loadAllDogs(res.data);
        // deal with this later
        // create fake store in json and set it to state for now
        // TODO: Decided how to store the response data.
      });
  }

  render () {
    const { showAll, showMap, filterByZip, responses } = this.props;
    console.log('responses', responses)
    // console.log(this.state.data)
    return (
      <div className='App'>
        <div className='App-header'>
          <Header />
        </div>
        <p className='App-intro'>
          {(showAll || filterByZip) && <List data={responses} />}
          {/* {showMap && <Map />} */}
        </p>
      </div>
    );
  }
}

export default App;
