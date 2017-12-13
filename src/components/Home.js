import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import 'bulma/css/bulma.css';

import HomePage from './HomePage';
import Pedidos from './Pedidos';

export default class Home extends React.Component {
  
  constructor(props) {
    // init 
    const token = localStorage.getItem('token');
    if(!token) window.location.assign('/login');

    super(props);
  }

  render() {
    return (
      <div>
        {/* NAV */}
        <nav className="navbar is-tab has-shadow">
          <div className="navbar-menu">
            <Link to="/pos/home" className="navbar-item">Home</Link>
            <Link to="/pos/pedidos" className="navbar-item">Pedidos</Link>
          </div>
        </nav>
      

        {/* MAIN SECTION */}
        <section className="section">
          <div className="container">
            <Switch>
              <Route path="/pos/home" component={HomePage} />
              <Route path="/pos/pedidos" component={Pedidos} />
              <Route path="/pos">
                <Redirect to="/pos/home" />
              </Route>
            </Switch>
          </div>
        </section>

      </div>


    );
  }
}
