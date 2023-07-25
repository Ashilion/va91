import "./header.css"
import React from 'react'
import people from '../../assets/people.png'
import runner from '../../assets/runner-green.png'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home" >
      <div className="gpt3__header-content">
        <motion.h1 className="gradient__text" initial={{ opacity: 0 , x:-200 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:0.2}}>
          Découvrez Viry Athlé 91
        </motion.h1>
        <motion.p initial={{ opacity: 0 , x:-200 }} whileInView={{ opacity: 1 ,x:0}} transition={{ duration: 0.6 ,delay:0.4}}>
        Notre club d'athlétisme basé à Viry-Châtillon dans l'Essonne vous accueille pour la pratique de l'athlétisme en compétition ou en loisir, quel que soit votre âge ou votre niveau.
        </motion.p>

      </div>

      <motion.div className="gpt3__header-image" initial={{ opacity: 0 , x:400 }} whileInView={{ opacity: 1,x:0}} transition={{ duration: 0.6, delay:0.6}}>
        <img src={runner} alt="ai"/>
      </motion.div>
    </div>
  )
}

export default Header