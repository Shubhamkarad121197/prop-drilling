import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div style={{border:'1px solid gray',padding:'10px'}}>
        <h3>Parent Component</h3>
        <Child/>
      
    </div>
  )
}

export default Parent
