import React from 'react'
import './NewLittle.css'
import { Container, Row,Col } from "reactstrap";
import maleTorsim from '../assets/images/male-tourist.png'
function NewLittle() {
  return (
    <div className='section-sub'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className='sub-first-group'>
                    <div className="newletter">
                        <h2> Subscribe to get usful <span>Travlling</span>  information </h2>
                    </div>
                    <div className="newlittle--input">
                        <input type="text"   placeholder='Enter Your Emails ' />
                        <button className="btn_little ">Subscribe</button>
                       
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident <br />
                     repellendus reiciendispraesentium perspiciatis atque, repellendus reiciendis </p>
                </div>
            </Col>
       
            <Col lg='6' className='photo'>
                <div className="newletter--Img">
                    <img src={maleTorsim} alt="" />
                </div>
            </Col>
            
        </Row>
    </Container>
    </div>

 
  )
}

export default NewLittle