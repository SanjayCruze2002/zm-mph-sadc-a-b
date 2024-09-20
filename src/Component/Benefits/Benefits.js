import React from 'react'
import './Benefits.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Benefits = () => {
  return (
    <section className='benefits-bg'>
      <Container>
        <Row>
          <Col sm={8}>
          <h2>Benefits</h2>
          <ul className='header-list'>
            <li>Extensive network of students from different nationalities and professional backgrounds</li>
            <li>Flexible online programs at par with on-campus programs</li>
            <li>Interactive curriculum with block-based learning modules</li>
            <li>Internationally recognized degree</li>
            <li>Opportunity to explore your true potential as a business professional</li>
            <li>State-of-the-art Infrastructure</li>
            <li>Internship Placement assistance</li>
            <li>Flexible Payment Plan & Much More</li>
          </ul>
          </Col>
          <Col sm={4}>
          <div className='benefits-box'>
            <h2>Did you know?</h2>
            <p>
            According to the Bureau of Labor Statistics (BLS), USA, the average annual salary for management jobs
             is $100,790 – the highest when compared to other major occupations. It is also estimated that between
              2014-2044 there will be 505,400 new jobs created for professionals with management degrees. Taking cue
               from market demands and future job prospects, at Texila American University’s School of Business and
                Management we aim to close the gap with our exclusively designed MBA program.</p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits
