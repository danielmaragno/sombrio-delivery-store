import axios from '../axios-config';

export function callPos() {
	return (dispatch) => {
		axios.get('/pos')
			.then((response)=> {
				dispatch({type: 'FETCH_POS', payload: response.data})
			})
			.catch((err) => {
				console.log(err);
			})
		
	}

}

export function imageChange(image) {
	return {
		type: "IMAGE_CHANGE",
		payload: {
			image: image
		}
	}
}

export function updateDeliveryPrice(deliveryPrice) {

	return (dispatch) => {
		dispatch({type: 'LOADING_POS_UPDATE_BUTTON'});
		axios.put('/pos', {required_data: {deliveryPrice: deliveryPrice}})
			.then((response) => {
				dispatch({
					type: 'UPDATE_POS',
					payload: {
						deliveryPrice: deliveryPrice
					}
				});
				dispatch({type: 'UNLOADING_POS_UPDATE_BUTTON'});
			})
			.catch((err) => {
				console.log(err);
				dispatch({type: 'UNLOADING_POS_UPDATE_BUTTON'});
			})
	}

}