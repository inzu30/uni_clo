import React from 'react'
import Mycard from './Mycard.jsx'
import './ImageCorousel.css'
const ImageCorousel = () => {
  let box=document.querySelector('.product-container');
  const btnpressprev=()=>{
    let width =box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  }
  const btnpressnext=()=>{
    let width =box.clientWidth;
    box.scrollLeft = box.scrollLeft+width;
    console.log(width);
  }
  return (
    <div className='product-corousel'>
    <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
    <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>

    <div className='product-container'>
     <Mycard cardno='1'/>   
     <Mycard cardno='2'/>
     <Mycard cardno='3'/>
     <Mycard cardno='4'/>
     <Mycard cardno='5'/>
     <Mycard cardno='6'/>
     <Mycard cardno='7'/>
     <Mycard cardno='8'/>
    </div>
    </div>
  )
}

export default ImageCorousel