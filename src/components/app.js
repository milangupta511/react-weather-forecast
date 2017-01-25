import React, { Component } from 'react';
import AddList from '../containers/add_list';
import ViewList from '../containers/view_list';
export default class App extends Component {
  render() {
    return (
    	<div>
			<AddList />
			<ViewList />
		</div>
    );
  }
}
