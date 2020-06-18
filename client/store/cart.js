import history from '../history'

/**
 * ACTION TYPES
 */

const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

/**
 * INITIAL STATE
 */
let currentCart
if (localStorage.getItem('cart')) {
  currentCart = JSON.parse(localStorage.getItem('cart'))
} else {
  currentCart = []
}

/**
 * ACTION CREATORS
 */
export const getCart = () => ({type: GET_CART})
export const addToCart = keyboard => ({type: ADD_TO_CART, keyboard})
export const removeFromCart = keyboard => ({type: REMOVE_FROM_CART, keyboard})
export const deleteFromCart = keyboard => ({type: DELETE_FROM_CART, keyboard})
export const clearCart = () => ({type: CLEAR_CART})

/**
 * REDUCER
 */

export default function(state = currentCart, action) {
  let keyboards, searchId
  switch (action.type) {
    case GET_CART:
      return state

    case ADD_TO_CART:
      searchId = state.findIndex(keyboard => keyboard.id === action.keyboard.id)
      // if its there add 1
      if (searchId > -1) {
        keyboards = state.slice()
        keyboards[searchId].quantity += 1
      } else {
        keyboards = state.concat([
          {
            id: action.keyboard.id,
            keyboard: action.keyboard,
            quantity: 1
          }
        ])
      }
      localStorage.setItem('cart', JSON.stringify(keyboards))
      return keyboards

    case REMOVE_FROM_CART:
      searchId = state.findIndex(el => el.id === action.keyboard.id)
      if (searchId > -1) {
        // if its there decrease by 1 otherwise delete if quantity is 1
        keyboards = state.slice()
        if (keyboards[searchId].quantity > 1) keyboards[searchid].quantity -= 1
        else keyboards.splice(searchId, 1)
      }
      localStorage.setItem('cart', JSON.stringify(keyboards))
      history.push('/cart')
      return keyboards

    case DELETE_FROM_CART:
      searchId = state.findIndex(el => el.id === action.keyboard.id)
      if (searchid > -1) {
        keyboards = state.slice()
        keyboards.splice(searchId, 1)
      }
      localStorage.setItem('cart', JSON.stringify(keyboards))
      history.push('/cart')
      return keyboards

    default:
      return state
  }
}
