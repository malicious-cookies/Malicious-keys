import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import AllKeyboards from './AllKeyboards'
import Navbar from './navbar'
import {render} from 'enzyme'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
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
        <h3>Welcome</h3>
        <AllKeyboards />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('STATE.User ======', state.user)
  return {
    user: state.user,
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
