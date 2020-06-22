import axios from 'axios'
import {act} from 'react-test-renderer'

/**
 * ACTION TYPES
 */
const GET_ALL_ORDERS_USER = 'GET_ALL_ORDERS_USER'
const GET_ALL_ORDERS_ADMIN = 'GET_ALL_ORDERS_ADMIN'
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER_USER'

/**
 * INITIAL STATE
 */
const initialState = {
  orders: [],
  singleOrder: {}
}

/**
 * ACTION CREATORS
 */
const getAllOrders = allOrders => {
  return {
    type: GET_ALL_ORDERS,
    allOrders
  }
}

const getSingleOrder = singleOrder => {
  return {
    type: GET_SINGLE_ORDER_USER,
    singleOrder
  }
}

/**
 * THUNK CREATORS
 */

export const fetchSingleOrder = (userId, orderId) => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/orders/${orderId}`)
    dispatch(getSingleOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchAllOrdersUser = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/orders`)
    dispatch(getAllOrders(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchAllOrdersAdmin = () => async dispatch => {
  try {
    const res = await axios.get(`/api/orders`)
    dispatch(getAllOrder(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function OrdersReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_All_ORDER':
      return {...state, orders: action.allOrders}

    case 'GET_SINGLE_ORDER_USER':
      return {...state, singleOrder: action.singleOrder}

    default:
      return state
  }
}
