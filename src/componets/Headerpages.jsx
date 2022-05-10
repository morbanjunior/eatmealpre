import React from 'react'
import backgroundAbout from '../image/backgroundAbout.png'

const Headerpages = ({name}) => {
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
        backgroundImage: `url(${backgroundAbout})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
        fontSize:' 46px',
        fontWeight: '500',
  
      }}>{name}</div>
  )
}

export default Headerpages