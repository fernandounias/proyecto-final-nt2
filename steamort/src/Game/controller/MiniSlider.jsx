import { width } from '@mui/system';
import React, {useEffect} from 'react'


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
            // console.log(e.pageX)
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

        // return () => {
        //     // carousel.removeEventListener("mousedown", dragStart);
        //     carousel.removeEventListener("mousemove", dragMechanic);
        // };
    },[]);

    const bodyStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // minHeight: '100vh',
        minHeight: '160px',
        background: '#343F4F',
        padding: '0 10px',

    }
    const wrapperStyle = {
        // maxWidth: '664px',
        maxWidth: '660px',
        // maxWidth: '700px',
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
        // fontSize: '30px',
        // color: '#4c4c4c',
        // color: '#fff',
        // background: '#fff',
        // background: 'rgba(255, 255, 255, 0.2)',
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
        // left: '-15px', transform: 'translatey(100%)',
        left: '-27px', transform: 'translatey(100%)',
        backgroundImage: `url(${process.env.PUBLIC_URL + 'left-S.png'})`,
        bottom: '86px'
    }
    const iconRStyle = {
        ...iconStyle, padding: '0px 0px 0px 3px',
        // right: '-17px',
        right: '-23px',
        transform: 'translatey(-200%)',
        backgroundImage: `url(${process.env.PUBLIC_URL + 'right-s.png'})`,
        bottom: '-34px'
    }

    // ----------------------------------------------
    let src = (image) => {
        let link = image.path_thumbnail.split('?')
        return link[0]
    }
    //Create A Draggable Image Slider in HTML CSS & JavaScript | Mobile Friendly Slider in JavaScript - CodingNepal
    // Controlling background-images | CSS Tutorial - Kevin Powell

  return (
    <div style={bodyStyle}>
        <div style={wrapperStyle}>
            {/* <p style={iconLStyle} >❰</p> */}
            <p style={iconLStyle} ></p>
            <div style={carouselStyle} id='carousel'>
                {images.map((image) => {
                    let link = src(image)
                    // <img key='image.id' src={src(image)} alt="img" style={imageStyle}/>
                    // <div key='image.id' style={{...imageStyle, backgroundImage: src(image)}}></div>
                    return(
                        <div key='image.id' style={{...imageStyle, backgroundImage:`url(${link})`}}></div>
                    )
                    })}
            </div>
            {/* <p style={iconRStyle}>❱</p> */}
            <p style={iconRStyle}></p>
        </div>
    </div>
  )
}

export default MiniSlider