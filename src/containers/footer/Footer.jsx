import "./footer.css"
import React from 'react'
import viryLogo from '../../assets/va91-logo.png'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Tu veux devenir la star de demain</h1>

      </div>
      <div className="gpt3__footer-btn">
        <p>Inscris Toi</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={viryLogo} alt="logo"></img>
          <p>Viry Athle 91, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Liens importants</h4>
          <p>Groupe et Horaires</p>
          <p>Les foulées vertes</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Nous situer</h4>
          <p>
            <a 
                href="https://www.google.com/maps/place/Stade+de+Viry-Châtillon/@48.672709,2.3793463,611m/data=!3m1!1e3!4m6!3m5!1s0x47e5df13bacb1d71:0x3dc374a043f9f0d7!8m2!3d48.6710348!4d2.3809376!16s%2Fg%2F11bx8k0wf2?entry=ttu"
                target="_blank" rel="noreferrer"
              >
              Stade Henri Longuet / Ladji Doucouré
            </a>
          </p>
          <p>
            <a 
                href="https://www.google.com/maps/place/Halle+des+Sports+de+Viry-Châtillon/@48.6728494,2.3810603,611m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47e5df12ef3c26d5:0x2d5b2097f66dcbc9!8m2!3d48.6728494!4d2.383249!16s%2Fg%2F11bx1cmcpr?entry=ttu"
                target="_blank" rel="noreferrer"
              >
              Halle des sports Jacques-Bédei
            </a>
          </p>
          <p>
            <a 
              href="https://www.google.com/maps/place/11+Imp.+Francoeur,+91170+Viry-Châtillon/@48.6729149,2.3782655,611m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47e5df12e5fe2f81:0x3d70fdb8574ab6e4!8m2!3d48.672915!4d2.383131!16s%2Fg%2F11c43wlh_g?entry=ttu"
              target="_blank" rel="noreferrer"
            >
              11, impasse Francoeur 91170 Viry-Châtillon
            </a>
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Contact</h4>
          <p>viryathle91@gmail.com</p>
          <p>06 35 89 70 6</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Copyrights © 2023 Viry Athle 91. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer