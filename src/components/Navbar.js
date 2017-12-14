import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  

  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<nav className="navbar is-tab has-shadow">
	      <div className="navbar-brand">
	      	<div className="navbar-burger">
	      		<span></span>
	      		<span></span>
	      		<span></span>
	      	</div>
	      </div>

	      <div className="navbar-menu">
	        <Link to="/pos/home" className="navbar-item">Home</Link>
	        <Link to="/pos/pedidos" className="navbar-item">Pedidos</Link>
	      </div>

	    </nav>
    );
  }
}
