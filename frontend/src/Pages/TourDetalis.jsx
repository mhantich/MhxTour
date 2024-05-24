import React, { useState } from 'react'
import'../styles/TourDetalis.css'
import { Container, Row,Col,Form,ListGroup } from "reactstrap";


import { useParams } from 'react-router-dom';
import Booking from '../Componants/Booking/Booking';
import useDataFetch from '../hooks/UseDataFetch';
import ErrorNot from '../shared/ErrorNot';
import Loading from '../shared/Loading';


function TourDetalis() {
  
  
  const { id } = useParams();

  const {data:Featured,loading,error} = useDataFetch(`${process.env.REACT_APP_BASE_URL}/tours/${id}`)

  // Try to find the item with the specified id
  let [avrRating,setavrRating]=useState(0)
  let [tottlerating,settottlerating]=useState(0)
    
  // Log the result of the find operation
  if(Featured){
 
    if(Featured?.reviews){
      tottlerating = Featured?.reviews?.reduce((acc,item)=>acc+item.rating,0 )
     
      avrRating = tottlerating === 0 ? '': tottlerating===1?tottlerating : tottlerating/Featured?.reviews?.length
    }
    
  }

  
   const icon =  <svg style={{height:'100px',width:'100px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
   <path d="M12.001 3C16.2854 3 20.2201 4.49683 23.3108 6.99607L22.4994 8H18.001L18.0004 13.571L12.001 21L0.69043 6.99671C3.78127 4.49709 7.71632 3 12.001 3ZM22.001 19V21H20.001V19H22.001ZM22.001 10V17H20.001V10H22.001Z"></path>
  </svg>
 

 
  return (
    <>
       <section> 
           <Container>
           {loading && <Loading/>}

          {error && <ErrorNot erros={error} icons={icon} />}
              {!loading && !error && <Row>
                    <Col sm='12' lg='8'>
                      <div className='tour-content'>
                        <img src={Featured?.photo}   />                
                                 <div className='tour-info'>
                                <h2>{Featured?.title}</h2>
                       <div className='d-flex align-items-center gap-4'>
                                <span className='tour-rating d-flex align-items-center gap-1 '>
                                        <i className="ri-star-fill"></i>
                                        {avrRating===0?'':avrRating?.toFixed(1)} 
                                        {tottlerating ===0 ?'not rated ':<span>({Featured?.reviews?.length })</span>}
                                        
                                        </span>
                                        <span className='d-flex gap-2'> 
                                          <i className="ri-pushpin-2-line"></i>{Featured?.address}
                                          </span>
                                </div>
                                <div className=' tour-icons d-flex gap-2'>
                                      <span className='tour-rating d-flex align-items-center gap-2 '>
                                            <i className="ri-map-pin-line"></i>
                                                  {Featured?.city}
                                      </span>
          
                                      <span className=' d-flex align-items-center gap-2'> 
                                      <i className="ri-money-dollar-circle-line"></i>
                                           
                                            <span> ${Featured?.price} <span className='price-text'>/Per Person</span></span>
                                      </span>
                                      <span className=' d-flex align-items-center gap-2'> 
                                      <i className="ri-group-line"></i>
                                           
                                          {Featured?.maxGroupSize}
                                      </span>
                                     
                                </div>
                                <div className=' tour-desc mt-2  d-flex gap-2'>
                                     <h3>Desciptin</h3>
                                     {Featured?.desc}
                                     
                                </div>
                            </div>
                      </div>
                    </Col>
                    <Col  lg='4'>
                               <Booking tour={Featured} avag={avrRating?.toFixed(1)} tottal={tottlerating}/>
                   </Col>
                </Row>}
        </Container> 
     
    </section>  
    </>
  )
}

export default TourDetalis