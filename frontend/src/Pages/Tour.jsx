import React, { useEffect, useState } from 'react'
import   '../styles/Tour.css'
import CommeSection from '../shared/CommeSection'
import TourCard from '../shared/TourCard'
import SreachBar from '../shared/SreachBar'
import NewLittle from '../shared/NewLittle'
import { Col, Container, Row } from 'reactstrap'
import useDataFetch from '../hooks/UseDataFetch'
import ErrorNot from '../shared/ErrorNot';
import Loading from '../shared/Loading'
function Tour() {
  const [page,setPage ]=useState(0)
  const [pagecCout,setPageCoute ]=useState(0)
  const {data:tours,loading,error} = useDataFetch(`${process.env.REACT_APP_BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useDataFetch(`${process.env.REACT_APP_BASE_URL}/tours/search/CountTours`)
  const icon =  <svg style={{height:'100px',width:'100px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12.001 3C16.2854 3 20.2201 4.49683 23.3108 6.99607L22.4994 8H18.001L18.0004 13.571L12.001 21L0.69043 6.99671C3.78127 4.49709 7.71632 3 12.001 3ZM22.001 19V21H20.001V19H22.001ZM22.001 10V17H20.001V10H22.001Z"></path>
 </svg>
  useEffect(()=>{
    const pages = Math.ceil(tourCount/8)
    setPageCoute(pages)
    window.scroll(0,0)
  },[page,tourCount])
  

  return (
    <>
      <CommeSection title={"All Tours"}/>
      <section>
        <Container>
          <Row>
            <SreachBar/>
          </Row>
        </Container>
    </section> 
      <section>
        <Container>
       {loading && <Loading/>}
       {error && <ErrorNot erros={error} icons={icon}/>}
        {!loading && !error && <Row>
        {
          tours.map((item)=>(
              <Col lg='3' className='mb-4' key={item._id}>
                  <TourCard tour={item}/> 
              </Col>
          ))
      }
      <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                    {[...Array(pagecCout).keys()].map(number=>(
                      <span key={number} onClick={()=>setPage(number)} className={page===number?'active':''}>
                                {number+1}
                          </span>
                        ))}
              </div>
      </Col>
        </Row>}
        </Container>
    </section> 
    <NewLittle/>
    </>
  )
}

export default Tour