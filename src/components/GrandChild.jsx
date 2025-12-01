import React from 'react'

const GrandChild = ({user}) => {
  return (
    <div style={{border:"1px solid blue", padding:"10px"}}>
      <h5>GrandChild Component</h5>
      <p>Hey, {user} 👋</p>
    </div>
  )
}

export default GrandChild
