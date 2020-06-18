import {createMuiTheme} from '@material-ui/core/styles'

const creme = '#fff4e6'
const lipstick = '#854442'
const lightBrown = '#be9b7b'
const chocolate = '#4b3832'

export default createMuiTheme({
  palette: {
    common: {
      creme: `${creme}`,
      lipstick: `${lipstick}`
    },
    primary: {
      main: `${creme}`
    },
    secondary: {
      main: `${chocolate}`
    }
  },
  typography: {
    subtitle1: {
      fontWeight: 100
    }
  }
})
