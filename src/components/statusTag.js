import React from 'react';

const orderStatusMap = {
    requested: 'Pendente',
    confirmed: 'Confirmado',
    canceled: 'Cancelado',
    on_road: 'Saiu para Entrega',
    done: 'Terminado'
}


export default ({status}) => {
	switch(status){
		case 'requested':
			return (<span className="tag is-warning">{orderStatusMap[status]}</span>);
		case 'confirmed':
			return (<span className="tag is-success">{orderStatusMap[status]}</span>);
		case 'canceled':
			return (<span className="tag is-danger">{orderStatusMap[status]}</span>);
		case 'on_road':
			return (<span className="tag is-primary">{orderStatusMap[status]}</span>);
		case 'done':
			return (<span className="tag is-black">{orderStatusMap[status]}</span>);
		default:
			return (<span className="tag"></span>);
	}	
}