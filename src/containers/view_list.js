import React, {Component} from 'react';
import {connect} from  'react-redux';
import ViewListItem from '../components/view_list_item';
class ViewList extends Component{
	constructor(props){
		super(props)
		this.renderList=this.renderList.bind(this)
	}
	renderList(){
		return this.props.toDoList.map((item,index) =>{
			return (<ViewListItem key={index} index={index} term={item.term} isEditMode={item.isEditMode}/>)
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
