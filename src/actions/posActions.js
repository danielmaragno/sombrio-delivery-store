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