export const ADD_TODO='ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const EDIT_ITEM_MODE = 'EDIT_ITEM_MODE'
export function addToDo(item){
	
 return({
 	type: ADD_TODO,
 	payload:item
 })
}

export function deleteToDo(index){
	return({
		type:DELETE_TODO,
		payload:index
	})
}

export function editToDo(term,index){
	return({
		type:EDIT_TODO,
		payload:{term,index}
	})
}
export function editItemMode(index){
	return({
		type:EDIT_ITEM_MODE,
		payload:index
	})
}