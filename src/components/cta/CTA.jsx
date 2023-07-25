import React from 'react'
import './cta.css'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <div className='gpt3__cta' id="cta">
      <div className='gpt3__cta-content'>
        <motion.p  initial={{ opacity: 0 , x:-300 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:0}}>La nouvelle saison commence</motion.p>
        <motion.h3 initial={{ opacity: 0 , x:-300 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:0.2}}>Inscrivez vous dès maintenant</motion.h3>
      </div>
      <motion.div className='gpt3__cta-btn' initial={{ opacity: 0 , x:200 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:0.4}}>
        <button type='button'>Fiche d'inscription 2023/2024</button>
      </motion.div>
    </div>
  )
}

export default CTA