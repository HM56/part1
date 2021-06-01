import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])

  const handleNextClick = () => {
    console.log(anecdotes[selected], selected)
    setSelected(Math.floor(Math.random()*7))
  }
  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected]+=1
    // setVotes([...votes, votes[selected]=votes[selected]+1])
    // console.log(votes[selected])
    setVotes(copy)
  }

  const max = (votes.indexOf((Math.max(...votes))))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} <br/> has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="Vote"/>
      <Button handleClick={handleNextClick} text="Next"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]} <br/> has {votes[max]} votes</p>
    </div>
  )
}

export default App
