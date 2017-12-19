import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Time from 'react-time-format'
import StatusTag from'./statusTag';

import { fetchPastOrders, fetchTodayOrders } from '../actions/ordersActions';

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

  handleOrderClick(id) {
    window.location.assign('/pos/pedidos/'+id);
  }

  handleCalendarChange() {
    const date = this.refs.date.value;
    const today = this.inputDateFormat(new Date());
    console.log(date);

    if(date == today)
        this.props.dispatch(fetchTodayOrders());
    else {
        let d = new Date(date);
        d.setDate(d.getDate()+1);
        this.props.dispatch(fetchPastOrders(d.getTime()));
    }
  }

  inputDateFormat(d) {
    const month = ("0"+(d.getMonth()+1)).slice(-2);
    const date =  ("0"+d.getDate()).slice(-2);
    return d.getFullYear()+"-"+month+"-"+date;
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
                        
                        {/*
                        <a 
                            to="/pos/pedidos/correntes" 
                            className={`panel-block ${this.props.orders.orderFlag === 'todayOrders' ? 'is-active' : ''}`}
                        >
                            Pedidos de Hoje
                        </a>
                        */}
                        
                        <div 
                            className={`panel-block is-active`}
                        >
                            <input
                                type="date" 
                                className="input" 
                                ref="date"
                                defaultValue={this.inputDateFormat(new Date())}
                                onChange={(e) => this.handleCalendarChange(e)} 
                            />
                        </div>
                        <div 
                            className={`panel-block`}
                        >
                            Total: {this.props.orders[this.props.orders.orderFlag].length}
                        </div>

                    </nav>
                </div>
                
				
				<div className="column is-9">
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
                                    this.props.orders[this.props.orders.orderFlag].map((order)=>{
                                        return(
                                           <tr onClick={(e) => this.handleOrderClick(order._id)} style={{cursor: 'pointer'}}>
                                               <td>{order._id.slice(-4)}</td>
                                               <td><Time value={order.timeStamp} format="DD-MM-YYYY / HH:mm" /></td>
                                               <td>{order.client_name}</td>
                                               <td>{order.items.length}</td>
                                               <td><StatusTag status={order.status} /></td>
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