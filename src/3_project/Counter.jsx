import React, { useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
  const increment = () => {
    setCount((prev)=>{
      return prev + 1
    })
  }
  const increment2 = () => {
    setCount2((prev)=>{
      return prev + 1
    })}

    useEffect(()=>{
    console.log('Counter component mounted')
    },[count])

     useEffect(()=>{
    console.log('second Counter component mounted')
    },[count2])
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
      <div className='display-1'>{count}</div>
      <button onClick={increment} className='btn btn-primary'>increase</button>

      <div className='display-1'>{count2}</div>
      <button onClick={increment2} className='btn btn-primary'>increase</button>
    </div>
  )
}

export default Counter
