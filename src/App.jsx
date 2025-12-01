import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent'

function App() {
  const [user, setUser] = useState('Shubham')

  return (
    <>
      <div>
        <h2>Session  1:Prop Drilling Demo</h2>
        <Parent  user={user}/>
      </div>
      
    </>
  )
}

export default App
