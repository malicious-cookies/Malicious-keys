import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import AllKeyboards from './AllKeyboards'

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
        <h3>Welcome {user.email}</h3>
        <h3>
          This component will render past orders. Setting pages and Personal
          info page.
        </h3>
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
