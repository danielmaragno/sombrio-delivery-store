import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Time from 'react-time-format'


const orderStatusMap = {
    requested: 'Pendente',
    confirmed: 'Confirmado',
    canceled: 'Cancelado',
    on_road: 'Saiu para Entrega',
    done: 'Terminado'
}

class Pedidos extends React.Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    return (
    	<div>

    		
    		<div className="columns">
                
                {/*
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
                */}
				
				<div className="column is-12">
                    <div className="box content">
                        <table className="table is-fullwidth">
                            <thead>
                                <tr>
                                    <th>Pedido</th>
                                    <th>Data/Hora</th>
                                    <th>Cliente</th>
                                    <th>Itens</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.orders.orders.map((order)=>{
                                        return(
                                           <tr className="is-success">
                                               <td>{order._id}</td>
                                               <td><Time value={order.timeStamp} format="HH:mm" /></td>
                                               <td>{order.client_name}</td>
                                               <td>{order.items.length}</td>
                                               <td>{order.status === 'requested' ? '1' : ''}</td>
                                           </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
				</div>

			</div>


    	</div>
    );
  }
}


const mapStateToProps = state => {
  return {
        orders: state.orders
  }
};

export default connect(
  mapStateToProps,
  null
)(Pedidos)