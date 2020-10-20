import { TOGGLE_STATE } from "../constants/action-types";

const initialState = {

}

function rootReducer(state = initialState, action) {
	if (action.type == TOGGLE_STATE) {

		switch (newKey) {
			case "dropDown":
				return {
					...state,
					dropDown: newBool
				}
				break;
		}
	}
	return state;
}

export default rootReducer;