import React, {Component} from 'react'
import Snake from './snake.jsx!'
import Food from './food.jsx!'

class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      empty: true,
      snakeTime: 0
    }
  }
  render () {
    let occupant
    if(this.props.property === 'snake') {
      occupant = <Snake />
    } else if (this.props.property === 'food') {
      occupant = <Food />
    } else {
      occupant = ''
    }

    return (
      <div className="cell" data-row={this.props.row} data-col={this.props.col}>
        {occupant}
      </div>
    )
  }
}

export default Cell
