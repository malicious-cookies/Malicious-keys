import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Login = props => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={props.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            LOGIN
          </Button>
          {props.error &&
            props.error.response && <div> {props.error.response.data} </div>}
        </form>
        <Grid container justify="flex-end">
          <Grid item>
            <a href="/auth/google">SignIn with Google</a>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Login
