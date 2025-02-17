import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)


    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updated = left + 1
        setLeft(updated)
        setTotal(updated + right)
    }


    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updated = right + 1
        setRight(updated)
        setTotal(left + updated)
    }

    return (
        <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks}/>
        <p>total: {total}</p>
        </div>
    )
}
export default App