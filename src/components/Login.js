import React from 'react';
import { connect } from 'react-redux';

import 'bulma/css/bulma.css';

import { execLogin } from '../actions/loginActions'


class Login extends React.Component {
  
  constructor(props) {
    // init 
    const token = localStorage.getItem('token');
    if(token) window.location.assign('/');

    //setSubmitTrigger
    // document.getElementById("submit")
    //   .addEventListener("keyup", (event)=>{
    //     console.log(event.keyCode);
    //   });

    super(props);
  }

  execLogin() {
    const info = {
      scope: 'pos',
      id: this.refs['id'].value,
      passwd: this.refs['passwd'].value,
    }
    console.log(info);
    this.props.dispatch(execLogin(info));
  }

  submitFalse(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <section className="hero is-dark is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              
              <p className="title is-1">Sombrio Delivery</p>
              <p className="subtitle">Por favor, faça login para prosseguir</p>
              
              <div className="column is-4 is-offset-4">
                
                <div className="box">
                  
                  <p className="title is-3 has-text-grey">Logista</p>

                  <form onSubmit={(e) => this.submitFalse(e)}>
                    <div className="field">
                      <div className="control has-icons-left">
                        <input className="input" type="text" placeholder="id" ref="id"/>
                        <span className="icon is-small is-left">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control has-icons-left">
                        <input className="input" type="password" placeholder="senha" ref="passwd"/>
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button
                          type="submit"
                          className={`button is-block is-info ${this.props.login.isLoading ? 'is-loading' : false}`} 
                          onClick={(e) => this.execLogin(e)}
                        >Login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(
  mapStateToProps,
  null
)(Login)