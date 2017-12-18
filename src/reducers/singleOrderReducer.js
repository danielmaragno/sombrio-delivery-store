const initialState = {
	order: {},
	isLoading: false
}

export default function reducer(state=initialState, action) {

	switch(action.type){
		case 'FETCH_SINGLE_ORDER': {
			return {...state, order: payload.order}
		}

		case 'LOADING_ORDER_UPDATE_BUTTON': {
			return {...state, isLoading: true}
		}

		case 'UNLOADING_ORDER_UPDATE_BUTTON': {
			return {...state, isLoading: false}
		}

	}

	return state;
}