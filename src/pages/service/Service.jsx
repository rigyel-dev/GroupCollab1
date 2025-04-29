import React from 'react';


function Service() {
  const services = [
    {
      title: "Web Development",
      description: "Custom website development tailored to your business needs with responsive design."
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile application development for iOS and Android."
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement."
    },
    {
      title: "Cloud Services",
      description: "Cloud infrastructure setup, maintenance, and optimization services."
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence."
    },
    {
      title: "IT Consulting",
      description: "Expert IT consultation to help you make informed technology decisions."
    }
  ];

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p>We offer a wide range of professional services to meet your needs.</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Service