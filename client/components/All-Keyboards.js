import React from 'react'
import {connect} from 'react-redux'
//material ui imports
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}))

class AllKeyboards extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllKeyboards()
  }
  render() {
    const {keyboards} = this.props
    const classes = useStyles()
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {keyboards.map(keyboard => (
            <Grid item key={keyboards.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={keyboard.imgURL}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {keyboard.name}
                  </Typography>
                  <Typography>{keyboard.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small" color="primary">
                    View
                  </Button>
                  <Button variant="contained" size="small" color="secondary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    keyboards: state.keyboards
  }
}

const mapDispatch = dispatch => {
  return {
    getAllKeyboards: () => dispatch(fetchKeyboard())
  }
}

export default connect(mapState, mapDispatch)(AllKeyboards)
