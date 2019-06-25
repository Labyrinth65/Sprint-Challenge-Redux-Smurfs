/*
  Be sure to import in all of the action types from `../actions`
*/
import {
	FETCHING_START,
	FETCHING_SUCCESS,
	FETCHING_FAILURE,
	CREATE_START,
	CREATE_SUCCESS,
	CREATE_FAILURE,
	DELETE_START,
	DELETE_SUCCESS,
	DELETE_FAILURE,
	UPDATE_START,
	UPDATE_SUCCESS,
	UPDATE_FAILURE
} from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
	console.log(action);
	console.log(action.payload);
	switch (action.type) {
		case FETCHING_START:
			return {
				...state,
				fetchingSmurfs: true,
				error: null
			};
		case FETCHING_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				smurfs: action.payload,
				error: null
			};
		case FETCHING_FAILURE:
			return {
				...state,
				fetchingSmurfs: false,
				error: action.payload
			};
		case CREATE_START:
			return {
				...state,
				addingSmurfs: true,
				error: null
			};
		case CREATE_SUCCESS:
			return {
				...state,
				addingSmurfs: false,
				smurfs: action.payload,
				error: null
			};
		case CREATE_FAILURE:
			return {
				...state,
				addingSmurfs: false,
				error: action.payload
			};
		case DELETE_START:
			return {
				...state,
				deletingSmurfs: true,
				error: null
			};
		case DELETE_SUCCESS:
			return {
				...state,
				deletingSmurfs: false,
				smurfs: action.payload,
				error: null
			};
		case DELETE_FAILURE:
			return {
				...state,
				deletingSmurfs: false,
				error: action.payload
			};
		case UPDATE_START:
			return {
				...state,
				updatingSmurfs: true,
				error: null
			};
		case UPDATE_SUCCESS:
			return {
				...state,
				updatingSmurfs: false,
				smurfs: action.payload,
				error: null
			};
		case UPDATE_FAILURE:
			return {
				...state,
				updatingSmurfs: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default smurfReducer;
