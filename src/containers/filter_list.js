import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterToDo} from '../actions/index';
import ViewList from '../containers/view_list';
import {Tabs,Tab,Badge} from 'react-mdl';

class FilterList extends Component{
	constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
        this.onTabChange=this.onTabChange.bind(this)
        this.filterList = this.filterList.bind(this)
        this.calcFilterCount =this.calcFilterCount.bind(this)

    }
    onTabChange(tabId){
    	this.setState({ activeTab: tabId })
    }
    filterList(activeTab, list){
        switch(activeTab){
            case 0:
                return list
            case 1:
                return list.filter((item) => !item.isCompleted)
            case 2:
                return list.filter((item) => item.isCompleted)
        }
        return false
    }
    calcFilterCount(list){
        return {
            all: () => list.length,
            pending: () => list.filter((item) => !item.isCompleted).length,
            completed: () => list.filter((item) => item.isCompleted).length
        }
    }
    render() {
        var filterListArr = this.filterList(this.state.activeTab, this.props.toDoList);
        var filterCount = this.calcFilterCount(this.props.toDoList)

        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={this.onTabChange} ripple>
                    <Tab><Badge text={filterCount.all()}>All</Badge></Tab>
                    <Tab><Badge text={filterCount.pending()}>Pending</Badge></Tab>
                    <Tab><Badge text={filterCount.completed()}>Completed</Badge></Tab>
                </Tabs>
                <section>
                    <div className="content"><ViewList filterArr={filterListArr}/></div>
                </section>
            </div>    
        );
    }
}

function mapStateToProps(state){
	return {toDoList:state.toDoList}
}
export default connect(mapStateToProps)(FilterList)