import React from 'react'
import "./possibility.css"
import track from '../../assets/track3.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={track} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">Nouvelle piste technologique</h1>
        <p>
        Le Viry Athlé 91 est fier de présenter sa toute nouvelle piste d’athlétisme de dernière génération au stade Ladji Doucouré. Cette piste innovante intègre les toutes dernières avancées technologiques pour optimiser les performances des athlètes. Son système de chronométrage électronique intégré assure une précision maximale. Grâce à ces équipements high-tech uniques, la nouvelle piste permet à nos athlètes de s’entraîner et évoluer dans les meilleures conditions qui soient. Venez découvrir cette piste à la pointe de la technologie lors de son inauguration !
        </p>
        <h4>
        <a 
                href="https://www.google.com/maps/place/Stade+de+Viry-Châtillon/@48.672709,2.3793463,611m/data=!3m1!1e3!4m6!3m5!1s0x47e5df13bacb1d71:0x3dc374a043f9f0d7!8m2!3d48.6710348!4d2.3809376!16s%2Fg%2F11bx8k0wf2?entry=ttu"
                target="_blank" rel="noreferrer"
              >
              Voir sur la carte
            </a>
        </h4>
      </div>
    </div>
  )
}

export default Possibility