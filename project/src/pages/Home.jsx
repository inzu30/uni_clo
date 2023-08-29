import React from 'react'
import project from '../assets/project.mp4';

const Home = () => {
  return (
        <div className="Home">
        <video src={project} autoPlay muted loop/>
        <div className="content">
            <div className="con"> <h1>WORK WONDERS</h1> </div>
            <h2>4 SHIRTS OR POLOS FOR $259</h2>
            <h2>SAVE UP TO $215</h2>
            <button>Shop New Collection</button>
            <button>Shop New Shirts</button>
        </div>
        </div>
  )
}

export default Home
