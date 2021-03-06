import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bulma/css/bulma.css';

import Navbar from './Navbar';
import HomePage from './HomePage';
import Pedidos from './Pedidos';
import Pedido from './Pedido';
import Profile from './Profile';

import { callPos } from '../actions/posActions';
import { fetchOrders } from '../actions/ordersActions';

class Home extends React.Component {
  
  constructor(props) {
    // init 
    const token = localStorage.getItem('token');
    if(!token) window.location.assign('/login');

    super(props);

    // fetch POS
    this.props.dispatch(callPos());
    
    // fetch ORDERS
    this.props.dispatch(fetchOrders(this.props.orders.timeStamp));
    setInterval(
      () => this.props.dispatch(fetchOrders(this.props.orders.timeStamp)), 
      8000
    );

  }

  render() {
    return (
      <div>
      
        {/* NAV */}
        <Navbar />

        <section className="hero section is-fullheight is-light">
          {/* MAIN SECTION */}
          <div className="container">
          
              <Switch>
                {/*<Route path="/pos/home" component={HomePage} />*/}
                <Route path="/pos/profile" component={Profile} />
                <Route exact path="/pos/pedidos" component={Pedidos} />
                <Route path="/pos/pedidos/:id" component={Pedido} />
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

const mapStateToProps = state => {
  return {
    pos: state.pos,
    orders: state.orders
  }
};

export default connect(
  mapStateToProps,
  null
)(Home)