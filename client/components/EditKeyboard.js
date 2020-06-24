import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleKeyboard} from '../store/singleKeyboard'
import EditKeyboardForm from './EditKeyboardForm'

class EditKeyboard extends React.Component {
  constructor(props) {
    super(props)
    this.props.fetchSingleKeyboard(this.props.match.params.id)
  }

  render() {
    const keyboard = this.props.keyboard

    return <EditKeyboardForm keyboard={keyboard} keyboardName={keyboard.name} />
  }
}

const mapState = state => {
  return {
    keyboard: state.singleKeyboard.keyboard
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSingleKeyboard: keyboardId => dispatch(fetchSingleKeyboard(keyboardId))
  }
}
export default connect(mapState, mapDispatch)(EditKeyboard)
