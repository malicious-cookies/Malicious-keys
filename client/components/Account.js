import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orders'
import UserAccountTabs from './UserAccountTabs'
/**
 * COMPONENT
 */
class Account extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let userId = this.props.user.id
    this.props.fetchOrders(userId)
    console.log(this.props.match)
  }

  render() {
    let user = this.props.user
    !user && history.pushState('/products')

    return <UserAccountTabs orders={this.props.orders} props={this.props} />
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

export default connect(mapState, mapDispatch)(Account)
