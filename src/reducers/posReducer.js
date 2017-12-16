const initialState = {
	'id': null,
	'name': null,
	'cnpj': null,
	'address': null,
	'timeStamp': null,
	'deliveryPrice': null,
	'image': null,

	'isLoading': false
}

export default function reducer(state=initialState, action){

	switch(action.type){
		case 'FETCH_POS': {
			return {
				...state,
				id: action.payload.id,
				name: action.payload.name,
				cnpj: action.payload.cnpj,
				address: action.payload.address,
				timeStamp: action.payload.timeStamp,
				deliveryPrice: action.payload.deliveryPrice / 100,
				image: action.payload.image
			}
		}
	}

	return state;
}