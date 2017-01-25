import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToDo} from '../actions/index';

class AddList extends Component{
	constructor(props){
			super(props);
			this.onSubmitToDo=this.onSubmitToDo.bind(this);
			this.onInputChange=this.onInputChange.bind(this)
			this.state={term:""}
		}
		onSubmitToDo(event){
			event.preventDefault();
			this.props.addToDo(this.state.term);
			this.setState({term:""})
		}
		onInputChange(event){
			this.setState({term:event.target.value});
		}
	render(){

		return(
			<form method="POST" onSubmit={this.onSubmitToDo}>
				<input type="text" value={this.state.term} onChange={this.onInputChange}/>
				<input type="submit" value="Add"/>
			</form>
		)
	}
	
}
function mapDispathToProps(dispatch){
	return bindActionCreators({addToDo}, dispatch);
}
export default connect(null, mapDispathToProps)(AddList)