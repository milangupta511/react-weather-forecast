import React, {Component} from 'react';
import {DataTable,TableHeader} from 'react-mdl';
import EditItem from './edit_item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DeleteItem from './delete_item'
import EditItemForm from './edit_item_form'
import {toggleCompleteToDo} from '../actions/index'
class ViewList extends Component{
	constructor(props){
		super(props)
		this.renderRows = this.renderRows.bind(this);
		this.toggleComplete = this.toggleComplete.bind(this)
	}
	toggleComplete(id){
		this.props.toggleCompleteToDo(id);
	}
	renderRows(filterArr){
		return filterArr.map((item,index)=>{
			if(item.isEditMode){
				return {
					id:index,
					selectable:<input type="checkbox" checked={item.isCompleted} onChange={() => this.toggleComplete(index)}/>,
					task: <EditItemForm term={item.term} index={index}/>,
					edit:'',
					delete:''
				}	
			}
			return {
					id:index,
					selectable:<input type="checkbox" checked={item.isCompleted} onChange={() => this.toggleComplete(index)}/>,
					task:item.term,
					edit:<EditItem index={index}/>,
					delete: <DeleteItem index={index}/>
				}
		})
	}
	render(){
		var filterArr = this.props.filterArr
		return (
			<DataTable
			    shadow={0}
			    rowKeyColumn="id"
			    rows={this.renderRows(filterArr)}
			>
				<TableHeader name="selectable" tooltip="select this">Select</TableHeader>
				<TableHeader name="task" tooltip="The amazing material name">Task</TableHeader>
	    		<TableHeader name="edit" tooltip="Number of materials">Edit Task</TableHeader>
	    		<TableHeader name="delete" tooltip="Price pet unit">Delete Task</TableHeader>
			</DataTable>)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({toggleCompleteToDo}, dispatch);
}

export default connect(null, mapDispatchToProps)(ViewList)
