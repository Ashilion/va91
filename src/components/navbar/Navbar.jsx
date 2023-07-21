import React from 'react'
import './navbar.css'
import  {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/va91-logo.png'
import { useState } from 'react'

const Menu = () => (
  <>
  <p><a href="#home">Accueil</a></p>
  <p> <a href="#whatgpt3">Qui Sommes Nous ?</a> </p>
  <p> <a href="#possibility">Activités</a> </p>
  <p> <a href="#features">Dernières News</a> </p>
  <p> <a href="#blog">Nous Contacter</a> </p>
  </>
)
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className = "gpt3__navbar">
      <div className ="gpt3__navbar-links">
        <div className = "gpt3__navbar-links_logo">
            <img src ={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
           <Menu />

        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <button type="button">S'inscrire</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {
          toggleMenu ? 
          <RiCloseLine onClick={()=>setToggleMenu(false)} color='#fff' size={27}/> 
          : <RiMenu3Line onClick={()=>setToggleMenu(true)} color='#fff' size={27}/>
        }
        {
          toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container'>
                <Menu />
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar