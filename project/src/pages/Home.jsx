import React from 'react'
import project from '../assets/project.mp4';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer;
import Grid from '../component/Grid';
import Card2 from '../component/Card2';
const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="Home">
        <video src={project} autoPlay muted loop />
        <div className="content">
          <div className="con">
            {" "}
            <h1>WORK WONDERS</h1>{" "}
          </div>
          <h2>4 SHIRTS OR POLOS FOR $259</h2>
          <h2>SAVE UP TO $215</h2>
          <button>Shop New Collection</button>
          <button>Shop New Shirts</button>
        </div>
      </div>
      <Footer />
        <Grid/>
        <Card2/>
        <Footer/>
    </div>
  );
}

export default Home
