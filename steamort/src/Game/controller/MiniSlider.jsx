import React, {useEffect} from 'react'
import left from './assets/left-s.png'
import right from './assets/right-s.png'


const MiniSlider = ({ images }) => {

    useEffect(()=>{
        const carousel = document.getElementById('carousel')
        let IDS = false, prevPageX, prevScrollLeft

        const dragStart = (e) => {
            //updating global variables value on (mouse down event) when clicked in the slider
            IDS = true
            prevPageX = e.pageX
            prevScrollLeft = carousel.scrollLeft
            //prevScrollLeft gives the number of px of element content that is scrolled horizontally
        }
        const dragMechanic = (e)=>{
            // scrolling images/carousel to left according to mouse pointer
            if(!IDS) return
            e.preventDefault()
            let positionDiff = e.pageX - prevPageX
            // carousel.scrollLeft = e.pageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
        }
        const dragStop = (e) => {
            IDS = false
        }
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragMechanic);
        carousel.addEventListener("mouseup", dragStop);
    },[]);

    const bodyStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // minHeight: '100vh',
        minHeight: '160px',
        padding: '0 10px',

    }
    const wrapperStyle = {
        maxWidth: '660px',
        backgroung: '#fff',
        position: 'relative'
    }
    const carouselStyle = {
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        fontSize: '0px',
        overflow: 'hidden',
        //-
        display: 'flex'
    }
    const imageStyle = {
        height:'120px',
        // objectFit: 'cover',
        marginLeft: '6px',
        //--
        width: '214px',
        flexShrink: '0',
        backgroundSize: '214px 120px',
        borderRadius: '10px'
    }
    const iconStyle = {
        display: 'block',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        margin: '0px',
        textAlign: 'center',
        boxSizing: 'border-box',
        lineHeight: '39px',
        position: 'absolute',
        cursor: 'pointer'
    }
    const iconLStyle = {
        ...iconStyle, padding: '0px 3px 0px 0px',
        // left: '-27px', transform: 'translatey(100%)',
        left: '-10px', transform: 'translatey(100%)',
        // backgroundImage: `url(${process.env.PUBLIC_URL + 'left-S.png'})`,
        backgroundImage: `url(${left})`,
        bottom: '86px'
    }
    const iconRStyle = {
        ...iconStyle, padding: '0px 0px 0px 3px',
        // right: '-23px',
        right: '-7px',
        transform: 'translatey(-200%)',
        // backgroundImage: `url(${process.env.PUBLIC_URL + 'right-s.png'})`,
        backgroundImage: `url(${right})`,
        bottom: '-34px'
    }

    // ----------------------------------------------
    let src = (image) => {
        let link = image.path_thumbnail.split('?')
        return link[0]
    }
    
  return (
    <div style={bodyStyle}>
        <div style={wrapperStyle}>
            <p style={iconLStyle} ></p>
            <div style={carouselStyle} id='carousel'>
                {images.map((image) => {
                    let link = src(image)

                    return(
                        <div key='image.id' style={{...imageStyle, backgroundImage:`url(${link})`}}></div>
                    )
                    })}
            </div>

            <p style={iconRStyle}></p>
        </div>
    </div>
  )
}

export default MiniSlider