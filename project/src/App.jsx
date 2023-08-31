import { useState } from 'react'
import './App.css'
import AllRoutes from './component/AllRoutes'
import Footer from './component/Footer'
import NavBar1 from './component/Navbar1'
// import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar1/>
    {/* <Navbar/> */}
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App;
