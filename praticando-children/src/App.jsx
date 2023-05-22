import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CenteredCard } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='cards'>
     <CenteredCard>
      <h1>Card 1</h1>
     </CenteredCard>
     <CenteredCard>
      <h1>Card 2</h1>
     </CenteredCard>
     <CenteredCard>
      <h1>Card 3</h1>
     </CenteredCard>
    </div>
    </>
  )
}

export default App
