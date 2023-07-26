import React from 'react'
import './horaires.css'

const Horaires = () => {
  return (
    <>
    <h1 className='title gradient__text'>Horaires</h1>
    <div className= "gpt3__horaires">
      
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 2",
                gridRow: "span 2"
                }}
        id="baby"
        >
        <div className='gpt3__horaires-box_head'>
          <h1>Baby Athle</h1>
          <h4>Année: 2018-2020 </h4>
        </div>
        <ul><li>Mercredi 14h00 - 15h15</li> </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 3",
                gridRow: "span 3"
                }}
        id="benjamin"
        >
        <div className='gpt3__horaires-box_head'>
          <h1>Benjamin</h1>
          <h4>Année: 2012-2013 </h4>
        </div>
        <ul>
          <li>Mardi 18h30-20h30</li> 
          <li>Jeudi 18h30-20h30</li>
        </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 3",
                gridRow: "span 2"
                }}
                id="minime"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Minime</h1>
          <h4>Année: 2010-2011 </h4>
        </div>
        <ul>
          <li>Lundi 18h30-20h30</li> 
          <li>Mercredi 18h30-20h30</li>
          <li>Vendredi 18h30-20h30</li>
        </ul>
      </div>

      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 2",
                gridRow: "span 2"
                }}
                id="poussin"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Poussin</h1>
          <h4>Année: 2015-2017 </h4>
        </div>
        <ul>
          <li>Mercredi 14h - 16h</li> 
          <li>ou Samedi 10h - 12h</li>
        </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"3/span 3",
                gridRow: "4 /span 3"
                }}
                id="sprint"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Sprint</h1>
          <h4>Année: / </h4>
        </div>
        <ul>
          <li>Lundi 18h45-20h30</li> 
          <li>Mercredi 18h45-20h30</li>
          <li>Vendredi 18h45-20h30</li>
        </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 3",
                gridRow: "span 2"
                }}
                id="demi-fond"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Demi Fond / Route</h1>
          <h4>Année: / </h4>
        </div>
        <ul>
          <li>Lundi 18h30-20h00</li> 
          <li>Mercredi 18h30-20h00</li>
          <li>Vendredi 18h30-20h00</li>
        </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 3",
                gridRow: "span 2"
                }}
                id="demi-fond-loisir"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Demi Fond / Loisir</h1>
          <h4>Année: / </h4>
        </div>
        <ul>
          <li>Lundi 18h30 - 20h30</li> 
          <li>Mercredi 18h30 - 20h30</li>
          <li>Vendredi 18h30 - 20h30</li>
        </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 2",
                gridRow: "5 /span 4"
                }}
                id="lancer"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Lancer</h1>
          <h4>Année: / </h4>
        </div>
        <ul>
          <li>Lundi 18h45 - 20h30</li> 
          <li>Mercredi 18h45 - 20h30</li>
          <li>Vendredi 18h45 - 20h30</li>
        </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 4",
                gridRow: "span 2"
                }}
                id="perche"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Perche</h1>
          <h4>Année: / </h4>
        </div>
        <ul>
          <li>Mardi 18h45 - 20h30</li> 
          <li>Mercredi 18h45 - 20h30</li>
          <li>Vendredi 18h45 - 20h30</li>
        </ul>
      </div>
      <div className='gpt3__horaires-box'
        style={{gridColumn :"span 2",
                gridRow: "span 2"
                }}
                id="saut"
                >
        <div className='gpt3__horaires-box_head'>
          <h1>Saut</h1>
          <h4>Année: / </h4>
        </div>
        <ul>
          <li>Mardi 18h45 - 20h30</li> 
          <li>Jeudi 18h45 - 20h30</li>
          <li>Vendredi 18h45 - 20h30</li>
        </ul>
      </div>
      
    </div>
    </>
  )
}

export default Horaires