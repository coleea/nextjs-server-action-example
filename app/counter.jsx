'use client'

import { useState } from 'react'

export default function Counter({ inc, dec, double }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 align="center">{`Example of Server Actions`}</h1>
      <h6 align="center">In This Page, Every State Change Depends On Server Actions</h6>

      <h2 align="center" style={{margin : "2em"}}>{`Count Value : ${count}`}</h2>
      <div className="" style={{display : "flex", flexDirection : "column"}}>

          <button
            id="inc"
            onClick={async () => {
              const newCount = await inc(count)
              setCount(newCount)
            }}
            style={{lineHeight : "5em"}}
          >
            +1  (check this in devtools' network tab)
          </button>
          <button
            id="dec"
            onClick={async () => {
              const newCount = await dec(count)
              setCount(newCount)
            }}
            style={{lineHeight : "5em"}}

          >
            -1  (check this in devtools' network tab)
          </button>
          <button
            id="double"
            onClick={async () => {
              const newCount = await double(count)
              setCount(newCount)
            }}
            style={{lineHeight : "5em"}}

          >
            *2  (check this in devtools' network tab)
          </button>
      </div>
    </div>
  )
}