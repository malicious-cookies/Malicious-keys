import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import OrderList from './OrderList'
import orderList from './OrderList'
/**
 * COMPONENT
 */
class Account extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let user = this.props.user
    if (!user.id) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <orderList orders={this.props} />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    email: state.user.email
  }
}

export default connect(mapState)(Account)

/**
 * PROP TYPES
 */
Account.propTypes = {
  email: PropTypes.string
}
