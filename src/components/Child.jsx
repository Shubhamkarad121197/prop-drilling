import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div style={{border:"1px solid green", padding:"10px"}}>
      <h4>Child Component</h4>
      <GrandChild /> {/* Passing to final component */}
    </div>
  )
}

export default Child
