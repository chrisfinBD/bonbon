import React, {useState} from 'react'
import { Col, Card } from 'react-bootstrap'
import Item from './Item'
const List = (props)=> {
  const [items, setItems] = useState([])
  const addItem = (e)=> {
    let newItem = <Item key={`items-${items.length}`} />
    setItems([...items, newItem])
  }
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {items}
          <Card.Link href="#" onClick={addItem}>Add +</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default List