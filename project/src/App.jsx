import { useState } from 'react'
import './App.css'
import AllRoutes from './component/AllRoutes'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App;
