import axios from '../axios-config';


export function fetchOrders(timeStamp) {
	return (dispatch) => {
		axios.get('/order?timeStamp='+timeStamp)
			.then((response)=>{
				if(response.data.length){
					dispatch({type: 'FETCH_ORDERS', payload: {orders: response.data}})
				}
			})
	}
}