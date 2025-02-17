import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const App = (props) => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            <p>{value}</p>

            <Button onClick={() => setToValue(1000)} text="thousand" />
            <Button onClick={() => setToValue(0)} text="reset" />
            <Button onClick={() => setToValue(value + 1)} text="increment" />
        </div>
    )
}

export default App