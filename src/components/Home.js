import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import 'bulma/css/bulma.css';

import Navbar from './Navbar';
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
        <Navbar />

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
