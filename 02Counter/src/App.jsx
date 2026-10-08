import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

    let [counter, setCounter] = useState(15)


    const addValue = ()=>
    {
      if(counter < 20)
      {
      counter = counter + 1;
      setCounter(counter);
      }
      else
      {
        alert("Not more than 20 Please.")
      }
    }

        const removeValue = ()=>
    {
      if(counter > 0)
      {
      counter = counter - 1;
      setCounter(counter);
      }
      else
      {
        alert("Counter is negative")
      }
    }



  return (
    <>

      <h1>Hi dost, My Name is Amol Satsangi</h1>
      <h3>Counter Value: {counter} </h3>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>

      </>
  )
}

export default App
