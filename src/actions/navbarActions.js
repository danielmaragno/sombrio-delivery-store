import axios from '../axios-config';


export function toggleNavbarMenu() {
	return {
		type: 'TOGGLE_NAVBAR_MENU'
	}
}

export function logout() {
	return function(dispatch){
		axios.get('/auth/logout')
			.then((response)=>{
				dispatch({type: "LOGOUT_OK"});
			})
			.catch((err)=>{
				dispatch({type: "LOGOUT_ERROR"})
			})
	}
}