import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: payload };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  { type, payload }
) => {
  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ORDER_DELIVER_REQUEST:
      return { loading: true };
    case ORDER_DELIVER_SUCCESS:
      return { loading: false, success: true };
    case ORDER_DELIVER_FAIL:
      return { loading: false, error: payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (
  state = { orders: [] },
  { type, payload }
) => {
  switch (type) {
    case ORDER_LIST_MY_REQUEST:
      return { loading: true };
    case ORDER_LIST_MY_SUCCESS:
      return { loading: false, orders: payload };
    case ORDER_LIST_MY_FAIL:
      return { loading: false, error: payload };
    case ORDER_LIST_MY_RESET:
      return { orders: [] };
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, { type, payload }) => {
  switch (type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
