import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleKeyboard} from '../store/singleKeyboard'
import KeyboardView from './KeyboardVIew'

class SingleKeyboard extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchSingleKeyboard(this.props.match.params.id)
  }
  render() {
    let keyboard = this.props.keyboard
    return <KeyboardView keyboard={keyboard} />
  }
}

const mapState = state => {
  console.log(state)
  return {
    keyboard: state.singleKeyboard.keyboard
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleKeyboard: keyboardId => dispatch(fetchSingleKeyboard(keyboardId))
  }
}

export default connect(mapState, mapDispatch)(SingleKeyboard)
