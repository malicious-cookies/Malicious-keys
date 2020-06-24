import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function PersonalInfo(props) {
  let userInfo = {
    name: props.user.name,
    email: props.user.email,
    address: props.user.address ? props.user.address : 'Currently Homeless'
  }

  const [name, setName] = React.useState(userInfo.name)
  const [email, setEmail] = React.useState(userInfo.email)
  const [address, setAdress] = React.useState(userInfo.address)
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid>
        <form className={classes.root} noValidate autoComplete="off">
          <h2>Personal Info</h2>
          <Grid item={true} xs={4}>
            <InputLabel>Name</InputLabel>
            <FormControl fullWidth disabled>
              <Input value={name} />
            </FormControl>
          </Grid>
          <Grid item={true} xs={4}>
            <InputLabel>Email</InputLabel>
            <FormControl fullWidth disabled>
              <Input value={email} />
            </FormControl>
          </Grid>
          <Grid item={true} xs={4}>
            <InputLabel>Address</InputLabel>
            <FormControl fullWidth disabled>
              <Input value={address} />
            </FormControl>
          </Grid>
        </form>
      </Grid>
    </Container>
  )
}
