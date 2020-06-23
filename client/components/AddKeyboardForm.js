import React, {useState} from 'react'
import {connect} from 'react-redux'
import {postkeyboard} from '../store/singleKeyboard'

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

const AddKeyboardForm = props => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')

  const addKeyboard = {
    name,
    price,
    description,
    imageURL
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FormControl
          className={classes.fields}
          onSubmit={() => console.log('form submitted!')}
        >
          <Grid container spacing={1}>
            <Grid item xs={10} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <TextField
                    required
                    id="outlined-required"
                    label="Update Name"
                    value={name}
                    variant="outlined"
                    onChange={e => setName(e.target.value)}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Update Price"
                    multiline
                    rowsMax={4}
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    variant="outlined"
                  />

                  <TextField
                    id="outlined-multiline-static"
                    label="Update Description"
                    multiline
                    rows={4}
                    value={description}
                    defaultValue=""
                    variant="outlined"
                    onChange={e =>
                      e
                        ? setDescription(e.target.value)
                        : setDescription(defaultValue)
                    }
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Update imageURL"
                    multiline
                    rows={4}
                    value={imageURL}
                    defaultValue=""
                    variant="outlined"
                    onChange={e => setImageURL(e.target.value)}
                  />
                  {/* <Typography gutterBottom variant="subtitle1">
                  Name
                </Typography> */}

                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => props.postkeyboard(addKeyboard)}
                  >
                    Add
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

const mapDispatch = dispatch => {
  return {
    postkeyboard: newkeyboard => dispatch(postkeyboard(newkeyboard))
  }
}

export default connect(null, mapDispatch)(AddKeyboardForm)
