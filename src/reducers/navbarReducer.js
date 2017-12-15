const initialState = {
	navbarMenuActive: false
}


export default function reducer(state=initialState, action){

	switch(action.type){
		case 'TOGGLE_NAVBAR_MENU': {
			const navbarMenuActive = state.navbarMenuActive ? false : true;
			return {...state, navbarMenuActive: navbarMenuActive }
		}
		case 'LOGOUT_OK': {
			localStorage.removeItem("token");
			localStorage.removeItem("posId");
			localStorage.removeItem("posName");
			localStorage.removeItem("posDeliveryPrice");
			localStorage.removeItem("posImage");
			window.location.assign('/');
			return state;
		}
		case 'LOGOUT_ERROR': {
			return state;
		}
	}

	return state;

}