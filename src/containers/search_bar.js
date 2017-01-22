import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);
		//we have created component level state for the controlled input
		this.state={term:''}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event){
		this.setState({term:event.target.value});
	}
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''})
	}
	render(){
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" placeholder="Search a city here" value={this.state.term} onChange={this.onInputChange}/>
				<input type="submit" value="Search" />
			</form>
		)
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)