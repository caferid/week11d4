import { useState } from 'react'


const Counter=()=> {
    const [count, setCount] = useState<number>(0)
    const handleInt=()=>{
        setCount(()=>count+1)
    }
    const handledec=()=>{
        setCount(()=>count+1)
    }
  return (
    <div>
        <h2>Cunter</h2>
        <p>{count}</p>
        <button onClick={handleInt}>+</button>
        <button onClick={handledec}>-</button>
    </div>
  )
}

export default Counter