import React, {Component} from 'react';
import {connect} from  'react-redux';
class ViewList extends Component{
	constructor(props){
		super(props)
		this.renderList=this.renderList.bind(this)
	}
	renderList(){
		return this.props.toDoList.map((item,index) =>{
			return (<li key={index}>{index+1}. {item}</li>)
		})
	}
	render(){
		return (<ul>
			{this.renderList()}
		</ul>)
	}
}

function mapStateToProps(state){
	return {toDoList:state.toDoList}
}

export default connect(mapStateToProps)(ViewList)
