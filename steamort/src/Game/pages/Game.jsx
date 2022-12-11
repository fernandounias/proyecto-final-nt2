import React from 'react'
import {Info, SliderBox, Reviews, MiniSlider} from '../controller/index'
import stuff from '../controller/stuff.json'

import Games from '../../data/Games.json'
import { DialogContent } from '@mui/material'
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils'

const Game = () => {

  return (
  <>
    {/* <div>Titulo</div> */}
    <h1 style={{margin: 'auto', padding: '40px 0px 20px 0px', textAlign: 'center', color: 'grey'}}> Titulo </h1>
    {/* <SliderBox images={Games[0].screenshots} size={{width: '500px', height: '280px'}}/> */}
    <div style={{display: 'flex'}}>
      <div style={{flexGrow:'2'}}>
        <div style={{display: 'flex', flexDirection: 'column', background: '#343F4F', padding: '30px 10px'}}>
        {/* <SliderBox images={Games[0].screenshots} size={{width: '600px', height: '400px'}}/> */}
        <SliderBox images={Games[0].screenshots} size={{width: '645px', height: '445px'}}/>
        {/* <MiniSlider images={Games[0].screenshots} size={{width: '600px', height:'400px'}}/> */}
        <MiniSlider images={Games[0].screenshots}/>
        {/* <div style={{width: '600px', height:'400px', background: '#343F4F', flexGrow: '2', flexShrink: '0'}}></div> */}
        </div>
      </div>
      <Info game={stuff} ></Info>
    </div>
  </>
  )
}

export default Game