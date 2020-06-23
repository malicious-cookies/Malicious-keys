import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'

const OrderList = props => {
  let orders = props.orders
  return orders.length ? (
    <Container maxWidth="lg">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Order ID</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center"># of Items</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell>Address</TableCell>
              <TableCell align="center">More Info</TableCell>
            </TableRow>
          </TableHead>

          {orders.map(order => {
            return (
              <TableRow>
                <TableCell>{order.id}</TableCell>
                <TableCell>Not Implemented Yet</TableCell>
                <TableCell>{order.items.length}</TableCell>
                <TableCell>{order.subtotal}</TableCell>
                <TableCell>{order.address || 'Oder from seed.js'}</TableCell>
                <TableCell />
              </TableRow>
            )
          })}
          <TableBody />
        </Table>
      </TableContainer>
    </Container>
  ) : (
    <h4>ejqwjeqw</h4>
  )
}

export default OrderList
