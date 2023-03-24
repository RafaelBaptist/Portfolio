import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import emailJs from '@emailjs/browser'
import contactImg from '../assets/img/eu4direita.png'
import { Col, Row } from 'react-bootstrap'
function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()
    if (name === '' || email === '' || message === '') {
      alert('Fill in the Boxes')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }
    emailJs
      .send(
        'service_mg2qlxm',
        'template_nwotpnd',
        templateParams,
        'dQhnTO9aglwBcq5gB',
      )
      .then(
        (response) => {
          console.log('email sent', response.status, response.text)
          // para limpar as imput
          setName('')
          setEmail('')
          setMessage('')
        },
        (err) => {
          console.log('ERRO: , err')
        },
      )
  }

  return (
    <div className="containerContact" id="Contact">
      <form className="formContact" onSubmit={sendEmail}>
        <h1 className="title">Contact</h1>
        <Row>
          <Col>
            <img src={contactImg} alt="Contact Us" className="contactImg" />
          </Col>
          <Col>
            <Row>
              <Col>
                <input
                  className="input"
                  type="text"
                  placeholder="Type in your name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Col>

              <Col>
                <input
                  className="input"
                  type="text"
                  placeholder="Type in your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  className="textarea"
                  placeholder="Type in your message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </Col>
              <Col>
                <input className="button" type="submit" value="Send" alert />
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default Contact

//             <img src={contactImg} alt="Contact Us" className="contactImg"/>
//
// }
