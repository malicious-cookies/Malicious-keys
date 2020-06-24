import React from 'react'
import {Tabs, Tab, Container} from '@material-ui/core'
import history from '../history'
import Grid from '@material-ui/core/Grid'
import AddKeyboardForm from '../components/AddKeyboardForm'
import OrderList from '../components/OrderList'
import PersonalInfo from './PersonalInfo'

const AdminAccountTabs = props => {
  console.log('THIS IS PROOOOOPS', props.props)
  let pathname = props.props.location.pathname
  let pageURL = pathname.split('/')
  let page = pageURL[pageURL.length - 1]

  const tabNameToIndex = {
    0: 'me',
    1: 'addkeybaord',
    2: 'allorders',
    3: 'allusers',
    4: 'finances'
  }

  const indexToTabName = {
    me: 0,
    addkeybaord: 1,
    allorders: 2,
    allusers: 3,
    finances: 4
  }

  page = indexToTabName[page] ? page : (page = 'me')

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page])

  const handleChange = (event, newValue) => {
    history.push(`/account/${tabNameToIndex[newValue]}`)
    setSelectedTab(newValue)
  }
  //
  return (
    <Grid container spacing={3}>
      <Tabs orientation="vertical" value={selectedTab} onChange={handleChange}>
        <Tab label="Personal Info" />
        <Tab label="Add Keyboard" />
        <Tab label="All Orders" />
        <Tab label="All Users" />
        <Tab label="Finances" />
      </Tabs>

      <Container>
        {selectedTab === 0 && <PersonalInfo user={props.props.user} />}
        {selectedTab === 1 && <AddKeyboardForm />}
        {selectedTab === 2 && <OrderList order={props.props} />}
        {selectedTab === 3 && <h1>AAll users Compoenent here</h1>}
        {selectedTab === 4 && <h1>Add Keyboard Compoenent here</h1>}
      </Container>
    </Grid>
  )
}

export default AdminAccountTabs
