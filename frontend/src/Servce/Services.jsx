import React from 'react'
import ServicesCardd from './ServicesCardd'
import { Container, Row,Col } from "reactstrap";
import WeatherImg from '../assets/images/weather.png'
import guide from '../assets/images/guide.png'
import custmaziedImg from '../assets/images/customization.png'

function Services() {
  const seriveData=[
    {
      imgUrl:WeatherImg,
      title:'Cucllate weather',
      desc:'Lorem ipsum dolor, sit  Veniam saepe, quae quidem ipsa culpa nesciunt libero aliquid laboriosam quos tempore esse s '
    },{
      imgUrl:guide,
      title:'Best tour',
      desc:'Lorem ipsum dolor, sit amet  Veniam saepe, quae quidem ipsa culpa nesciunt libero aliquid laboriosam quos tempore esse s '
    },{
      imgUrl:custmaziedImg,
      title:'customaztion',
      desc:'Lorem ipsum dolor, sit amet  Veniam saepe, quae quidem ipsa culpa nesciunt libero aliquid laboriosam quos tempore esse s '
    }
  ]
  return (
    <>
    
          {
            seriveData.map((items,index)=>(
              <Col lg="3" key={index}>
                  <ServicesCardd data={items} />
              </Col>
            ))
          }
    </>
  )
}

export default Services