import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
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

import AccountCircleIcon from '@material-ui/icons/AccountCircle'

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

const Navbar = ({handleClick, isLoggedIn}, props) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img alt="company logo" className={classes.logo} src="" />
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Keyboards" />
              <Tab className={classes.tab} label="About" />
              <Tab className={classes.tab} label="Contact" />
            </Tabs>

            <Button variant="contained" color="secondary">
              Sign-Up
            </Button>

            <IconButton>
              <Link to="/login">
                <AccountCircleIcon />
              </Link>
            </IconButton>

            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={4}
                style={{
                  background: 'transparent',
                  boxShadow: 'none',
                  marginRight: '10px'
                }}
              >
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
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

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }

// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {logout} from '../store'

// //Material UI
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// // const Navbar = ({handleClick, isLoggedIn}) => (

// const Navbar = ({handleClick, isLoggedIn}) => {

//   const classes = useStyles()
//   const [auth, setAuth] = React.useState(true)
//   const [anchorEl, setAnchorEl] = React.useState(null)
//   const open = Boolean(anchorEl)

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

// return (
//     <div className={classes.root}>
//       {/* <FormGroup>
//         <FormControlLabel
//           control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
//           label={auth ? 'Logout' : 'Login'}
//         />
//       </FormGroup> */}
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Photos
//           </Typography>
//           {auth && (
//             <div>
//               <div>
//               {/* The navbar will show these links before you log in */}

//               {/* <Link to="/login">Login</Link>
//               <Link to="/signup">Sign Up</Link>
//               <Link to="/signup">Shop Keyboards</Link>
//               <Link to="/signup">About</Link>
//               <Link to="/signup">Contact Us</Link> */}
//               </div>
//               <IconButton
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={open}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
// )

// }

//   // <div>
//   //   <h1>BOILERMAKER</h1>
//   //     <nav>
//   //       {isLoggedIn ? (
//   //         <div>
//   //           {/* The navbar will show these links after you log in */}
//   //           <Link to="/home">Home</Link>
//   //           <a href="#" onClick={handleClick}>
//   //             Logout
//   //           </a>
//   //         </div>
//   //       ) : (
//   //         <div>
//   //           {/* The navbar will show these links before you log in */}
//   //           <Link to="/login">Login</Link>
//   //           <Link to="/signup">Sign Up</Link>
//   //           <Link to="/signup">Shop Keyboards</Link>
//   //           <Link to="/signup">About</Link>
//   //           <Link to="/signup">Contact Us</Link>
//   //         </div>
//   //       )}
//   //     </nav>
//   //   <hr />
//   // </div>

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
