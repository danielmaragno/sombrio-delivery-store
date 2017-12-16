import React from 'react';
import { connect } from 'react-redux';
import CurrencyInput from 'react-currency-input';

import { callPos } from '../actions/posActions';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.props.dispatch(callPos());
  }

  render() {
    return (
     	
    	<div> 	
	     	<h1 className="title">Profile</h1>
			
			<div className="columns">
				
				<div className="column is-5">
					<figure className="image is-4by3">
						<img src={localStorage.getItem('posImage')} alt="" />
					</figure>
				</div>
			
				<div className="column is-6 is-offset-1">
					<form action="">
		
						{/*NAME*/}
						<div className="field">
							<label className="label">Nome</label>
							<div className="control has-icons has-icons-left">
								<input type="text" className="input" ref="name" value={this.props.pos.name}/>
								<span className="icon is-left">
									<i class="fa fa-shopping-basket" aria-hidden="true"></i>
								</span>
							</div>
						</div>

						{/*CNPJ*/}
						<div className="field">
							<label className="label">CNPJ</label>
							<div className="control has-icons has-icons-left">
								<input type="text" className="input is-danger" ref="cnpj" value={this.props.pos.cnpj}/>
								<span className="icon is-left">
									<i class="fa fa-id-card" aria-hidden="true"></i>
								</span>
							</div>
						</div>

						{/*ADDRESS*/}
						<div className="field">
							<label className="label">Endereço</label>
							<div className="control has-icons has-icons-left">
								<input type="text" className="input" ref="address" value={this.props.pos.address}/>
								<span className="icon is-left">
									<i class="fa fa-envelope" aria-hidden="true"></i>
								</span>
							</div>
						</div>

						{/*DELIVERY PRICE*/}
						<div className="field">
							<label className="label">Taxa de Entrega</label>
							<div className="control has-icons has-icons-left">
								<CurrencyInput className="input" ref="deliveryPrice" value={this.props.pos.deliveryPrice}/>
								<span className="icon is-left">R$</span>
							</div>
						</div>						

						{/*Submit*/}
						<div className="field">
	                      <div className="control">
	                        <button
	                          type="submit"
	                          className={`button is-block is-info ${this.props.pos.isLoading ? 'is-loading' : ''}`} 
	                          onClick={(e) => this.execLogin(e)}
	                        >Editar</button>
	                      </div>
	                    </div>


					</form>
				</div>

			</div>

		</div>
	
    );
  }
}

const mapStateToProps = state => {
  return {
    pos: state.pos
  }
};

export default connect(
  mapStateToProps,
  null
)(Profile)