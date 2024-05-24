import React from 'react'
import TourCard from '../../shared/TourCard'
import {Col } from "reactstrap";

import Loading from '../../shared/Loading';
import ErrorNot from '../../shared/ErrorNot';
import useDataFetch from '../../hooks/UseDataFetch';



function Featured() {
 const icon =  <svg style={{height:'100px',width:'100px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
 <path d="M12.001 3C16.2854 3 20.2201 4.49683 23.3108 6.99607L22.4994 8H18.001L18.0004 13.571L12.001 21L0.69043 6.99671C3.78127 4.49709 7.71632 3 12.001 3ZM22.001 19V21H20.001V19H22.001ZM22.001 10V17H20.001V10H22.001Z"></path>
</svg>
const {data:Featured,loading,error} = useDataFetch(`${process.env.REACT_APP_BASE_URL}/tours/search/Featured`)


  return (
    <>
    {loading && <Loading/>}
    {error && <ErrorNot erros={error} icons={icon} />}
 
        {
           !loading && !error && Featured.map((item)=>(
                <Col lg='3' className='mb-4' key={item._id}>
                    <TourCard tour={item}/> 
                </Col>
            ))
        }
       
    </>
  )
}

export default Featured