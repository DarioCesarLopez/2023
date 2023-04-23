import React, { useContext } from 'react';

import { ImageContext } from '../../App';

export const ImageList = () => {
  const { images } = useContext(ImageContext)

  return (
    <div className='image-list'>
      {images.map(image=>(
        <img style={{width:'180px'}} key={image.id} src={image.url} alt={image.title} />
      ))}
    </div>
  )
}