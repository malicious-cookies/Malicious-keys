import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import {makeStyles} from '@material-ui/styles'
// import logo from '../../public/assets/logo.png'

import Badge from '@material-ui/core/Badge'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function ElevationScroll(props) {
  const {children} = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '4em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    fontWeight: 100,
    minWidth: 10,
    marginLeft: '25px'
  }
}))

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge)

const Navbar = props => {
  const classes = useStyles()
  let inCart =
    props.cart.length &&
    props.cart.reduce((a, b) => {
      if (typeof b === 'object') {
        return a + b.quantity
      }
      return a + b
    }, 0)
  console.log(props.cart)
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img alt="company logo" className={classes.logo} src="" />
            <Tabs className={classes.tabContainer}>
              <Link to="/products">
                <Tab className={classes.tab} label="Keyboards" />
              </Link>
              <Link to="/signup">
                <Tab className={classes.tab} label="Signup" />
              </Link>
              <Link to="/login">
                <Tab className={classes.tab} label="Login" />
              </Link>
            </Tabs>

            <Link to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={inCart} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}

// /**
//  * CONTAINER
//  */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
    cart: state.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
