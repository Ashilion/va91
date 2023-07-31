import React from 'react'
import { motion } from 'framer-motion'
import './foulees.css'
import runner from '../../assets/run4.png'

const Foulees = () => {
  return (
    <div className='gpt3__foulees'>
      <div className='gpt3__foulees_header section__padding'>
          <h1 className='gradient__text'>Les Foulées Vertes de Viry-Chatillon</h1>
          <p>Le 10 septembre 2023 venez en famille ou avec vos amis profitez de cette magnifique course autour des lacs de Viry-Chatillon</p>
          <p>1 km : pour les moins de 10 ans  </p>
          <p>5 km : parfait pour les débutants</p>
          <p>10 km : pour les plus courageux</p>
          <motion.div className='gpt3__foulees-btn' initial={{ opacity: 0 , x:200 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:0.4}}>
              <button type='button'>S'inscrire pour la course</button>
          </motion.div>
      </div>
      <motion.div className="gpt3__foulees-image" initial={{ opacity: 0 , x:400 }} whileInView={{ opacity: 1,x:0}} transition={{ duration: 0.6, delay:0.6}}>
        <img src={runner} alt="DUV"/>
      </motion.div>
  </div>
  )
}

export default Foulees