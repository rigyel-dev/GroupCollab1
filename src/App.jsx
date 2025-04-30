import React from 'react'
import Home from './components/home/Home'
import './index.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import TrainingBenefits from './components/trainingbenefits/TrainingBenefits';



const App = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    
    <Footer/>
    </>
  )
}

export default App