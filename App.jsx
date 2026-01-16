// 1) ------------- JSX (HTML + JS Together) ------------ //

# JSX is not HTML — it’s JavaScript syntax.

const isHot = true

return (
  <h2>{isHot ? "Hot Weather" : "Cool Weather"}</h2>
)

// 2) ---------------- Props (Data Flow) -----------------//

# Props = data passed to components

<Card name="Tenjeeb" temp = "37°C" condition="Hot"/> // Argument from parent component

// Child component

// 1st method
  const Card = ({name, temp, condition}) => {
  return (
    <div>
      I am a card component.
      <h3>The data from the parent are: {name}, {temp}, {condition}</h3>
    </div>
  )
}

// 2nd method
    const Card = (props) => {
  return (
    <div>
      I am a card component.
      <h3>The data from the parent are: {props.name}, {props.temp}, {props.condition}</h3>
    </div>
  )
}


// 3) --------------- Use State ----------------- //
// State = Data the changes over time

import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

  
// 4) --------------- Event handling-------------- //
<button onClick={handleClick}>Click</button>

  
// 5) --------------- Conditional Handling -------------- //
import { useState } from 'react'

function App() {
 const [loading, setLoading] = useState(true)

  return (
    <>
  {loading && <p>I will only appear when Loading is True</p>}  // Logical Operator

  {loading ? <p>Loading state is True</p> : <p>Loading state is false</p> }  // Ternary operator
    </> 
  )
}

// 5) -------------- Use Effects - (API Magic) -------------------//
// You use this for: Fetching data, Timers, DOM interactions

import { useState, useEffect } from 'react'

function App() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const data = await res.json()
      setPost(data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      {post ? <p>Post title {post.title} </p> : <p>Loading...</p> }
      </>
  )
}




