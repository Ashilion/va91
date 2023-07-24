import "./header.css"
import React from 'react'
import people from '../../assets/people.png'
import runner from '../../assets/runner-green.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Découvrez Viry Athlé 91
        </h1>
        <p>
        Notre club d'athlétisme basé à Viry-Châtillon dans l'Essonne vous accueille pour la pratique de l'athlétisme en compétition ou en loisir, quel que soit votre âge ou votre niveau.
        </p>

      </div>

      <div className="gpt3__header-image">
        <img src={runner} alt="ai"/>
      </div>
    </div>
  )
}

export default Header