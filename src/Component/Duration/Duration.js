import React from 'react'
import './Duration.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon from './../../Assets/duration.webp'
import bottomicon from './../../Assets/bottom-img.webp'

const Duration = () => {
  return (
    <section className='duration-bg'>
      <Container>
        <Row>
          <Col sm={6}>
          <p className='text-white duration-p'>Masters degree in Public Health is a widely recognized professional credential.
             The program equips students to take up leadership and managerial positions in 
             governmental, non-profit, and private organizations in the public health industry.
              Texila’s Master of Public Health Program ideally helps you develop the administrative,
               ethical, and professional skills needed to apply health education and communication
                programs in line with public health principles.</p>
          </Col>
          <Col sm={6}>
          <Container>
           <Row>
            <Col sm={6}>
            <div className='icon-bg'>
                <img src={icon} />
                <h4 className='pt-2'>Duration: 2 Years</h4>
            </div>
            <img src={bottomicon} />
            </Col>
            <Col sm={6}>
            <div className='eligibility-bg'>
               <h5>Eligibility:</h5>
               <p className='eligibility-p'>Bachelor of Public Health, Medicine, Nursing, Dentistry, Pharmacy, Physiotherapy, Environmental health, Bio-medical science, Health Science/Education and Social work</p>
            </div>
            <img src={bottomicon} />
            </Col>
           </Row>
          </Container>
      </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Duration
