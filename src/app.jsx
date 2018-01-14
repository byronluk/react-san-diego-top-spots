import React, { Component } from 'react';

import TopSpot from './topspot';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: [],
    };
  }
  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='title-container'>
            <h1 className='title-head'>San Diego Top Spots</h1>
            <p className='title-description'>A list of the top 30 places to see in San Diego, CA</p>
          </div>
          {
            this.state.topspots.map((topspot) => {
              const spot =
                (<TopSpot
                  key={ topspot.id }
                  name={ topspot.name }
                  description={ topspot.description }
                  location={ topspot.location }
                />);
              return spot;
            })
        }
        </div>
      </div>
    );
  }
}

export default App;
