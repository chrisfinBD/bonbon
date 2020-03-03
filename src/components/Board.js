import React from 'react'
import Row from 'react-bootstrap/Row'
import List from './List'

const Board = (props)=> {
  return (
    <section id="board">
        <Row>
        {props.lists}
        
                
    </Row>
    </section>
  )
}
export default Board

