import React, { useState, useEffect } from 'react'
import './App.css'

export default () => {
  const [count, setCount] = useState(0)

  const [person, setPerson] = useState(null)

  // similar compDidMount and compDidUpdate
  useEffect(async () => {
    const response = await fetch('https://api.randomuser.me/')
    const data = await response.json()
    const [item] = data.results
    setPerson(item)
  }, [count])

  return (
    <div>
      <p>
        You cliked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>

      {person && <div>{person.name.first}</div>}
    </div>
  )
}
