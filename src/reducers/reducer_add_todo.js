import {ADD_TODO} from '../actions/index';
export default function(state = [], action){
	switch(action.type){
		case ADD_TODO :
		//We can also use state.concat([action.payload.data]) as it dont mutate state
			return [ ...state, action.payload]
	}
	return state
}