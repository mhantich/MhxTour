import React from 'react'
import './tourCrad.css'
import { Card,CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
function TourCard({tour}) {
  const{ _id, title,price,city, reviews,photo,featured }=tour
  const tottlerating = reviews?.reduce((acc,item)=>acc+item.rating,0 )
  const avrRating = tottlerating === 0 ? '': tottlerating===1?tottlerating : tottlerating/reviews.length

  return (
    <div className='tour__card mt-4'>
          <Card className='cardtop'>
            <div className="tour__img red">
              <img src={photo} alt="tour-photo" />
           { featured &&  <span>Featured</span>}
            </div>

          </Card>
          <CardBody >
            <div className='cardbuttom'>
            <div className="card__top d-flex align-items-center justify-content-between">
            
              <span className='tour-location d-flex align-items-center gap-1 '>
              <i className="ri-map-pin-line"></i>
              {city}
              </span>

              <span className='tour-rating d-flex align-items-center gap-1 '>
               <i className="ri-star-fill"></i>
               {avrRating===0?'':avrRating.toFixed(1)} 
               {tottlerating ===0 ?'not rated ':<span>({reviews.length })</span>}
              
              </span>

            </div>

            <h5 className="tour-title">
              <Link to={`/tour/${_id}`}>{title}</Link>
            </h5>

            <div className="card-details d-flex align-items-center justify-content-between mt-3">
                    <h5>
                      ${price}
                      <span>/Per Person</span>
                    </h5>

                    <button className='booking-btn'>
                    <Link to={`/tour/${_id}`} >Book Now </Link>
                    </button>
            </div>
            </div>
          </CardBody>
    </div>
  )
}

export default TourCard