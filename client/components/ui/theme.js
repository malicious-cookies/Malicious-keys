import {createMuiTheme} from '@material-ui/core/styles'
import {common} from '@material-ui/core/colors'

let oceanGreen = `#e1fff5`
let dangerRed = `#f40552`
let lightYellow = '#fffeb3'

export default createMuiTheme({
  palette: {
    common: {
      oceanGreen: `${oceanGreen}`,
      dangerRed: `${dangerRed}`,
      lightYellow: `${lightYellow}`
    },
    primary: {
      main: `#efefef`
    },
    secondary: {
      main: `${dangerRed}`
    },
    sunny: {
      main: `${lightYellow}`
    }
  },
  typography: {
    fontFamily: 'Lucida Console, Courier, monospace',

    fontWeight: 100,
    subtitle1: {
      fontWeight: 100
    }
  }
})
