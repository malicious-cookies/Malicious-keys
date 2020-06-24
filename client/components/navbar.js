import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/user'
import logo from '../../public/assets/malicious_logo.svg'

import LockIcon from '@material-ui/icons/Lock'
import {withStyles, makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LogoffIcon from '@material-ui/icons/PowerSettingsNew'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Box from '@material-ui/core/Box'

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.r}`,
    padding: '0 4px'
  }
}))(Badge)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '100px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    width: '100px',
    margin: '10px 0'
  },
  headerContainer: {
    justifyContent: 'space-between'
  }
}))

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

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.headerContainer}>
          <Link to="/">
            <img className={classes.title} src={logo} alt="Malicious" />
          </Link>
          <Box>
            <Link to="/products">
              <Button startIcon={<KeyboardIcon />}> PRODUCTS </Button>
            </Link>
            {props.isLoggedIn ? (
              <React.Fragment>
                <Link to="/account">
                  <Button startIcon={<AccountCircleIcon />}> ACCOUNT </Button>
                </Link>
                <Button
                  color="secondary"
                  variant="outlined"
                  startIcon={<LogoffIcon />}
                  onClick={props.logout}
                >
                  Logout
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="/signup">
                  <Button startIcon={<AddCircleIcon />}> SIGNUP </Button>
                </Link>
                <Link to="/login">
                  <Button startIcon={<LockIcon />}> lOGIN </Button>
                </Link>
              </React.Fragment>
            )}
            <Link to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={inCart} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
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
    logout: () => dispatch(logout())
  }
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapState, mapDispatch)(Navbar)
