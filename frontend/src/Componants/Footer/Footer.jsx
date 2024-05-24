import React from 'react'
import { Container, Row,Col,ListGroup,ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './Footer.css'

function Footer() {
  const years= new Date().getFullYear()

  const navLinks = [
    {  
      path: "/",
      display: "Home"
    },
    {  
      path: "/about",
      display: "About"
    },
    {  
      path: "/tour",
      display: "Tour"
    },
  ];
  const navLinks2 = [
    {  
      path: "/gellery",
      display: "Gellery"
    },
    {  
      path: "/Regester",
      display: "Regester"
    },
    {  
      path: "/Login",
      display: "Login"
    },
  ];
  return (
  <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className='firstItem' >
          <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, eos?</p>
            <div className='socail-media d-flex align-items-center gap-4'>
                  <span>
                    <Link to='#'>
                    <i className="ri-youtube-line"></i></Link>
                  </span>
                  <span>
                    <Link to='#'>
                    <i className="ri-facebook-circle-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                    <i className="ri-twitter-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to='#'>
                    <i className="ri-github-line"></i>             
                     </Link>
                  </span>

            </div>
          </div>
      
        </Col>
        <Col lg='3'>
          <h5 className='footer-quick'>Discover</h5>
          <>
            {
              navLinks.map((item,index)=>(
                <ListGroupItem key={index}>
                  <Link className='links' to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </>
        </Col>
        <Col lg='3'>
          <h5 className='footer-quick'>Quick Links</h5>
          <>
            {
              navLinks2.map((item,index)=>(
                <ListGroupItem key={index}>
                  <Link className='links' to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </>
        </Col>
      
        <Col lg='3'>
          <h5 className='footer-quick'>Quick Links</h5>
          <>
           <div className='footer-icons gap-2 '>
            <i className="ri-link"></i>
            <h6>Adresse :</h6>
            <p>Morocco Belfaa</p>
           </div>
          </>
          <>
           <div className='footer-icons gap-2'>
                <i className="ri-mail-line"></i>
                <h6>Email :</h6>
                <p>mhantich@gmail.com</p>
           </div>
          </>
          <>
           <div className='footer-icons gap-2' >
                <i className="ri-phone-line"></i>
                <h6>Phone :</h6>
                <p>m0666666</p>
       
           </div>
          </>
        </Col>
      <Col>
            <p className='footer-copyright'>
              CopyRight {years},desgin and developed by <span>Mhantich</span> 
            </p>
        </Col>
       
      </Row>
    </Container>
  </footer>
  )
}

export default Footer