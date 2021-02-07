import React from 'react'
import './AdInfo.css'

function AdInfo({ imgSrc, titles, url }) {
  return (
    <article className='adif'>
      <img src={imgSrc}></img>
      <div className='info'>
        <p>{titles}</p>
        <small>{url}</small>
      </div>
    </article>
  )
}

export default AdInfo
