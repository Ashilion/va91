import React from 'react'
import {Article, Brand, CTA, Feature, Navbar} from "../../components";
import {Blog, Footer, Features, Header, Possibility, WhatGPT3} from "../../containers";

const Accueil = () => {
  return (
    <>
        
        <Header />
      
      <CTA />
      <Possibility /> 
      <WhatGPT3 />
      
      <Features />
      <Blog />
      
      
      
      <Brand />
      <Footer />
      </>
  )
}

export default Accueil