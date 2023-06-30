import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goodAction, okAction, badAction, resetAction } from './action'

const App = () => {
  const dispatch = useDispatch()
  const { good, ok, bad } = useSelector((state) => state)

  const handleGood = () => {
    dispatch(goodAction())
  }

  const handleOk = () => {
    dispatch(okAction())
  }

  const handleBad = () => {
    dispatch(badAction())
  }

  const handleReset = () => {
    dispatch(resetAction())
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleOk}>Ok</button>
      <button onClick={handleBad}>Bad</button>
      <button onClick={handleReset}>Reset</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Ok: {ok}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App
