import { useState } from 'react'
import './App.css'
import Count from './component/Count'
import { useContext } from 'react'
import { CounterContext } from './context/CounterContext'



function App() {
  const StateContext=useContext(CounterContext)

  return (
    <>
    <h1>Counter {StateContext.count}</h1>
     <Count/><br />
     <Count/><br />
     <Count/><br />
     <Count/><br />
     
    </>
  )
}

export default App
