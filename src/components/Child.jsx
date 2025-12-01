import React from 'react'
import GrandChild from './GrandChild'

const Child = ({user}) => {
  return (
    <div style={{border:"1px solid green", padding:"10px"}}>
      <h4>Child Component</h4>
      <GrandChild user={user} /> {/* Passing to final component */}
    </div>
  )
}

export default Child
