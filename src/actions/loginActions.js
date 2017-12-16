import axios from '../axios-config';

export function execLogin(info){
	// const url = 'http://localhost:3000'+'/auth/login';
	// console.log(url);

	return function(dispatch) {
		dispatch({type: "EXEC_LOGIN", payload: {}})
		axios.post('/auth/login', {"info": info} )
			.then((response) => {
				// dispatch({type: "EXEC_LOGIN_FULFILLED", payload: response.data})
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("posId", response.data.user.id);
				localStorage.setItem("posName", response.data.user.name);
				localStorage.setItem("posDeliveryPrice", response.data.user.deliveryPrice);
				localStorage.setItem("posImage", response.data.user.image);

				window.location.assign('/');
			})
			.catch((err) => {
				// console.log(err.response.status);
				dispatch({type: "EXEC_LOGIN_REJECTED", payload: {}})
			})
	}
}