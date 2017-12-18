import axios from '../axios-config';


export function fetchOrders(timeStamp) {
	return (dispatch) => {
		axios.get('/order?timeStamp='+timeStamp)
			.then((response)=>{
				if(response.data.length){
					dispatch({type: 'FETCH_ORDERS', payload: {orders: response.data}})
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export function fetchPastOrders(timeStamp) {
	return (dispatch) => {
		axios.get('/order?date='+timeStamp)
			.then((response)=>{
				dispatch({type: 'FETCH_PAST_ORDERS', payload: {orders: response.data}})
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export function fetchTodayOrders() {
	return {
		type: 'FETCH_TODAY_ORDERS'
	}
}