import React from 'react';
import { Carousel } from 'antd';

const ImageCarousel = () => {
  return (
    <Carousel autoplay autoplaySpeed={2000} style={{ width: '100%', margin: 'auto' }}>
      <div>
        <img src="https://topkin.ru/wp-content/uploads/2017/10/tomswallpapers.com-15649.jpg" alt="Photo 1" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-19.jpg" alt="Photo 2" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-20.jpg" alt="Photo 3" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
      </div>
      <div>
        <img src="https://s1.1zoom.ru/b5050/389/Cats_British_Shorthair_438784_1600x1200.jpg" alt="Photo 4" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
