import React,{Component} from 'react';
import _ from 'lodash';
import Graph from './graph.js';
import GoogleMap from './google_map';
class CityTableRow extends Component{
	average(data){
		return _.round(_.sum(data)/data.length)
	}
	render(){
		const cityData = this.props.cityData
		const tempArr = cityData.list.map((weather)=> weather.main.temp-273)
		const pressureArr = cityData.list.map((weather) => weather.main.pressure)
		const humidityArr = cityData.list.map((weather) => weather.main.humidity)
		// const lat = cityData.city.coord.lat
		// const lon = cityData.city.coord.lon
		const {lat,lon} = cityData.city.coord
		return(
			<tr>
				<td><GoogleMap lat={lat} lon={lon}/>{cityData.city.name}, {cityData.city.country}</td>
				<td><Graph data={tempArr} color="black" />{this.average(tempArr)} C</td>
				<td><Graph data={pressureArr} color="red" />{this.average(pressureArr)} hPa</td>
				<td><Graph data={humidityArr} color="blue" />{this.average(humidityArr)} %</td>
			</tr>
		)
	}
}
export default CityTableRow