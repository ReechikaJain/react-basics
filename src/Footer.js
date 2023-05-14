import React, { useState } from 'react'

export default function Footer() {
    const [data, setdata] = useState('Reechika.....')
    
  return (
    <div>
      <h1>Bye, {data}</h1>
      <button onClick={()=>{
          setdata('Something else .....')
      }}>
      </button>
    </div>
  )
}