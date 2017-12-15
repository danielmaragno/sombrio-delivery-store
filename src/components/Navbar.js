import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleNavbarMenu, logout } from '../actions/navbarActions';
;
class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  toggleNavbarMenu() {
  	this.props.dispatch(toggleNavbarMenu());
  }

  logout(){
  	this.props.dispatch(logout());
  }

  render() {
    return (
      <nav className="navbar is-tab has-shadow">
  	    <div className="container">
          
          <div className="navbar-brand">
            <div className="navbar-item">
              {localStorage.getItem("posName")}
            </div>

            <div className="navbar-burger" onClick={(e)=> this.toggleNavbarMenu(e)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`navbar-menu ${this.props.navbar.navbarMenuActive ? 'is-active' : ''}`}>
            {/*
            <div className="navbar-start">
            </div>
            */}
            <div className="navbar-end">
              <Link to="/pos/home" className="navbar-item">Home</Link>
              <Link to="/pos/pedidos" className="navbar-item">Pedidos</Link>
              <a href="#" className="navbar-item" onClick={(e)=>this.logout()}>Logout</a>
            </div>
          </div>

        </div>

	    </nav>
    );
  }
}


const mapStateToProps = state => {
  return {
    navbar: state.navbar
  }
}

export default connect(
  mapStateToProps,
  null
)(Navbar)