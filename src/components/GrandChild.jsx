import React from 'react'
import { getState } from '../globalStore'

const GrandChild = () => {

  const {user}=getState()
  return (
    <div style={{border:"1px solid blue", padding:"10px"}}>
      <h5>GrandChild Component</h5>
      <p>Hey, {user} 👋</p>
    </div>
  )
}

export default GrandChild
