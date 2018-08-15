import React, { Component } from 'react';
import './App.css';
import { Header } from './Header'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // Here is a link to the API Documentation: https://dev.socrata.com/
    axios.get('https://data.austintexas.gov/resource/h8x4-nvyi.json')
      .then((res) => {
        console.log(res);
        // deal with this later
        // create fake store in json and set it to state for now
        // TODO: Decided how to store the response data.
      })
  }

  render() {
    // console.log(this.state.data)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dangerous Dogs</h2>
        </div>

        <p className="App-intro">
          <Header data={'hello'}/>
          {/* TODO: Delete line below */}
          {/* {this.state} */}
          {/* TODO: Display data here, maybe? Be creative! 🎉 */}
        </p>
      </div>
    );
  }
}

export default App;
