import React, { useState,useContext } from 'react'
import { Col, Container, Row ,Form ,FormGroup,Button} from 'reactstrap'
import { NavLink,useNavigate} from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../assets/images/login.png'
import userImg from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
function Login() {
  const navigate = useNavigate()
  const {dispatch}=useContext(AuthContext)
 

    const [Credentails,setCredentials]=useState({
         email:undefined,
         password:undefined
   })
 
   const HandleState = (e) =>{
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [e.target.id]: e.target.value
    }));
   }
 
   const handleClick =async(e)=>{
            e.preventDefault()
           
            try {
              const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`,{
                method:'post',
                headers:{
                  'content-type':'application/json'
                },
                credentials: 'include',
                body:JSON.stringify(Credentails)
              });

              const result = await res.json();
              if (!res.ok) {
                dispatch({type:'LOGIN_FAILER',payload:result.messges})
              }else{
                dispatch({type:'LOGIN_SUCCESS',payload:result.data})
                navigate('/')
              }
             
             } catch (error) {
              dispatch({type:'LOGIN_FAILER',payload:error.messges})
             }
            
   }
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
                <Form className='FROM'onSubmit={handleClick} >
                  <FormGroup>
                  <input type="text" onChange={HandleState} name='Email' placeholder='Your Email' required id='email' />
                  </FormGroup>
                  <FormGroup>
                  <input type="password" name='password' onChange={HandleState} placeholder='Your Password' required id='password' />
                  </FormGroup>
                  <Button  className=' btn-auth' type='submit'>Login</Button>
                </Form>
                
                <p>dont have an account ? <NavLink to='/Regester' >regest</NavLink>
                 </p>
              </div>
            </div>
        </Col>
       
        </Row>
      </Container>
    </div>
  )
}

export default Login