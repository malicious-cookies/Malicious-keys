import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './components/ui/theme'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
