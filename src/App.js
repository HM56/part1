import React from 'react'

const Hello = ({name, age}) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Kevin'
  const age = 15

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Hardik" age="14"/>
      <Hello name={name} age={age}/>
      <Hello name="Aditya" age="14"/>
    </div>
  )
}

export default App
