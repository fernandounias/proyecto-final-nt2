import React, {useState} from 'react'
import left from './assets/left.png'
import right from './assets/right.png'


const ImageSlider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // -----------------------
  const slideStyle = {
    width: '100%' ,
    height: '100%' ,
    borderRadius: '10px' ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${images[currentIndex].path_full})`
  }
  const sliderStyle = {
    height: '100%' ,
    position: 'relative'
  }
// -----------------------
  const ArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    zIndex: '1',
    cursor: 'pointer',
    height:'50px',
    width: '50px'
  }
  const leftArrowStyle = {
    ... ArrowStyle,
    left: '32px',
    backgroundImage: `url(${left})`
  }
  const rightArrowStyle = {
    ... ArrowStyle,
    right: '32px',
    backgroundImage: `url(${right})`
  }
  // -----------------------
const previous = () => {
  const first = currentIndex === 0
  const newIndex = first ? images.length - 1 : currentIndex - 1 
  setCurrentIndex(newIndex)
};
const next = () => {
  const last = currentIndex === images.length - 1
  const newIndex = last ? 0 : currentIndex + 1 
  setCurrentIndex(newIndex)
}

  return (
    <div style={sliderStyle}>
        <div style={leftArrowStyle} onClick={previous}></div>
        <div style={rightArrowStyle} onClick={next}></div>
      <div style={slideStyle}></div>
    </div>
  );
}

export default ImageSlider