import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import 'bulma/css/bulma.css';

import Navbar from './Navbar';
import HomePage from './HomePage';
import Pedidos from './Pedidos';
import Profile from './Profile';

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

        <section className="section">
          {/* MAIN SECTION */}
          <div className="container">
          
              <Switch>
                {/*<Route path="/pos/home" component={HomePage} />*/}
                <Route path="/pos/pedidos" component={Pedidos} />
                <Route path="/pos/profile" component={Profile} />
                <Route path="/pos">
                  <Redirect to="/pos/profile" />
                </Route>
              </Switch>
         
          </div>
            
          

        </section>

      </div>

    );
  }
}
