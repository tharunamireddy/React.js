import React from 'react'
import './Home.css'
import { useState,useEffect } from 'react'
function Home() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
        getData();
        console.log(searchResults)
    },[name])

    const getData = async()=>{
        const options = {
            method :"GET"
        }
        const data = await fetch(`https://apis.ccbp.in/wiki-search?search=${name}`,options)
        const result = await data.json();
        setSearchResults(result.search_results);
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

      <ul>
        {searchResults.map(i=> 
            <div className='result'>
                <li className='result-heading'>{i.title}</li>
                <a href={i.link} className='result-link'>{i.link}</a>
                <li className='result-description'>{i.description}</li>
            </div>
        )}
      </ul>
    </div>
  )
}

export default Home
