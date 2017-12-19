import React from 'react';
import { connect } from 'react-redux';
import CurrencyInput from 'react-currency-input';
import StatusTag from'./statusTag';

import { fetchSingleOrder } from '../actions/singleOrderActions';

const orderStatusMap = {
    requested: 'Pendente',
    confirmed: 'Confirmado',
    canceled: 'Cancelado',
    on_road: 'Saiu para Entrega',
    done: 'Terminado'
}


class Pedido extends React.Component {
  
  constructor(props) {
    super(props);

    const id = this.props.match.params.id;
    this.props.dispatch(fetchSingleOrder(id))
  }

  render() {

  	let order = this.props.singleOrder.order;

    return (
    	<div>
			
			<p className="title is-3"><span className='is-light'>Pedido</span> {this.props.singleOrder.order._id.slice(-4)}</p>
      		
      		<div className="columns">
				
				{/* Lado Formulário */}
				<div className="column is-7">
					
					<div className="columns">
						<div className="column">
							<div className="field">
								<label className="label">Cliente</label>
								<div className="control has-icons-left">
									<span className="input">{order.client_name}</span>
									<span className="icon is-small is-left">
								      <i className="fa fa-user"></i>
								    </span>
								</div>
							</div>
						</div>
						
						<div className="column">
							<div className="field">
								<label className="label">Forma de Pagamento</label>
								<div className="control has-icons-left">
									<span className="input">{order.formaPagamento}</span>
									<span className="icon is-small is-left">
								      <i className="fa fa-credit-card-alt"></i>
								    </span>
								</div>
							</div>
						</div>
					</div>

					<div className="columns">
						<div className="column">
							<div className="field">
								<label className="label">Endereço</label>
								<div className="control has-icons-left">
									<span className="input">{order.client_address}</span>
									<span className="icon is-small is-left">
								      <i className="fa fa-envelope"></i>
								    </span>
								</div>
							</div>
						</div>
					</div>

					<div className="columns">
						<div className="column">
							<div className="field">
								<label className="label">Observação</label>
								<div className="control">
									<textarea className="input" style={{height: "30%"}} value={order.observacao} />
								</div>
							</div>
						</div>
					</div>

					<div className="columns">
					<div className="column">
							<div className="field">
								<label className="label">Status</label>
								<div className="control has-icons-left">
									<StatusTag status={order.status} />
								</div>
							</div>
						</div>
						<div className="column">
							<div className="field">
								<label className="label">Preço da Entrega</label>
								<div className="control has-icons-left">
									<CurrencyInput className="input" value={order.deliveryPrice / 100} />
									<span className="icon is-small is-left">R$</span>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="field">
								<label className="label">TOTAL</label>
								<div className="control has-icons-left">
									<CurrencyInput className="input is-active" value={order.total_price / 100} />
									<span className="icon is-small is-left">R$</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				

      		</div>

    	</div>

    );
  }
}

const mapStateToProps = state => {
  return {
        singleOrder: state.singleOrder
  }
};

export default connect(
  mapStateToProps,
  null
)(Pedido)