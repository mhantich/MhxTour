import React from 'react'
import '../styles/home.css'
import { Container, Row,Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import vidoehero from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitles from '../shared/Subtitles';
import SreachBar from '../shared/SreachBar';
import Services from '../Servce/Services';
import Featured from '../Componants/Featured/Featured';
import exrenceImg from '../assets/images/experience.png'
import MasomryGellery from '../Componants/ImageGallery/MasomryGellery';
import TestTorsim from '../Componants/TestToursim/TestTorsim'
import NewLittle from '../shared/NewLittle';
function Home() {
  
  return (
    <>
    
    <div className='hero mt-5'>
      <Container>
        <Row>
          <Col lg="6" md='12'>
               <div className='section-container gap-2'>
                  <div className="section-img d-flex justify-content-start align-items-center">
                    <Subtitles title={'Know Before You Go'}/>
                    <img src={worldImg} alt='' />
                  </div>
                  <h1 >Travlling opnes the door to creating
                    <span className=''>memories</span>
                  </h1>
                  <p>Lorem ipsum dolor sit amet 
                    consectetur, adipisicing elit. Incidunt iste impedit, molestias provident recusandae dolorum inventore fuga adipisci, repellat perspiciatis modi cum dolor
                    aperiam delectus illum, id deleniti dolores commodi.
                  </p>
            </div>
          </Col >
                <Col lg='2' md='12'  >
                <div className='section-box m-1 '>
                  <img src={heroImg} alt=" " />
                </div>
                </Col>

                <Col lg='2' md='12' className='mt-2'  >
                <div className='section-box gap-2  m-1'>
                  <video autoPlay controls src={vidoehero} alt=" " />
                </div>
                </Col>

                <Col lg='2' md='12' className='mt-3' >
                <div className='section-box gap-2  m-1'>
                  <img src={heroImg2} alt=" " />
                </div>
                </Col>
        </Row>
      </Container>
    

    </div>  
 
     
               <SreachBar/>
       
      
    {/* ======== card services ======== */}
     <section>
        <Container>
          <Row>
            <Col lg='3' className='gap-2'>
            <h5 className='subtitlet '>what we serve</h5>
            <h2 className='services__title'>we offer our best services</h2>
           
            </Col>
            <Services/>
          </Row>
        </Container>
     
    </section>  
        {  /* ======== end card services ======== */}

  {/* ======== card futured  ======== */}
    <section>
        <Container>
          <Row>
            <Col lg='12 gap-2'>
            <Subtitles title={'explore'}/>
            <h2 className='featured_tour_title'>Our Featured tours</h2>
            </Col>
            <Featured/>
          </Row>
        </Container>
     
    </section>  
   {  /* ======== end card services ======== */}

  {/* ======== card exprinces  ======== */}
  
        <Container>
          <Row>
            <Col lg='6'>
            <div className="expressce">
                 <Subtitles title={'Exprience'}/>
                <h2 className='services__title'> Wuth Our All Experence <br /> We Will Serve You </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Veniam saepe, qun expedita.</p>
            </div>
            <div className='counter__warpping d-flex align-items-center gap-5'>
                  <div className='counter__box'>
                      <p>12k+</p>
                      <h6>
                        Successfull Trip 
                      </h6>
                  </div>
                  <div className='counter__box'>
                      <p>2k+</p>
                      <h6>
                        Regular Clients
                      </h6>
                  </div>
                  <div className='counter__box'>
                      <p>12</p>
                      <h6>
                        Years Exprenice 
                      </h6>
                  </div>
                 </div>
            </Col>

            <Col lg='6'>
              <div className='exprence-img'>
              <img className='img' width={'90%'} src={exrenceImg} alt="" />
              </div>
            </Col>
          
          </Row>
        </Container>
     
 
   {  /* ======== end card exprinces ======== */}

     {/* ======== gallery  ======== */}
   <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitles title={'Gallery'}/>
            <h2 className='featured_tour_title'> Visit Our Gellary tours</h2>
            </Col>
          
            <Col lg='12'>
                <MasomryGellery/>
            </Col>
          </Row>
        </Container>
     
    </section>  
   {  /* ======== end gallery ======== */}


     {/* ======== fans  ======== */}

        <Container className='dd'>
          <Row>
            <Col lg='12'>
            <Subtitles title={'Fans love'}/>
            <h2 className='services__title{'> What Our Fans Say About us </h2>
            </Col>
            <TestTorsim/>
            <Col lg='12'>
               
            </Col>
          </Row>
        </Container>
    
 
   {  /* ======== end fans ======== */}

   <NewLittle/> 
    </>
  )
}

export default Home