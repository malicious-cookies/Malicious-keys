import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/orders'
import UserAccountTabs from './UserAccountTabs'
import AdminAccountTabs from './AdminAccountTabs'
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
  }

  render() {
    let user = this.props.user
    !user && history.pushState('/products')
    return user.isAdmin ? (
      <AdminAccountTabs props={this.props} />
    ) : (
      <UserAccountTabs orders={this.props.orders} props={this.props} />
    )
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
