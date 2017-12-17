import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';


export default class Pedidos extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>

    		
    		<div className="columns">

    			<div className="column is-3">
    				<nav className="panel">
    					<p className="panel-heading">
    						Pedidos
    					</p>

    					<Link 
    						to="/pos/pedidos/correntes" 
    						className={`panel-block ${this.props.location.pathname === '/pos/pedidos/correntes' ? 'is-active' : ''}`}
    					>
							Pedidos correntes
    					</Link>

    				</nav>
    			</div>
				
				<div className="column is-9">
					
					<Switch>
						<Route path="/pos/pedidos/correntes"/>
						<Route path="/pos/pedidos">
		                  <Redirect to="/pos/pedidos/correntes" />
		                </Route>
					</Switch>

				</div>

			</div>


    	</div>
    );
  }
}
