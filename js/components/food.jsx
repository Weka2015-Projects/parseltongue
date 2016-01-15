import React, {Component} from 'react'


class Food extends Component {
  constructor () {
    super()
    this.state = {
      here: true
    }
  }
  render () {
    return (
      <div className="food"></div>
    )
  }
}

export default Food
