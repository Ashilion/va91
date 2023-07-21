import {Article, Brand, CTA, Feature, Navbar} from "./components";
import {Blog, Footer, Features, Header, Possibility, WhatGPT3} from "./containers";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      
      <WhatGPT3 />
      
      <Features />
      <Blog />
      <Possibility /> 
      <CTA />
      
      <Brand />
      <Footer />

    </div>
  );
}

export default App;
