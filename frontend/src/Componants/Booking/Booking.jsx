import React, { useState,useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

import   './Booking.css'
import { Form,ListGroup,ListGroupItem ,FormGroup} from "reactstrap";
function Booking({tour,avag,tottal}) {
    const{ _id, price, reviews }=tour
    const {user}=useContext(AuthContext)
      const [Credentails,setCredentials]=useState({
        UserID:user && user?._id,
        tourId:_id,
        userEmail:user && user?.email,
        fullNsame:'',
        phone:'',
        guest:1,
        bookAt:'',
        tottal:0

     })
     const naviagte = useNavigate()

     const HandleState = (e) =>{
      setCredentials(prevCredentials => ({
        ...prevCredentials,
        [e.target.id]: e.target.value
      }));
     }
     const service = 10;
            useEffect(()=>{
                const totalAmount = price * Number(Credentails.guest) ;
                
                setCredentials(prevCredentials => ({
                  ...prevCredentials,
                  tottal: totalAmount, 
                }));
               
            },[price, Credentails.guest, setCredentials])
  

     
     const handleClick =async(e)=>{
              e.preventDefault()
     
              
             
              try {
                if(!user ||user===undefined ||user===null ){
                  
                  setTimeout(()=>{
                    naviagte('/Login')
                  },3000)
                  return alert('please sing in ...')
                }
                const res = await fetch(`${process.env.REACT_APP_BASE_URL}/bookings`,{
                  method:'post',
                  headers:{
                    'content-type':'application/json'
                  },
                  credentials: 'include',
                  body:JSON.stringify(Credentails)
                });
  
                const result = await res.json();
                if(res.ok){
                  alert(result.messges)
                }
                naviagte('/succsed')
           
               } catch (error) {
               
               }
              
              
     }



   
   
 
  return (
    <div className='Booking'>
          <div className='d-flex booking-top align-items-center justify-content-between'>
                <h3>
                    ${price} <span>/Per Person</span>
                </h3>
                <span className='tour-rating d-flex align-items-center gap-1 '>
                      <i className="ri-star-fill"></i>
                      {avag===0?'':avag} 
                      {tottal ===0 ?'not rated ':<span>({reviews.length })</span>}                    
          </span>
          </div>
          <div className='d-flex bookinf-center  align-items-center mt-2 mb-3'>
            <h4>Infomation</h4>
          <Form className='from-book p-2'>
              <FormGroup className=''>
                   <input onChange={HandleState} type="text" id='fullNsame' placeholder='Full Name' />
              </FormGroup>
              <FormGroup>
                   <input onChange={HandleState} type="number" id='phone' placeholder='Phone' />
              </FormGroup>
              <FormGroup className='d-flex gap-2'>
                   <input onChange={HandleState} type="date" placeholder='Choose Date'  id='bookAt' />
                   <input onChange={HandleState} type="number" id='guest' placeholder='Guest' />
              </FormGroup>
          </Form>
         
          </div>
          <div className='booking-bottom mt-3 '>
            <ListGroup>
               <ListGroupItem className='border-0 px-0'>
                      <h5>${price}  x 1 Person : </h5>
                      <span>${price}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0'>
                      <h5>Service Charge :</h5>
                      <span>${service}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0'>
                      <h5>Total :</h5>
                      <span>${Credentails.tottal}</span>
               </ListGroupItem>
            </ListGroup>
            <button onClick={handleClick}>Book Now</button>
          </div>
    </div>
  )
}

export default Booking