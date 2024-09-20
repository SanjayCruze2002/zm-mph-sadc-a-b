import React from 'react'
import './Advantages.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon from './../../Assets/video-chat.webp'
import icon1 from './../../Assets/collaboration.webp'
import icon2 from './../../Assets/problem-solving.webp'
import icon3 from './../../Assets/target.webp'
import icon4 from './../../Assets/change-management.webp'
import icon5 from './../../Assets/target-audience.webp'
import video from './../../Assets/videoplayback.mp4'
import Button from 'react-bootstrap/Button';

const Advantages = () => {

  const handleRegisterClick = () => {
    document.getElementById('home-page')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='Advantages-bg'>
      <Container>
        <Row>
          <Col>
          <div className='d-flex justify-content-center'>
          <video className='Advantages-video' controls>
            <source src={video} type="video/mp4" />
          </video>
            {/* <iframe 
            className='iframe'
           width="560" 
           height="315" 
           src="https://www.youtube.com/embed/F1m_Rde59p0?si=9Ik0cQ5kVkvNAcQJ"
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" 
           allowfullscreen>
            </iframe> */}
          </div>
          </Col>
        </Row>
      </Container>
      <Container className='advantages-padding'>
        <Row>
          <Col sm={12} >
          <h2 className='text-center pt-3'><strong>Advantages of Studying Master of Public Health (MPH) in Texila</strong></h2>
          </Col>
        </Row>
        <Row className='pt-4'>
          <Col sm={4}>
           <div className='card-bg'>
            <img src={icon} />
            <h4 className='pt-3'>Technology Driven Learning</h4>
            <p>Learn anytime from any place with the help of our robust Learning Management System (LMS). Experience the joy of classroom learning virtually.</p>
           </div>
          </Col>
          <Col sm={4}>
          <div className='card-bg'>
            <img src={icon1} />
            <h4 className='pt-3'>Student Centered</h4>
            <p>Dedicated student coordinators work with students on every step throughout the course. They would be guiding students on faculty interactions, projects and more.</p>
           </div>
          </Col>
          <Col sm={4}>
          <div className='card-bg'>
            <img src={icon2} />
            <h4 className='pt-3'>Student Diversity</h4>
            <p>Join 1000+ students from all over the world who have enrolled in Public Health program with us.</p>
           </div>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col sm={4}>
           <div className='card-bg'>
            <img src={icon3} />
            <h4 className='pt-3'>Recognized</h4>
            <p>Degree awarded by TAU- Zambia which is recognized by Higher Education Authority – Zambia</p>
           </div>
          </Col>
          <Col sm={4}>
          <div className='card-bg'>
            <img src={icon4} />
            <h4 className='pt-3'>Illustrious Alumni Base</h4>
            <p>Our alumni are employed in World Health Organization (WHO), United Nations (UN), NGOs, Ministries of various countries and more</p>
           </div>
          </Col>
          <Col sm={4}>
          <div className='card-bg'>
            <img src={icon5} />
            <h4 className='pt-3'>Resources</h4>
            <p>Students have access to additional resources – Digital library for references, eJournals for research publications and eConference</p>
           </div>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center pt-5'>
          <Button className='button' onClick={handleRegisterClick} variant="outline-secondary">TO KNOW MORE DETAILS</Button>{' '}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Advantages
