import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	), 
	document.getElementById('root')
);

// Register
registerServiceWorker();


// Environments
process.env.API_URL='http://localhost:3000';