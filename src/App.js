import React, { useState, useEffect } from 'react'
import './App.css'

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = ` You clicked ${count} times`
  })

  return (
    <div>
      <p>
        You cliked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
