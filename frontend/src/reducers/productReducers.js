import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

const initialState = {
	products: [],
	loading: false,
	error: null,
};

export const productListReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case PRODUCT_LIST_REQUEST:
			return { ...state, loading: true };
		case PRODUCT_LIST_SUCCESS:
			return { ...state, loading: false, products: payload };
		case PRODUCT_LIST_FAIL:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
};
