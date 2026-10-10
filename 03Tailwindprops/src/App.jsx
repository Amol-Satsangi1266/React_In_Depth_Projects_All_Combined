import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username = "Amol Satsangi"/>
    <Card username = "Jitesh Kumar"/>
    
    </>
  )
}

export default App
