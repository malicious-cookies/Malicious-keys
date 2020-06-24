import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {Link} from 'react-router-dom'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    },
    backgroundColor: '#ffcb74'
  },
  header: {
    backgroundColor: '#ea907a'
  }
})

function OrdersCell(props) {
  const order = props.order
  console.log(props)
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  return (
    <React.Fragment>
      <TableRow className={classes.root} key={order.id}>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{order.id}</TableCell>
        <TableCell align="center">{order.items.length}</TableCell>
        <TableCell align="center">{order.status}</TableCell>
        <TableCell align="center">${order.subtotal}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <h4>QTY</h4>
                    </TableCell>
                    <TableCell align="center">
                      <h4>KeyboardName</h4>
                    </TableCell>
                    <TableCell align="center">
                      <h4>Keyboard Price</h4>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.items.map(keyboard => {
                    return (
                      <TableRow key={keyboard.name}>
                        <TableCell align="center">
                          <h4>x{keyboard.quantity}</h4>
                        </TableCell>
                        <TableCell align="center">
                          <Link to={`/products/${keyboard.id}`}>
                            <h3>
                              {keyboard.name.split(' ').length <= 3
                                ? keyboard.name
                                : keyboard.name
                                    .split(' ')
                                    .slice(0, 3)
                                    .join(' ')}
                            </h3>
                          </Link>
                        </TableCell>
                        <TableCell align="center">
                          <h3>${keyboard.price}</h3>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const OrderList = props => {
  let orders = props.orders
  return orders.length ? (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <h2>Past Orders</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">More Info</TableCell>
              <TableCell align="center">
                <h3>Order ID</h3>
              </TableCell>
              <TableCell align="center">
                <h3># of Items</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Status</h3>
              </TableCell>
              <TableCell align="center">
                <h3>Subtotal</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => {
              return <OrdersCell order={order} key={order.id} />
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  ) : (
    <Container>
      <h2>No orders Avaliable</h2>
    </Container>
  )
}

export default OrderList
