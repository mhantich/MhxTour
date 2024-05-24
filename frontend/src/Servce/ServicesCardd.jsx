import React from 'react'
import './ServicesCard.css'
function ServicesCardd({data}) {

  const {imgUrl,title,desc}=data

  return (
    <div className='service__item mt-2'>
        <div className='service__img'>
      
             <img src={imgUrl} alt="" />       
        </div>
        <h5> {title}</h5>
        <p> {desc}</p>
    </div>
  )
}

export default ServicesCardd