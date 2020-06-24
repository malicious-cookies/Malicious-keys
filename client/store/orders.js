import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER_ORDERS = 'GET_USER_ORDERS'
const CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'

/**
 * INITIAL STATE
 */
const defaultOrders = []

/**
 * ACTION CREATORS
 */
const getUserOrders = orders => ({type: GET_USER_ORDERS, orders})
const createNewOrder = order => ({type: CREATE_NEW_ORDER, order})
/**
 * THUNK CREATORS
 */

export const fetchOrders = userId => async dispatch => {
  try {
    const orders = await axios.get(`/api/users/${userId}/orders`)
    dispatch(getUserOrders(orders.data))
  } catch (err) {
    console.error(err)
  }
}

export const makeNewOrder = (userId, order) => async dispatch => {
  try {
    let {data} = await axios.post(`/api/users/${userId}/orders`, order)
    dispatch(createNewOrder(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultOrders, action) {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      return [...state, action.order]

    case GET_USER_ORDERS:
      return action.orders
    default:
      return state
  }
}
