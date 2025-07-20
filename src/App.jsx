import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfoBox from './InfoBox'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <InfoBox />
    </>
  )
}

export default App
