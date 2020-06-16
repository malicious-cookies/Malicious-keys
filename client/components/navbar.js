import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
//material ui imports
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ProductsIcon from '@material-ui/icons/Dehaze'
import AccountIcon from '@material-ui/icons/ListAlt'
import LogoffIcon from '@material-ui/icons/PowerSettingsNew'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  navbar: {
    padding: theme.spacing(1),
    justifyContent: 'space-around'
  },
  button_menu: {
    marginRight: '25px'
  }
}))

const Navbar = ({handleClick, isLoggedIn}) => {
  const classes = useStyles()
  //in cart should be the numbers of products in the current session
  let inCart = 2

  return (
    <div>
      <nav>
        <Grid container className={classes.navbar}>
          <Grid item>
            <h4>BOILERMAKER</h4>
          </Grid>
          <Grid item>
            <Link to="/products">
              <Button
                className={classes.button_menu}
                startIcon={<ProductsIcon />}
              >
                {' '}
                PRODUCTS{' '}
              </Button>
            </Link>
            {isLoggedIn ? (
              <>
                <Button
                  className={classes.button_menu}
                  startIcon={<AccountIcon />}
                >
                  {' '}
                  MY ACCOUNT{' '}
                </Button>
                <Button
                  className={classes.button_menu}
                  color="secondary"
                  startIcon={<LogoffIcon />}
                  onClick={handleClick}
                >
                  {' '}
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <Button
                    className={classes.button_menu}
                    startIcon={<AddCircleIcon />}
                  >
                    {' '}
                    REGISTER{' '}
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    className={classes.button_menu}
                    startIcon={<AccountCircleIcon />}
                  >
                    {' '}
                    lOGIN{' '}
                  </Button>
                </Link>
              </>
            )}
            <IconButton aria-label="cart">
              <Badge badgeContent={inCart} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
