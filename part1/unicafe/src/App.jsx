import { useState } from 'react'

const Header = (props) => (
  <h1>{props.name}</h1>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Stats = (props) => {
  const all = props.good + props.neut + props.bad
  const score = props.good - props.bad

  if (all == 0)
    return <div>No feedback given</div>

  return <table>
    <StatsLine text="good" value={props.good}/>
    <StatsLine text="neutral" value={props.neut}/>
    <StatsLine text="bad" value={props.bad}/>
    <StatsLine text="all" value={all}/>
    <StatsLine text="average" value={score / all}/>
    <StatsLine text="positive" value={props.good / all * 100 + " %"}/>
    {/* <div>good {props.good}</div>
    <div>neutral {props.neut}</div>
    <div>bad {props.bad}</div>
    <div>all {all}</div>
    <div>average {score / all}</div>
    <div>positive {props.good / all * 100} %</div> */}
  </table>
}

const StatsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name='give feedback' />
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>
      <Header name='statistics' />
      <Stats good={good} neut={neutral} bad={bad}/>
    </div>
  )
}

export default App