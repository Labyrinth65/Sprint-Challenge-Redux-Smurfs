import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_FAILURE = "CREATE_FAILURE";
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";
export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";
export const TOGGLE_UPDATE = "TOGGLE_UPDATE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = URL => dispatch => {
	dispatch({ type: FETCHING_START });
	axios
		.get(URL)
		.then(res => {
			console.log(res);
			dispatch({ type: FETCHING_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: FETCHING_FAILURE, payload: err.message }));
};

export const addSmurf = (URL, newSmurf) => dispatch => {
	dispatch({ type: CREATE_START });
	axios
		.post(URL, newSmurf)
		.then(res => {
			console.log(res);
			dispatch({ type: CREATE_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.dir(err);
			dispatch({ type: CREATE_FAILURE, payload: err.response.data.Error });
		});
};

export const deleteSmurf = URL => dispatch => {
	dispatch({ type: DELETE_START });
	axios
		.delete(URL)
		.then(res => {
			console.log(res);
			dispatch({ type: DELETE_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: DELETE_FAILURE, payload: err.message }));
};

export const updateSmurf = (URL, updatedSmurf) => dispatch => {
	dispatch({ type: UPDATE_START });
	axios
		.put(URL, updatedSmurf)
		.then(res => {
			console.log(res);
			dispatch({ type: UPDATE_SUCCESS, payload: res.data });
		})
		.catch(err => dispatch({ type: UPDATE_FAILURE, payload: err.message }));
};
