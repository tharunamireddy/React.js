import React from 'react'
import { useState,useEffect } from 'react'
function Home() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect called");
    },[count])

    const inc = () =>{
        console.log(count)
        setCount(c =>c+1 )
        setCount(c =>c+1 )
    }

  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <button onClick={()=>inc()}>+</button>
    </div>
  )
}

export default Home
