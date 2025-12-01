import React from 'react'
import GrandChild from './GrandChild'
import { setUser } from '../globalStore'

const Child = () => {
  return (
    <div style={{border:"1px solid green", padding:"10px"}}>
      <h4>Child Component</h4>
     <button onClick={() => setUser("Amit")}>Change User to Amit</button>

     <br/>
     <GrandChild/>
    </div>
  )
}

export default Child
