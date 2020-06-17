import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Tooltip from '@material-ui/core/Tooltip'
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider'

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
  },
  cardActions: {
    justifyContent: 'space-around'
  },
  price: {
    alignSelf: 'center'
  }
}))

export default function KeyboardList(props) {
  const classes = useStyles()
  console.log(props.props)
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.keyboards.map(keyboard => (
          <Grid item key={keyboard.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Grid container alignItems="center">
                  <Typography gutterBottom variant="h6">
                    {keyboard.name}
                  </Typography>
                </Grid>
                <Typography>{keyboard.description}</Typography>
              </CardContent>
              <Typography gutterBottom variant="h6" className={classes.price}>
                Price: ${keyboard.price}
              </Typography>
              <Divider />
              <CardActions className={classes.cardActions}>
                <Link to={`/products/${keyboard.id}`}>
                  <Tooltip title="MORE DETAILS">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      disableElevation
                    >
                      View
                    </Button>
                  </Tooltip>
                </Link>
                <Divider orientation="vertical" flexItem />
                <Tooltip title="ADD TO CART">
                  <Button variant="contained" size="small" color="secondary">
                    <AddShoppingCartIcon />
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
