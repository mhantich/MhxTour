
import React, { useState,useContext } from 'react'
import { Col, Container, Row ,Form ,FormGroup,Button} from 'reactstrap'
import { NavLink, useNavigate} from 'react-router-dom'
import regsterImg from '../assets/images/register.png'
import userImg from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
function Regester() {
  
  const [Credentails,setCredentials]=useState({
    email:undefined,
    username:undefined,
    password:undefined,
})
const {dispatch}=useContext(AuthContext)
const navigate = useNavigate()
const HandleState = (e) =>{
setCredentials(prevCredentials => ({
 ...prevCredentials,
 [e.target.id]: e.target.value
}));
}

const handleClick =async(e)=>{
       e.preventDefault()
       
       try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/regester`,{
          method:'post',
          headers:{
            'content-type':'application/json'
          },body:JSON.stringify(Credentails)
        });
        const result = await res.json();
        if (!res.ok) {
          alert(result.messges);
        }
        dispatch({type:'REGESTER_SUCCESS'})
        navigate('/Login')
       } catch (error) {
        alert(error);
       }
      
       
}
  return (
    <div>

      <Container>
        <Row className='conatner'>
        <Col lg='4'>
        <div className='login-img'>
                  <img src={regsterImg}  alt="" />
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

export default Regester