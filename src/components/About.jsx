import React from 'react'
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'

function About() {
  return (
    <div className='app-container'>
      
      <NavBar/>
      <main className='main-content'>
      
        <section id='about'>
        
          <h2>About Us</h2>
          <p>Welcome to our company! We are a dedicated team of professionals committed to delivering excellence in everything we do.</p>

          <h3>Our Mission</h3>
          <p>To provide innovative solutions that make a positive impact on our clients' success.</p>

          <h3>Our Vision</h3>
          <p>To become a leading force in our industry while maintaining the highest standards of quality and service.</p>

          <p>With years of experience in the industry, we pride ourselves on our customer-focused approach and commitment to excellence.</p>
        </section>
      </main>
      <Footer/>
    </div>
   
  )
}

export default About