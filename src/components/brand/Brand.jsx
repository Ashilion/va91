import React from 'react'
import './brand.css'
import {decathlon,iad } from './import'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-image'>
        <img src={decathlon} alt="google"/>
      </div>
      <div className='gpt3__brand-image'>
        <img src={iad} alt="slack"/>
      </div>
    </div>
  )
}

export default Brand