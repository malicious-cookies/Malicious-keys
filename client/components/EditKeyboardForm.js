import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import {FormControl, FormHelperText, TextField} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    maxWidth: 1000,
    maxHeight: 1000
  },
  image: {
    width: 300,
    height: 300
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  fields: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '50ch'
    }
  },
  title: {
    paddingTop: '1rem',
    fontWeight: 200
  },
  button: {
    margin: theme.spacing(2.75)
  }
}))

const EditForm = props => {
  console.log('PROPS====@#$@#$=', props.keyboardName)

  console.log(name)
  const classes = useStyles()
  const keyboardName = props.keyboard.name
  console.log('KEYBOARD NAME====', keyboardName)
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FormControl
          className={classes.fields}
          onSubmit={() => console.log('form submitted!')}
        >
          <Grid container spacing={1}>
            <Grid item md={5} md container>
              <Typography variant="subtitle1" className={classes.title}>
                {props.keyboard.name}
              </Typography>
              <Grid item sm={2} sm container>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
              <Grid item>
                <img
                  className={classes.img}
                  alt="complex"
                  src={props.keyboard.imageURL}
                />
              </Grid>
            </Grid>
            <Grid item xs={10} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <TextField
                    required
                    id="outlined-required"
                    label="Update Name"
                    defaultValue="change"
                    variant="outlined"
                    onChange={() => console.log('TEXT IS CHANGING')}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Update Price"
                    multiline
                    rowsMax={4}
                    value="change price"
                    onChange=""
                    variant="outlined"
                  />

                  <TextField
                    id="outlined-multiline-static"
                    label="Update Description"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                  />

                  {/* <Typography gutterBottom variant="subtitle1">
                  Name
                </Typography> */}

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </Grid>

                <Grid item xs container direction="column" spacing={2} />
              </Grid>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </div>
  )
}

export default EditForm
