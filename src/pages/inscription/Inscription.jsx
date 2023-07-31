import React from 'react'
import { motion } from 'framer-motion'
import './inscription.css'
import runner from '../../assets/duv.png'

const Inscription = () => {
  return (
    <div className='gpt3__inscription'>
      <div className='gpt3__inscription_header section__padding'>
          <h1 className='gradient__text'>Inscrivez-vous</h1>
          <p>La license permet de vous entrainer aux horaires indiquées, d'avoir le maillot du club. Des places gratuites sont données chaque année à des licensiés pour des compétitions comme le meeting de Paris a Charléty</p>
          <p>1 license : 180€  </p>
          <p>2e license : 160€</p>
          <p>3e license : 140€</p>
          <motion.div className='gpt3__inscription-btn' initial={{ opacity: 0 , x:200 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:0.4}}>
              <button type='button'>Fiche d'inscription 2023/2024</button>
          </motion.div>
      </div>
      <motion.div className="gpt3__inscription-image" initial={{ opacity: 0 , x:400 }} whileInView={{ opacity: 1,x:0}} transition={{ duration: 0.6, delay:0.6}}>
        <img src={runner} alt="DUV"/>
      </motion.div>
  </div>
  )
}

export default Inscription