import React from 'react';

import 'bulma/css/bulma.css';

export default class Login extends React.Component {
  
  constructor(props) {
    // init 
    const token = localStorage.getItem('token');
    if(token) window.location.assign('/');

    super(props);
  }

  render() {
    return (
      <div>Login Page</div>
    );
  }
}
