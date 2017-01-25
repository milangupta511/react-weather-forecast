import { combineReducers } from 'redux';
import AddToDoReducer from './reducer_add_todo';
const rootReducer = combineReducers({
	toDoList:AddToDoReducer
});

export default rootReducer;
