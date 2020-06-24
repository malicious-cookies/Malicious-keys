import React from 'react'
import {Tabs, Tab, AppBar} from '@material-ui/core'
import OrderList from './OrderList'
import history from '../history'
import Grid from '@material-ui/core/Grid'

const UserAccountTabs = props => {
  let pathname = props.props.location.pathname
  let pageURL = pathname.split('/')
  let page = pageURL[pageURL.length - 1]

  const tabNameToIndex = {
    0: 'orders',
    1: 'settings'
  }

  const indexToTabName = {
    orders: 0,
    settings: 1
  }

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page])

  const handleChange = (event, newValue) => {
    history.push(`/account/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue)
  }

  return (
    <Grid container spacing={3}>
      <Tabs orientation="vertical" value={selectedTab} onChange={handleChange}>
        <Tab label="Orders" />
        <Tab label="Settings" />
      </Tabs>

      {selectedTab === 0 && <OrderList orders={props.orders} />}
      {selectedTab === 1 && <h1>HEHE</h1>}
    </Grid>
  )
}

export default UserAccountTabs
