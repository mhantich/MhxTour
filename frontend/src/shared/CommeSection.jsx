import React from 'react'
import './CommeSection.css'
import { Container, Row,Col } from "reactstrap";

function CommeSection({title}) {
  return (
   <section className='commonSection'>
    <Container>
        <Row>
            <Col  lg='12'>
                <h1>{title}</h1>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default CommeSection