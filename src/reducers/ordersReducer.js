let d = new Date();
d.setHours(d.getHours() - 3);

const initialState = {
	timeStamp: d.getTime(),
	orders: []
}

export default function reducer(state=initialState, action) {

	switch(action.type){

		case 'FETCH_ORDERS': {
			return {
				...state,
				orders: action.payload.orders.concat(state.orders),
				timeStamp: new Date(action.payload.orders[0].timeStamp).getTime()
			}
		}

	}

	return state;
}