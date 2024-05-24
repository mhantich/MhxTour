import React, { useState } from 'react'
import  './SearchBra.css'
import { Container, Row,FormGroup,From, Form } from "reactstrap";
import { useNavigate } from 'react-router-dom';



function SreachBar(){
    const  [locationValue,setLocation] = useState('')
    const  [Distance, setDistance] = useState(0)
    const  [people,setnumber] = useState(0)

    const navigate = useNavigate()
    const handleLocation=(e)=>{
      setLocation(e)
      }
      const handleDistance=(e)=>{
        setDistance(e)
      }
      const handleNumer=(e)=>{
        setnumber(e)
      }
      const handleSearch = async () => {
        if (locationValue === "" || people === "" || Distance === "") {
          alert("Please fill in all fields");
          
        }

              const res = await fetch(`${process.env.REACT_APP_BASE_URL}/tours/search/getToursBySearching?city=${locationValue}&distance=${Distance}&maxGroupSize=${people}`);
              if (!res.ok) {
                alert('Failed to fetch data');
              }
              const result = await res.json();
              
              navigate(`/tour/SearchList?city=${locationValue}&distance=${Distance}&maxGroupSize=${people}`, { state:result.data });
         
      }

    return (
    
            <div className='search__bar mt-4'>
        <Form className='form'>
            <div className="inputs">
                <i className="ri-map-pin-line"></i>
                <label >Location</label>
          
                <input value={locationValue}  onChange={(e)=>{handleLocation(e.target.value)}} type="text" placeholder='where are you going' />
            </div>
      
              <div className="inputs">
                <i className="ri-pin-distance-line"></i>
                <label >distance</label>
               
                        <input onChange={(e)=>{handleDistance(e.target.value)}}  type="number" value={Distance === 0 ? '' : Distance} placeholder='Distance k/m' />
              </div>
    
             <div className="inputs">
                <i className="ri-team-line"/>
                <label >People</label>
                
                <input onChange={(e)=>{handleNumer(e.target.value)}} value={people} type="number" placeholder='0' />
            </div>
          <button className='btnn' type='button' onClick={handleSearch}>
            <i className="ri-search-line"></i>
          </button>
        </Form>
</div>
   
  )
}

export default SreachBar