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
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {props.props.keyboards.map(keyboard => (
          <Grid item key={keyboard.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={keyboard.imageURL}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Grid container alignItems="center">
                  <Typography gutterBottom variant="h6">
                    {keyboard.name.split(' ').length <= 3
                      ? keyboard.name
                      : keyboard.name
                          .split(' ')
                          .slice(0, 3)
                          .join(' ')}
                  </Typography>
                </Grid>
                <Typography>
                  {keyboard.description.length < 50
                    ? keyboard.description
                    : keyboard.description.slice(0, 75) + '...'}
                </Typography>
              </CardContent>
              <Typography gutterBottom variant="h6" className={classes.price}>
                Price: ${keyboard.price}
              </Typography>
              <Divider />
              <CardActions className={classes.cardActions}>
                <Link to={`/products/${keyboard.id}`}>
                  <Tooltip title="MORE DETAILS" arrow>
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
                <Tooltip title="ADD TO CART" arrow>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => props.props.handleClick(keyboard)}
                    color="secondary"
                  >
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
