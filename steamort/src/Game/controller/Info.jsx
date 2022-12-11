import React, {useEffect, useState} from "react";
import Chip from '@mui/material/Chip';
import Rating from "./Rating";
import Platform from "./Platform";

const Info = ({game}) => {
  //for the final div width: '24%'
  const divStyle = {
    // width: '30%',
    margin: '8px 18px',
    padding: '5px',
    border: 'solid grey 1px',
    borderRadius : '5px',
    // background: '#10174b'
    background: '#343F4F'
  }
  const tagStyle = {
    // border: 'solid grey 1px',
    color: 'white',
    margin:  '2px',
    fontSize: '12px'
  }
  const titleStyle = {
    color: 'white',
    margin:  '5px',
    // margin: '0px',
    padding: '5px 10px',
    // border: 'solid grey 1px',
    // borderRadius: '20px'
  }

  const titleGroup = {display: 'flex', alignItems: 'center', justifyContent:'space-between'}
  const plus = {...titleStyle, fontSize: '26px', fontWeight: 'bold', cursor: 'pointer'}
  
  const [boxes, setBoxes] = useState({generes: false, categories: false});

  useEffect(()=>{
    setBoxes({generes: false, categories: false})
  },[])

  const open = (box) => {
    let cat = boxes.categories
    let gen = boxes.generes
    switch(box){
      case 'generes' : 
        setBoxes({generes: !gen, categories: cat})
        return
      case 'categories' : 
        setBoxes({generes: gen, categories: !cat})
        return
    }
  } 
  const openGeneres = ()=>{
    open('generes')
  }
  const openCategories = () => {
    open('categories')
  }

  return (
  <div style={{width:'27%'}}>
    <div style={{margin: '20px', width:'88%', height: '30vh', background: 'grey'}}> title </div>

    <div style={divStyle}>
      <h3 style={titleStyle}>Reviews</h3>
      <div style={{margin: '8px'}}>
      <Rating rating='8'></Rating>
      </div>
    </div>
    <div style={divStyle}>
      <div style={titleGroup}>
          <h3 style={titleStyle}>Price</h3>
          <div style={{margin: '8px'}}>
            <h4 style={titleStyle}>{game.price_overview.final_formatted}</h4>
          </div>
      </div>
    </div>
    <div style={divStyle}>
      <div style={titleGroup}>
        <h3 style={titleStyle}>Genres</h3>
        <span style={plus} onClick={openGeneres}>{ !boxes.generes ? '+' : '-'}</span>
      </div>
      {
        boxes.generes &&
        <div style={{margin: '8px'}}>
        {game.genres.map((genre) => (
          <Chip label={genre.description} style={tagStyle} size='small' variant='outlined'></Chip>
        ))}
        </div>
      }
    </div>
    <div style={divStyle}>
      <div style={titleGroup}>
        <h3 style={titleStyle}>Categories</h3>
        <span style={plus} onClick={openCategories}>{ !boxes.categories ? '+' : '-'}</span>
      </div>
      {
        boxes.categories &&
        <div style={{margin: '8px'}}>
        {game.categories.map((category) => (
          <Chip label={category.description} style={tagStyle} size='small' variant='outlined'></Chip>
          ))}
        </div>
      }
    </div>
    <div style={divStyle}>
      <h3 style={titleStyle}>Platforms</h3>
      <div style={{margin: '8px'}}>
        <Platform platforms={{windows: true,mac: true,linux: false}}></Platform>
      </div>
    </div>
    <div style={divStyle}>
      <div style={titleGroup}>
          <h3 style={titleStyle}>Release date</h3>
          <div style={{margin: '8px'}}>
            <h4 style={titleStyle}>{game.release_date.date}</h4>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Info;
