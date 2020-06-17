import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_KEYBOARDS = 'GET_ALL_KEYBOARDS'

/**
 * INITIAL STATE
 */
const initialState = {
  allKeyboards: []
}

/**
 * ACTION CREATORS
 */
const getKeyboards = keyboards => {
  return {
    type: GET_ALL_KEYBOARDS,
    keyboards
  }
}

/**
 * THUNK CREATORS
 */

export const fetchKeyboards = () => async dispatch => {
  try {
    const res = await axios.get('/api/keyboards')
    dispatch(getKeyboards(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function keyboardsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_KEYBOARDS':
      return {...state, allKeyboards: action.keyboards}
    default:
      return state
  }
}
