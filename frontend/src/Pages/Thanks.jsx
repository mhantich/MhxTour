import React from 'react'
import { Container, Row,Button, Col } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import '../styles/thanks.css'

function Thanks() {
    const navigate = useNavigate()
    const handle =()=>{
        navigate('/')
    }
  return (
    <section className='mt-5 mb-5 '>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className='thank-top '>
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1>Thank You </h1>
                        <h3>Your Tour Is Booked</h3>
                        <Button onClick={handle}>Back Home</Button>
                    </div>
                  
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Thanks