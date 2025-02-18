import { useState } from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.onClick}>{props.text}</button>
)

const AoTD = (props) => {
    if (props.max == -1)
        return <div>No votes on any anecdotes!</div>

    return <div>
        {props.text}
        <div>
            has {props.count} votes
        </div>
    </div>
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [max, setMax] = useState(-1)

  const change = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const incrVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    let toSet = max;
    if (max == -1 || newVotes[max] <= newVotes[selected])
        toSet = selected

    setMax(toSet)
  }

  return (
    <div>
        <Header text="Anecdote of the day" />
        {anecdotes[selected]}
        <div>
            has {votes[selected]} votes
        </div>
        <div>
            <Button onClick={incrVotes} text="vote" />
            <Button onClick={change} text="next anecdote" />
        </div>
        <Header text="Anecdote with most votes" />
        <AoTD max={max} text={anecdotes[max]} count={votes[max]} />
    </div>
  )
}

export default App