import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SINGLE_KEYBOARD = 'GET_SINGLE_KEYBOARD'

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

/**
 * REDUCER
 */
export default function singleKeyboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_SINGLE_KEYBOARD':
      return {...state, keyboard: action.keyboard}
    default:
      return state
  }
}
