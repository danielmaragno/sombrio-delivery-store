import { combineReducers } from 'redux';

import login from './loginReducer';
import navbar from './navbarReducer';
import pos from './posReducer';
import orders from './ordersReducer';

export default combineReducers({
	login,
	navbar,
	pos,
	orders
});