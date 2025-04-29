import React from 'react'

const TrainingBenefits = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Training Benefits */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#4CAF50", marginBottom: "40px" }}>Training Benefits</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
          {/* Benefit 1 */}
          <div style={{ width: "250px" }}>
            <h3 style={{ fontWeight: "bold" }}>Hands-on Experience</h3>
            <p>Build real-world applications from scratch</p>
          </div>

          {/* Benefit 2 */}
          <div style={{ width: "250px" }}>
            <h3 style={{ fontWeight: "bold" }}>Industry Expert Mentors</h3>
            <p>Learn from experienced MERN developers</p>
          </div>

          {/* Benefit 3 */}
          <div style={{ width: "250px" }}>
            <h3 style={{ fontWeight: "bold" }}>Job Ready Skills</h3>
            <p>Get prepared for full-stack developer roles</p>
          </div>
        </div> 
      </section> 
    </div>
  )
}

export default TrainingBenefits