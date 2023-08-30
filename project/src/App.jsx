import { useState } from 'react'
import './App.css'
import AllRoutes from './component/AllRoutes'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App;
