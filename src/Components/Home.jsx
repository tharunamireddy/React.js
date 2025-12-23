import React from 'react'
import { useState,useEffect } from 'react'
function Home() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        getData();
    },[name])

    const getData = async()=>{
        const options = {
            method :"GET"
        }
        const data = await fetch(`https://apis.ccbp.in/wiki-search?search=${name}`,options)
        const result = await data.json();
        console.log(result)
    }

    const inc = () =>{
        console.log(count)
        setCount(c =>c+1 )
        setCount(c =>c+1 )
    }

    const inp = (e) =>{
        setName(e.target.value)
    }

  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <button onClick={()=>inc()}>+</button>
      <input onChange={(e)=>inp(e)} />
      <button>Add</button>
    </div>
  )
}

export default Home
