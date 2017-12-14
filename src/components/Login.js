import React from 'react';
import { connect } from 'react-redux';

import 'bulma/css/bulma.css';

import { execLogin } from '../actions/loginActions'


class Login extends React.Component {
  
  constructor(props) {
    // init 
    const token = localStorage.getItem('token');
    if(token) window.location.assign('/');

    super(props);

    console.log(this.props);
  }

  execLogin() {
    const info = {
      scope: 'pos',
      id: this.refs['id'].value,
      'passwd': this.refs['passwd'].value,
    }
    console.log(info);
    this.props.dispatch(execLogin(info));
  }

  render() {
    return (
      <div>
        <section className="hero is-light is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title ">Login</h3>
                <p className="subtitle">Please login to proceed.</p>
                <div className="box">
                  <figure className="avatar">
                    <img src="https://placehold.it/128x128" />
                  </figure>
                  <form>
                    <div className="field">
                      <div className="control">
                        <input className="input is-large" type="email" placeholder="Your Email" ref="id"/>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input className="input is-large" type="password" placeholder="Your Password" ref="passwd"/>
                      </div>
                    </div>
                    <a className="button is-block is-info is-large" onClick={(e) => this.execLogin(e)}>Login</a>
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