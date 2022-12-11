import React from 'react'

const Platform = ({platforms}) => {
  const icon = {width: '30px', height: '30px'}
  const container = {display: 'flex', alignItems: 'center', margin: '0px 5px'}
  const title = {color: 'white', margin: '5px'}

  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      {platforms.windows === true && 
      <div style={container}>
        <div style={{...icon, backgroundImage: `url(${process.env.PUBLIC_URL + 'icons8-windows-10-30-white.png'})`}}></div>
        <div>
          <h4 style={title}>Windows</h4>
        </div>
      </div>
      }
      {platforms.mac === true && 
      <div style={container}>
        <div style={{...icon, backgroundImage: `url(${process.env.PUBLIC_URL + 'icons8-mac-logo-30-white.png'})`}}></div>
        <div>
          <h4 style={title}>Mac</h4>
        </div>
      </div>
      }

      {platforms.linux === true && 
      <div style={container}>
        <div style={{...icon , backgroundImage: `url(${process.env.PUBLIC_URL + 'icons8-linux-30-white.png'})`}}></div>
        <div>
          <h4 style={title}>Linux</h4>
        </div>
      </div>
      }
    </div>
  )
}

export default Platform