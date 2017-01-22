import React,{Component} from 'react';
import {connect} from 'react-redux';
import CityTableRow from '../components/city_table_row';
class WeatherDetail extends Component{
	renderCityWeather(){
		return this.props.weather.map((cityData)=>{
			return (<CityTableRow key={cityData.city.id} cityData={cityData} />)
		})
	}
	render(){
		if(!this.props.weather.length) {
			return(
				<div>Search to get results here</div>
				)
		}
		return (
			<table>
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</tr>
			</thead>
			<tbody>
				{this.renderCityWeather()}
			</tbody>
			</table>
		)
	}
}
// function mapStateToProps(state){
// 	return({weather:state.weather})
// }

function mapStateToProps({weather}){
	return {weather}
}
export default connect(mapStateToProps)(WeatherDetail)