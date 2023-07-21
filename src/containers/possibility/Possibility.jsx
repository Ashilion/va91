import React from 'react'
import "./possibility.css"
import track from '../../assets/track.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={track} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Nouvelle piste technologique</h1>
        <p>
        Le Viry Athlé 91 est fier de présenter sa toute nouvelle piste d’athlétisme de dernière génération au stade Ladji Doucouré. Cette piste innovante intègre les toutes dernières avancées technologiques pour optimiser les performances des athlètes. Son système de chronométrage électronique intégré assure une précision maximale. Grâce à ces équipements high-tech uniques, la nouvelle piste permet à nos athlètes de s’entraîner et évoluer dans les meilleures conditions qui soient. Venez découvrir cette piste à la pointe de la technologie lors de son inauguration !
        </p>
        <h4>S'inscrire pour en profiter</h4>
      </div>
    </div>
  )
}

export default Possibility