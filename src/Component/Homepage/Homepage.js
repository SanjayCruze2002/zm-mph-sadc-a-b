import React from 'react'
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './../../Assets/new-logo-ZM.webp'
import SignUp from './Formpage';


const Homepage = () => {
  return (
    <section className='home-bg' id='home-page'>
      <Container className='pt-3'>
        <Row>
          <Col sm={4}>
           <img className='logo' src={logo} alt='' />
          </Col>
          <Col sm={4} className='home-padding'>
          <h2 className='home-h2'>Transform your country & community with</h2>
          <hr/>
          <h1 className='home-h1'>Master of Public Health</h1>
          <div className='content-bg'>
            <h3 className='content-h3'>Secure Your Spot Now! Limited Seats for Ongoing Intake</h3>
          </div>
          </Col>
          <Col sm={4}>
            <div className='form-bg-head'>
               <h4>GET MORE INFO</h4>
            </div>
            <div className='form-bg-body'>
                <SignUp/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Homepage
