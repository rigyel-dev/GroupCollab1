import React from 'react'


import Home from './components/home/Home'
import './index.css';
import Footer from './components/footer/Footer';
import About from './components/About'


import ContactForm from './pages/Contact';


const App = () => {
  return (
    <>

    
    <ContactForm/>
   

    <Home/>
          <About/>
    <Footer/>

    </>

  )
}

export default App 