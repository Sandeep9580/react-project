import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function Count() {
     const CountContext=useContext(CounterContext)

     console.log(CountContext)

  return (
    <> 
      <button onClick={()=>{CountContext.setCount(CountContext.count+1)}}>
        Increase
      </button>
      <button onClick={()=>{CountContext.setCount(CountContext.count-1)}}>
        Decrease
      </button>
    </>
  )
}

export default Count
