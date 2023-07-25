import React from 'react'
import './feature.css'
import {motion } from 'framer-motion'

const Feature = ({title, text, animationSide=-400, delayTitle=0, delayParagraph=0}) => {
  return (
    <div className="gpt3__features-container__feature">
      <motion.div className="gpt3__features-container__feature-title" initial={{ opacity: 0 , x:-200 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:delayTitle}}>
        <div />
        <h1>{title}</h1>
      </motion.div>
      <motion.div className='gpt3__features-container_feature-text' initial={{ opacity: 0 , x:animationSide }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:delayParagraph}}>
        <p>{text}</p>
      </motion.div>
    </div>
  )
}

export default Feature