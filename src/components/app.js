import React, { Component } from 'react';
import AddList from '../containers/add_list';
import FilterList from '../containers/filter_list';
export default class App extends Component {
  render() {
    return (
    	<div className="demo-card-wide mdl-card mdl-shadow--2dp">
			<AddList />
			<FilterList />
		</div>
    );
  }
}
