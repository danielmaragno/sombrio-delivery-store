import { combineReducers } from 'redux';

import login from './loginReducer';
import navbar from './navbarReducer';

export default combineReducers({
	login,
	navbar
});