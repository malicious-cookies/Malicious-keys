import axios from 'axios'
import history from '../history'
/**
 * ACTION TYPES
 */
const GET_SINGLE_KEYBOARD = 'GET_SINGLE_KEYBOARD'

const EDIT_KEYBOARD = 'EDIT_KEYBOARD'

const REMOVE_SINGLE_KEYBOARD = 'REMOVE_SINGLE_KEYBOARD'

/**
 * INITIAL STATE
 */
const initialState = {
  keyboard: {}
}

/**
 * ACTION CREATORS
 */
const getSingleKeyboard = keyboard => {
  return {
    type: GET_SINGLE_KEYBOARD,
    keyboard
  }
}

const editKeyboard = keyboard => {
  return {
    type: EDIT_KEYBOARD,
    keyboard
  }
}
const removeSingleKeyboard = keyboardID => {
  return {
    type: REMOVE_SINGLE_KEYBOARD,
    keyboardID
  }
}

/**
 * THUNK CREATORS
 */

export const fetchSingleKeyboard = keyboardID => async dispatch => {
  try {
    const res = await axios.get(`/api/keyboards/${keyboardID}`)
    dispatch(getSingleKeyboard(res.data))
  } catch (err) {
    console.error(err)
  }
}
export const deleteKeyboard = keyboardID => async dispatch => {
  console.log('HERE', keyboardID)
  try {
    await axios.delete(`/api/keyboards/${keyboardID}`)
    dispatch(removeSingleKeyboard(keyboardID))
    history.push(`/products`)
  } catch (error) {
    console.error('Failed to DELETE')
  }
}

//editkeyboard
export const editOneKeyboard = (keyboardId, keyboard) => async dispatch => {
  try {
    const res = await axios.put(`/api/keyboards/${keyboardId}`, keyboard)
    dispatch(editKeyboard(res.data))
    history.push(`/products/${keyboardId}`)
  } catch (error) {
    console.error(error)
  }
}
/**
 * REDUCER
 */
export default function singleKeyboardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_KEYBOARD:
      return {...state, keyboard: action.keyboard}

    case EDIT_KEYBOARD:
      return {...state, keyboard: action.keyboard}

    case REMOVE_SINGLE_KEYBOARD:
      return [...state, initialState.filter(id => id !== action.keyboardID)]

    default:
      return state
  }
}
