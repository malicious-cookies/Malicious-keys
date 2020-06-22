import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/box'
import splash from '../../public/assets/splash.jpg'

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${splash})`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '3rem'
  }
}))

function SplashPage() {
  const classes = useStyles()

  return (
    <div>
      <Box pl={0} className={classes.hero}>
        <Box>
          Mechanical.<br />
        </Box>
      </Box>
    </div>
  )
}

export default SplashPage
