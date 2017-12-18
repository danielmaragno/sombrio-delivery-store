let d = new Date();
d.setHours(0,0,0,0);

const initialState = {
	timeStamp: d.getTime(),
	todayOrders: [],
	pastOrders: [],
	orderFlag: 'todayOrders'
}

export default function reducer(state=initialState, action) {

	switch(action.type){

		case 'FETCH_ORDERS': {
			return {
				...state,
				todayOrders: action.payload.orders.concat(state.todayOrders),
				timeStamp: new Date(action.payload.orders[0].timeStamp).getTime()
			}
		}

		case 'FETCH_TODAY_ORDERS': {
			return {
				...state,
				orderFlag: 'todayOrders'
			}
		}

		case 'FETCH_PAST_ORDERS': {
			return {
				...state,
				pastOrders: action.payload.orders,
				orderFlag: 'pastOrders'
			}
		}

	}

	return state;
}