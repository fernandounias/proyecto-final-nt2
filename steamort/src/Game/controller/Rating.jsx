import { withTheme } from '@emotion/react'
import React from 'react'

const Rating = (props) => {

    const starRating = parseInt(props.rating) / 2
    const starStyle = {width: '48px', height: '48px'}
    const fullStar = {...starStyle, backgroundImage: `url(${process.env.PUBLIC_URL + 'icons8-star-filled-48.png'})`}
    const emptyStar = {...starStyle, backgroundImage: `url(${process.env.PUBLIC_URL + 'icons8-star-empty-48.png'})`} 
    const halfStar = {...starStyle, backgroundImage: `url(${process.env.PUBLIC_URL + 'icons8-star-half-empty-48.png'})`}
    let stars = ['','','','','']
    let i = 1
    let passed = false
    stars = stars.map(() => {
                let ans
                if(starRating >= i){ ans = 'fullStar'
                }else if(!Number.isInteger(starRating) && passed === false){
                    ans = 'halfStar'
                    passed = true
                }else{ ans = 'emptyStar'}
                    i++
                return ans
            });
    const star = (text) => {
        switch(text){
            case 'fullStar' : return <div style={fullStar}></div>
            case 'halfStar' : return <div style={halfStar}></div>
            case 'emptyStar' : return <div style={emptyStar}></div>
            default : return
        }
    }

    const scoreStyle = {
        color: 'white',
        justifyContent: 'center',
        fontSize: '40px',
        marginRight: '3px'
    }
    const s = {
        fontSize: '18px'
    }

    return (
    <div style={{ display: 'flex', justifyContent: 'center'}} >
        <div style={scoreStyle}>
            {parseInt(props.rating)}<sup style={s}>/10</sup>
        </div>
        {star(stars[0])}
        {star(stars[1])}
        {star(stars[2])}
        {star(stars[3])}
        {star(stars[4])}
      </div>
    )
}

export default Rating