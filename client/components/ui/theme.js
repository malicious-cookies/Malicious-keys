import {createMuiTheme} from '@material-ui/core/styles'
import {common} from '@material-ui/core/colors'

let oceanGreen = `#58b4ae`
let dangerRed = `#f40552`
let lightYellow = '#ffe277'

export default createMuiTheme({
  palette: {
    common: {
      oceanGreen: `${oceanGreen}`,
      dangerRed: `${dangerRed}`,
      lightYellow: `${lightYellow}`
    },
    primary: {
      main: `${oceanGreen}`
    },
    secondary: {
      main: `${dangerRed}`
    },
    sunny: {
      main: `${lightYellow}`
    }
  },
  typography: {
    subtitle1: {
      fontWeight: 100
    }
  }
})
