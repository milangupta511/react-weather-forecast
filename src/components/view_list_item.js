import React,{Component} from 'react';
import DeleteItem from '../containers/delete_item';
import EditItem from '../containers/edit_item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editToDo} from '../actions/index'

class ViewListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			term:this.props.term
		}
		this.onInputEdit=this.onInputEdit.bind(this);
		this.onFormSubmit=this.onFormSubmit.bind(this);
	}
	onInputEdit(event){
		this.setState({term:event.target.value})
	}
	onFormSubmit(event){
		event.preventDefault();
		this.props.editToDo(this.state.term, this.props.index)
	}
	render(){
		var index=this.props.index,
			term = this.props.term,
			isEditMode = this.props.isEditMode;

		if (isEditMode) {
			return (
			<li>{index+1} .
				<form method="post" onSubmit={this.onFormSubmit}>
					<input type="text" value={this.state.term} onChange={this.onInputEdit}/>
					<input type="submit" value="Save" />
				</form>
			</li>)
		}
		return(
			<li>{index+1}. {term} 
				<DeleteItem index={index} />
				<EditItem index={index} />
			</li>
			)

	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({editToDo}, dispatch);
}
export default connect(null, mapDispatchToProps)(ViewListItem);