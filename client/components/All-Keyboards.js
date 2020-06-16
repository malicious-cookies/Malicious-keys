import React from 'react'
import {connect} from 'react-redux'

class AllKeyboards extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllKeyboards()
  }
  render() {
    const {keyboards} = this.props
    return (
      <div>
        <h1>Keyboards</h1>
        <ul>
          {keyboards.map(keyboard => (
            <li key={keyboard.id}>{keyboard.name}</li>
          ))}
        </ul>
      </div>
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
