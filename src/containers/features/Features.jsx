import React from 'react'
import "./features.css"
import { Feature } from '../../components'

const featuresData = [
  {
    title:'Plus de 1000 licenciés',
    text:'Rejoignez plus de 1000 athlètes pour vous aider a progresser !'
  },
  {
    title:'38e club français sur 2000',
    text:'Athle 91 se place 38e dans le classement des clubs français. Venez nous aider a rejoindre l\'élite lors des interclubs !'
  },
  {
    title:'Message or am nothing',
    text:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title:'Really boy law county',
    text:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Découvrez Viry et Athle 91 avec des chiffres.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} delayTitle={0.2} delayParagraph={0.4}/>
        ))}
      </div>
    </div>
  )
}

export default Features