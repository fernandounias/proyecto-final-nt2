import React from 'react'
import ImageSlider from './ImageSlider'

const SliderBox = ({images , size}) => {

    const containerStyle = {
        width: size.width,
        height: size.height,
        margin: '0 auto',
        position: 'relative',
        left: '4px'
    }
  return (
    <div style={containerStyle}>
      <ImageSlider images={images}/>
    </div>
  )
}

export default SliderBox