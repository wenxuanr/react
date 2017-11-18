import './App.css';
import React, { Component } from 'react';
import MapWithAMarker from '../src/components/googlemap/googlemap';
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

class App extends Component {
  render() {
    return (
      <div className="App">
          <MapWithAMarker
              key = 'a'
          />
      </div>
    );
  }
}

export default App;
