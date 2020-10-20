import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const initialState = {
	cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CART_ADD_ITEM:
			const existItem = state.cartItems.find(
				item => item.product === payload.product
			);

			const cartItems = existItem
				? state.cartItems.map(item =>
						item.product === existItem.product ? payload : item
				  )
				: [...state.cartItems, payload];

			return { ...state, cartItems };
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.product !== payload),
			};

		default:
			return state;
	}
};
