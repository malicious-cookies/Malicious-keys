import React from 'react'
import {Tabs, Tab, AppBar} from '@material-ui/core'
import OrderList from './OrderList'
import history from '../history'
import Grid from '@material-ui/core/Grid'
import PersonalInfo from './PersonalInfo'

const UserAccountTabs = props => {
  let pathname = props.props.location.pathname
  let pageURL = pathname.split('/')
  let page = pageURL[pageURL.length - 1]

  const tabNameToIndex = {
    0: 'me',
    1: 'orders'
  }

  const indexToTabName = {
    me: 0,
    orders: 1
  }

  page = indexToTabName[page] ? page : (page = 'me')
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page])

  const handleChange = (event, newValue) => {
    history.push(`/account/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue)
  }

  return (
    <Grid container spacing={3}>
      <Tabs orientation="vertical" value={selectedTab} onChange={handleChange}>
        <Tab label="Personal info" />
        <Tab label="Orders" />
      </Tabs>

      {selectedTab === 0 && <PersonalInfo user={props.props.user} />}
      {selectedTab === 1 && <OrderList orders={props.orders} />}
    </Grid>
  )
}

export default UserAccountTabs
