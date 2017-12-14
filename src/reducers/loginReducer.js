const initialState = {
	token: null,
	isLoading: false,
	errorFlag: false
}

export default function reducer(state=initialState, action) {

	switch (action.type){
		case "EXEC_LOGIN": {
			return {...state, isLoading: true}
		}
		case "EXEC_LOGIN_REJECTED": {
			return {...state, isLoading: false, errorFlag: true}
		}
		case "EXEC_LOGIN_FULFILLED": {
			return {...state, isLoading: false, token: action.payload.token}
		}
	}

	return state;

}