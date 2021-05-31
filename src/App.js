import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({good, neutral, bad}) => {

  if(good+bad+neutral===0){
    return(
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good-bad)/(good+bad+neutral)}</p>
      <p>positive {good/(good+neutral+bad)*100}%</p>
    </>
  )
}

const Statistic = ({text, value}) => {return <tr> <td>{text}</td> <td> {value}</td> </tr>}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)

  if(good+bad+neutral===0){
    return(
      <>
        <h1>Give Feedback</h1>
        <Button handleClick={handleGoodClick} text="good"/>
        <Button handleClick={handleNeutralClick} text="neutral"/>
        <Button handleClick={handleBadClick} text="bad"/>
        <h1> Statistics </h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h1> Statistics </h1>
      <table>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="average" value={(good-bad)/(good+bad+neutral)}/>
        <Statistic text="positive" value={good/(good+neutral+bad)*100}/>
      </table>
    </div>
  )
}

export default App
