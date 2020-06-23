import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {fetchOrders} from '../store/orders'
import OrderList from './OrderList'
/**
 * COMPONENT
 */
class AccountUser extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let userId = this.props.match.params.id
    this.props.fetchOrders(userId)
  }

  render() {
    let user = this.props.user
    console.log(this.props.orders)
    if (!user.id) {
      return <Redirect to="/" />
    }

    return <OrderList orders={this.props.orders} />
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    orders: state.orders
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrders: userId => dispatch(fetchOrders(userId))
  }
}

export default connect(mapState, mapDispatch)(AccountUser)
