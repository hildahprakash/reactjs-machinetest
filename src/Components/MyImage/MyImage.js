import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const MyImage = (image) => (
  <div>
    <LazyLoadImage
      src={image.src} 
      effect="opacity"
      width={image.width} />
    <span>{image.caption}</span>
  </div>
);
 
export default MyImage;