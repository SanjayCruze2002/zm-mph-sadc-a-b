import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';
import image from './../../Assets/person.webp'

function FAQsection() {
  return (
    <Container fluid className='fAQ' id='FAQ-page'>
      <Row>
        <Col>
        <Row className='Row-FAQ'>
        <Col>
         <h2 className='text-center'>Frequently Asked Questions</h2>
        </Col>
      </Row>
          <div class="container mt-4">
            <div class="row">
              <div class="col-sm-6  text-white p-3">
               <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who should apply for a Master of Public Health Program?</Accordion.Header>
        <Accordion.Body>
        The Master of Public Health program is designed for professionals who wish to transform their careers into a qualified public health specialist.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What will be the better option after an MPH?</Accordion.Header>
        <Accordion.Body>
        You will be eligible to take up a Ph.D. in Public Health that will earn you lucrative career opportunities in the field of public health.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is the duration of MPH program?</Accordion.Header>
        <Accordion.Body>
        The duration of our MPH program is two years.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is Texila American University Recognized?</Accordion.Header>
        <Accordion.Body>
        Texila American University Zambia, is registered with Higher Education Authority (HEA), approved by the Health Profession Council of Zambia (HPCZ).
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>

    <div class="col-sm-6 text-white p-3">
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="5">
        <Accordion.Header>Are there any flexible payment plans for the students?</Accordion.Header>
        <Accordion.Body>
        Yes, of course. Our student counselors will guide you about the payment plans available for each intake.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Is the university accepting international students also?</Accordion.Header>
        <Accordion.Body>
        Yes, it does. Texila American University Degrees can be pursued online or part-time based on your nationality and convenience
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>How does Texila differ from other universities?</Accordion.Header>
        <Accordion.Body>
        <div>
              <div className='faq-img'>
                <img className='img-testimonial mt-1' src={image} alt="" />
              </div>
                <p className='text-center mt-2'><strong>Dr. Izuchukwu Michael Offiaeli, Public Health and Nutrition Programme Manager</strong></p>
                <p className='text-center mt-3 text-dark'>“My time in TAU had helped me to become a better team player and has equipped me with all
                     necessary skills and tools in addressing the 21st century problems in Public’s Health. It gave me opportunity to collaborate with diverse people.”</p>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              </div> 
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default FAQsection;