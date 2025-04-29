import { Typography } from 'antd'
import React from 'react'

function ContactForm() {
    const {Paragraph} = Typography
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        
    
        <Paragraph>Get in touch with us! Fill out the form below or use our contact information.</Paragraph>
        

        <div style={{ marginBottom: '20px' }}>
            <Typography.Title level={1} style={{
                textAlign: 'center',
            }}>Contact Information</Typography.Title>
          <Paragraph style={{
            textAlign: 'center',
          }}>📞 Phone: (123) 456-7890<br />
          ✉️ Email: info@example.com<br style={{marginTop: '8px', marginBottom: '8px'}} />
          📍 Address: 123 Main Street</Paragraph>
        </div>

        <form>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            required
            style={inputStyle}
          />
          <br />

          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            required
            style={inputStyle}
          />
          <br />

          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            style={inputStyle}
          ></textarea><br />

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
      </div>

     
  )
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  
  
}

const buttonStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textAlign:'center'
 
}


export default ContactForm