import React from 'react';
import galleryImges from './ImageGallery';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function MasomryGellery() {
  return (
    <div className='sytle' >
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImges.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className='gellery'
            // Apply your animation class here
            style={{
              width: '100%',
              display: 'block',
              height:'100%',
              borderRadius: '10px',
              objectFit:"cover"
            //   animationDelay: `${index * 0.3}s`,
        
            }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
    </div>
  );
}

export default MasomryGellery;
