import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

localStorage.setItem("token", "any");
// localStorage.removeItem("token");

class App extends Component {
  render() {
    return (
		<Switch>
			<Route path='/pos' component={Home} />
			<Route path='/login' component={Login} />
			<Route>
				<Redirect to="/pos" />
			</Route>
		</Switch>
    );
  }
}

export default App;
