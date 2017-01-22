import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherDetail from '../containers/weather_detail';

export default class App extends Component {
  render() {
    return (
    	<div>
    		<SearchBar />
    		<WeatherDetail />
    	</div>
    );
  }
}
