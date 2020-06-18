import React from 'react'
import {connect} from 'react-redux'
import {fetchKeyboards} from '../store/keyboards'
import KeyboardList from './KeyboardList'
import {getCart, addToCart} from '../store'

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
      <KeyboardList props={this.props} />
    ) : (
      <p>No keyboards avaliable</p>
    )
  }
}

const mapState = state => {
  return {
    keyboards: state.keyboards.allKeyboards,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    fetchKeyboards: () => dispatch(fetchKeyboards()),
    handleClick: keyboard => dispatch(addToCart(keyboard)),
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapState, mapDispatch)(AllKeyboards)
