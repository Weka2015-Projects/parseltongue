import React, {Component} from 'react'
import Cell from './cell.jsx!'

class Grid extends Component {
  constructor(){
    super()
    this.state = {
    grid: new Array (30).fill('-').map(x => new Array(30).fill('-'))
    }
  }
  render(){
    let grid = []
    this.state.grid.map(x => x.map(y => grid.push(<Cell />)))
    return (<div>{grid}</div>)
  }
}

export default Grid