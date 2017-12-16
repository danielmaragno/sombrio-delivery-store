import { combineReducers } from 'redux';

import login from './loginReducer';
import navbar from './navbarReducer';
import pos from './posReducer';

export default combineReducers({
	login,
	navbar,
	pos
});