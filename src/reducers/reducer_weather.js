import {FETCH_WEATHER} from '../actions/index';
export default function(state = [], action){
	switch(action.type){
		case FETCH_WEATHER :
		//We can also use state.concat([action.payload.data]) as it dont mutate state
			return [action.payload.data, ...state]
	}
	return state
}