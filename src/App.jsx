import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { PlantsPage } from './PlantsPage'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <PlantsPage />
      <Footer />
    </div>
  )
}

export default App
