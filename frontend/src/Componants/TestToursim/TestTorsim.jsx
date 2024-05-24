import React, { useRef } from 'react'
 import Slider from 'react-slick'
 import ava01 from '../../assets/images/ava-1.jpg'
 import ava02 from '../../assets/images/ava-2.jpg'
 import ava03 from '../../assets/images/ava-3.jpg'
 import './testTorsim.css'

function TestTorsim() {
  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };
  const sitting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  
  return (
    <Slider {...sitting } ref={sliderRef}>
    <div className="testTorsim  py-4 px-3 card-fans">
            <p className='text-fans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus 
              ipsam minima quasi rem corporis enim a labore maiores 
              voluptas repudiandae soluta ex ut illo aperiam! Corporis 
              non adipisci distinctio!</p>
            <div className='d-flex photo align-items-center gap-3 mt-3'>
                    <img src='./logo512.png'className='w-50 h-50 rounded-2' alt="" />
                    <div>
                      <h6>Jhon Deo</h6>
                      <p>Customer</p>
                    </div>
            </div>
    </div>
    <div className="testTorsim  py-4 px-3 card-fans">
            <p className='text-fans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus 
              ipsam minima quasi rem corporis enim a labore maiores 
              voluptas repudiandae soluta ex ut illo aperiam! Corporis 
              non adipisci distinctio!</p>
            <div className='d-flex photo align-items-center gap-3 mt-3'>
                    <img src='./logo512.png'className='w-50 h-50 rounded-2' alt="" />
                    <div>
                      <h6>Jhon Deo</h6>
                      <p>Customer</p>
                    </div>
            </div>
    </div>
    <div className="testTorsim  py-4 px-3 card-fans">
            <p className='text-fans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus 
              ipsam minima quasi rem corporis enim a labore maiores 
              voluptas repudiandae soluta ex ut illo aperiam! Corporis 
              non adipisci distinctio!</p>
            <div className='d-flex photo align-items-center gap-3 mt-3'>
                    <img src='./logo512.png'className='w-50 h-50 rounded-2' alt="" />
                    <div>
                      <h6>Jhon Deo</h6>
                      <p>Customer</p>
                    </div>
            </div>
    </div>
    
   </Slider>
  )
}

export default TestTorsim