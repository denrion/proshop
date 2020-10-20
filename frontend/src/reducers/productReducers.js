import {
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

const productListInitialState = {
	products: [],
	loading: false,
	error: null,
};

export const productListReducer = (
	state = productListInitialState,
	{ type, payload }
) => {
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

const productDetailsInitialState = {
	product: { reviews: [] },
	loading: false,
	error: null,
};

export const productDetailsReducer = (
	state = productDetailsInitialState,
	{ type, payload }
) => {
	switch (type) {
		case PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true };
		case PRODUCT_DETAILS_SUCCESS:
			return { ...state, loading: false, product: payload };
		case PRODUCT_DETAILS_FAIL:
			return { ...state, loading: false, error: payload };
		default:
			return state;
	}
};
