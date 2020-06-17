import React from 'react'
import {connect} from 'react-redux'
import {fetchKeyboards} from '../store/keyboards'
import KeyboardList from './KeyboardList'

class AllKeyboards extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchKeyboards()
  }
  render() {
    let keyboards = this.props.keyboards
    return keyboards.length ? (
      <KeyboardList keyboards={this.props.keyboards} />
    ) : (
      <p>No keyboards avaliable</p>
    )
  }
}

const mapState = state => {
  return {
    keyboards: state.keyboards.allKeyboards
  }
}

const mapDispatch = dispatch => {
  return {
    fetchKeyboards: () => dispatch(fetchKeyboards())
  }
}

export default connect(mapState, mapDispatch)(AllKeyboards)
