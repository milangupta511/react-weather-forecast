export const ADD_TODO='ADD_TODO';

export function addToDo(item){
	
 return({
 	type: ADD_TODO,
 	payload:item
 })
}