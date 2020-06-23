import React from 'react'
import {connect} from 'react-redux'
import {fetchKeyboards} from '../store/keyboards'
import KeyboardList from './KeyboardList'
import {getCart, addToCart, fetchSingleKeyboard} from '../store'
import CircularProgress from '@material-ui/core/CircularProgress'

class AllKeyboards extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchKeyboards()
    console.log('ALLTHE PROPS===', this.props)
  }
  render() {
    let keyboards = this.props.keyboards
    return keyboards.length ? (
      <KeyboardList props={this.props} isAdmin={this.props.isAdmin} />
    ) : (
      <CircularProgress />
    )
  }
}

const mapState = state => {
  return {
    keyboards: state.keyboards.allKeyboards,
    cart: state.cart,
    isAdmin: state.user.isAdmin
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
