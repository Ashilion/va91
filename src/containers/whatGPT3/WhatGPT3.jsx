import React from 'react'
import "./whatGPT3.css"
import { Feature } from '../../components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
      <div className="gpt3__whatgpt3-features" >
        <Feature 
          title="Saison 2023/2024" 
          text= "Fondé en 1991, Viry Athlé 91 perpétue chaque année la tradition de formation des jeunes espoirs de l'athlétisme français. Nos entraîneurs diplômés encadrent les athlètes dans un climat convivial et familial, au sein de notre magnifique nouveau stade Ladji Doucouré."
          animationSide = {400} />
          
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text' >
          Sprint, Sauts, Lancers, Demi fond
        </h1>
        <p><Link to="horaires">Découvre les horaires d'entrainements </Link></p>
      </div>  
      <div className="gpt3__whatgpt3-container">
        <Feature 
          title="Partage" 
          text="Rejoignez notre communauté de passionnés d'athlétisme ! Pour les plus jeunes comme pour les adultes, Viry est le club idéal pour vivre des moments uniques de compétition et de partage autour de l'athlétisme."
          delayTitle={0}
          delayParagraph={0.1}
          />
        <Feature 
          title="Compétition" 
          text="Nos entraîneurs sont tous spécialisés dans les différentes disciplines de l'athlétisme et régulièrement formés aux dernières méthodes d'entraînement. Ils élaborent des programmes sur mesure pour chaque athlète afin de développer leur potentiel. "
          delayTitle={0.2}
          delayParagraph={0.3}
          />
        <Feature 
          title="Athle 91" 
          text="Viry Athle 91 est affilié à Athle 91. Représenter les mêmes couleurs que Evry, Etampes, Etrechy, Morsang lors des compétitions !" 
          delayTitle={0.4}
          delayParagraph={0.5}
        />
      </div>
    </div>  
  )
}

export default WhatGPT3