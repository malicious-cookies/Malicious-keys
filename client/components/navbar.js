import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/user'
import LockIcon from '@material-ui/icons/Lock'
import {withStyles, makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LogoffIcon from '@material-ui/icons/PowerSettingsNew'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ProductsIcon from '@material-ui/icons/Dehaze'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

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
    flexGrow: 1
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
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Malicious Keys
          </Typography>
          <Link to="/products">
            <Button startIcon={<ProductsIcon />}> PRODUCTS </Button>
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
