import React, {Component} from 'react';
import {connect} from  'react-redux';
import {DataTable,TableHeader} from 'react-mdl';
import EditItem from './edit_item';
import DeleteItem from './delete_item'
import EditItemForm from './edit_item_form'
class ViewList extends Component{
	constructor(props){
		super(props)
		this.renderRows = this.renderRows.bind(this);
	}
	renderRows(){
		return this.props.toDoList.map((item,index)=>{
			if(item.isEditMode){
				return {
					id:index,
					task: <EditItemForm term={item.term} index={index}/>,
					edit:'',
					delete:''
				}	
			}
			return {
					id:index,
					task:item.term,
					edit:<EditItem index={index}/>,
					delete: <DeleteItem index={index}/>
				}
		})
	}
	render(){
		
		return (
			<DataTable
			    selectable
			    shadow={0}
			    rowKeyColumn="id"
			    rows={this.renderRows()}
			>
				<TableHeader name="task" tooltip="The amazing material name">Task</TableHeader>
	    		<TableHeader name="edit" tooltip="Number of materials">Edit Task</TableHeader>
	    		<TableHeader name="delete" tooltip="Price pet unit">Delete Task</TableHeader>
			</DataTable>)
	}
}

function mapStateToProps(state){
	return {toDoList:state.toDoList}
}

export default connect(mapStateToProps)(ViewList)
