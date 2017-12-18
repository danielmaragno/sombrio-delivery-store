import React from 'react';

export default class Pedido extends React.Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>{this.props.match.params.id}</div>
    );
  }
}
