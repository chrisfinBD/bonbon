import React, {useState} from 'react'
import Board from './components/Board'
import List from './components/List'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const App = ()=> {
  const [lists, setLists] = useState([])
  const addNewList = (e)=> {
    let newList = <List title="Doing" key={`lists-${lists.length}`} />
    setLists([...lists, newList])
  }
  return (
    <div className="App">
      <div className="float-right">
        <Button variant="dark" onClick={addNewList}>Add +</Button>
      </div>
      <h1 className="title">BonBon</h1>
      <Board lists={lists} />
      <p style={ {color: "blue", fontSize: "14px"} }>Made with luv</p>
    </div>
  )
}
export default App












