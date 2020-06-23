import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SINGLE_KEYBOARD = 'GET_SINGLE_KEYBOARD'
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
  try {
    await axios.delete(`/api/keyboards/${keyboardID}`)
    dispatch(removeSingleKeyboard(keyboardID))
  } catch (error) {
    console.error('Failed to DELETE')
  }
}

/**
 * REDUCER
 */
export default function singleKeyboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SINGLE_KEYBOARD':
      return {...state, keyboard: action.keyboard}
    case 'REMOVE_SINGLE_KEYBOARD':
      return [...state, initialState.filter(id => id !== action.keyboardID)]
    default:
      return state
  }
}
