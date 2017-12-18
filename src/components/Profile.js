import React from 'react';
import { connect } from 'react-redux';
import CurrencyInput from 'react-currency-input';

import { callPos, imageChange, updateDeliveryPrice } from '../actions/posActions';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)

    // this.props.dispatch(callPos())
  }

  handlImageChange() {
  	const imageURL = this.refs.image.value;
  	console.log(imageURL);

  	// var reader = new FileReader();

  	// reader.onloadend = function(event) {
  	// 	this.props.dispatch(imageChange(event.target.result));	
  	// }

  	// reader.readAsDataURL(imageURL);
	
	}

  handleUpdate() {
  	const deliveryPrice = this.refs.deliveryPrice.state.value * 100;
  	console.log(deliveryPrice);
  	this.props.dispatch(updateDeliveryPrice(deliveryPrice));
  }

  submitFalse(event) {
    event.preventDefault();
  }

  render() {
    return (
     	
    	<div> 	
	     	<h1 className="title">Profile</h1>
			
			<div className="columns">
				
				<div className="column is-5">
					<figure className="image is-4by3">
						<img src={this.props.pos.image} style={{'borderRadius': '25px'}} />
					</figure>
				</div>
			
				<div className="column is-6 is-offset-1">
					<form onSubmit={(e) => this.submitFalse(e)}>
		
						{/*NAME*/}
						<div className="field">
							<label className="label">Nome Fantasia</label>
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
								<input type="text" className="input" ref="cnpj" value={this.props.pos.cnpj}/>
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
								<CurrencyInput className="input is-success" ref="deliveryPrice" value={this.props.pos.deliveryPrice}/>
								<span className="icon is-left">R$</span>
							</div>
						</div>
						
						{/*IMAGE*/}
						{/*
						<div className="field">
							<div className="file">
							  <label className="file-label">
							    <input className="file-input" type="file" ref="image" onChange={(e)=>this.handlImageChange(e)}/>
							    <span className="file-cta">
							      <span className="file-icon">
							        <i className="fa fa-upload"></i>
							      </span>
							      <span className="file-label">
							        Escolha uma nova imagem…
							      </span>
							    </span>
							  </label>
							</div>					
						</div>
						*/}

						{/*Submit*/}
						<div className="field">
	                      <div className="control">
	                        <button
	                          type="submit"
	                          className={`button is-block is-info ${this.props.pos.isLoading ? 'is-loading' : ''}`} 
	                          onClick={(e) => this.handleUpdate(e)}
	                        >Update Taxa de Entrega</button>
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