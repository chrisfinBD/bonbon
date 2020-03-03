
import React, {useState} from 'react'
const Item = ()=> {
  const [active, setActive] = useState(true)
  const [itemText, setItemText] = useState("")
  const updateItemText = (e)=> {
    setItemText(e.currentTarget.value)
  }
  const lockField = (e)=> {
    setActive(false)
  }
  const enableField = (e)=> {
    setActive(true)
  }
  return (
    <div className="item">
      { active ? (
        <textarea onChange={updateItemText} onBlur={lockField} value={itemText}></textarea>
      ) : (
        <p style={ {padding: "5px", border: "1px solid #eee"} } onClick={enableField}>{itemText}</p>
      )}
    </div>
  )
}

export default Item