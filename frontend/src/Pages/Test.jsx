import React from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import loginImg from '../assets/images/login.png'
import userImg from '../assets/images/user.png'
import '../styles/login.css'
function Test() {
  return (
    <div>

      <Container>
        <Row className='conatner'>
        <Col lg='4'>
        <div className='login-img'>
                  <img src={loginImg}  alt="" />
              </div>
        </Col>
        <Col lg='4' className='logisection'>
        <div className=' d-flex justify-content-between '>
             
              <div className='login-form '>
                <div className='user' >  
                  <img src={userImg} alt="" />
                </div>
                <h2>login</h2>
                <Form className='FROM'  onSubmit={handleClick} >
                  <FormGroup>
                  <input type="email" onChange={HandleState} name='Email' placeholder='Your Email' required id='email'/>
                  </FormGroup>
                  <FormGroup>
                  <input type="text" onChange={HandleState} name='username' placeholder='Your username' required id='username'/>
                  </FormGroup>
                  <FormGroup>
                  <input type="password" name='password' onChange={HandleState} placeholder='Your Password' required id='password' />
                  </FormGroup>
                  <Button  className=' btn-auth' type='submit'>Regester</Button>
                </Form>
                
                <p>dont have an account ? <NavLink to='/Login' >login</NavLink>
                 </p>
              </div>
            </div>
        </Col>
       
        </Row>
      </Container>
    </div>
  )
}

export default Test