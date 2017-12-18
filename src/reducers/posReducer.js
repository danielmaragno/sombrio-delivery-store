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
		case 'IMAGE_CHANGE': {
			return {
				...state,
				image: action.payload.image
			}
		}
		case 'UPDATE_POS': {
			return {
				...state,
				deliveryPrice: action.payload.deliveryPrice / 100
			}
		}
		case 'LOADING_POS_UPDATE_BUTTON': {
			return {...state, isLoading: true}
		}
		case 'UNLOADING_POS_UPDATE_BUTTON': {
			return {...state, isLoading: false}
		}
	}

	return state;
}