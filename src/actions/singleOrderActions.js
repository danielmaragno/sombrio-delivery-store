import axios from '../axios-config';


export function fetchSingleOrder(id) {
	return (dispatch) => {
		axios.get('/order/'+id)
			.then((response) => {
				dispatch({type: 'FETCH_SINGLE_ORDER', payload: {order: response.data}})
			})
	}
}