import React from 'react';
import './Alumini.css';
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';
import img1 from './../../Assets/alumini-1.webp';
import img2 from './../../Assets/alumini-2.webp';
import img3 from './../../Assets/alumini-3.webp';
import img4 from './../../Assets/alumini-4.webp';
import img5 from './../../Assets/alumini-5.webp';
import img6 from './../../Assets/alumini-6.webp';
import img7 from './../../Assets/alumini-7.webp';
import img8 from './../../Assets/alumini-8.webp';
import img9 from './../../Assets/alumini-9.webp';
import img10 from './../../Assets/alumini-10.webp';
import img11 from './../../Assets/alumini-11.webp';
import img12 from './../../Assets/alumini-12.webp';
import img13 from './../../Assets/alumini-13.webp';
import img14 from './../../Assets/alumini-14.webp';
import img15 from './../../Assets/alumini-15.webp';
import img16 from './../../Assets/alumini-16.webp';
import img17 from './../../Assets/alumini-17.webp';
import img18 from './../../Assets/alumini-18.webp';


function Alumini() {
  const imageSources = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img12,img11,img13,img14,img15,img16,img17,img18];

  return (
    <Container fluid className='alumini-bg'>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h2 className='alumini-h2'>Our Alumni Work At</h2>
        </Col>
      </Row>

      <Container >
       <Row className="justify-content-center pt-3">
          {imageSources.map((src, index) => (
            <Col xs={6} md={2} key={index} className="d-flex justify-content-center mb-3">
              <div className='alumini-div'>
                <Image 
                  src={src} 
                  alt={`Alumni ${index}`} 
                  style={{ 
                    width: '100%', // Ensures image takes up the full width of its container
                    height: 'auto', // Maintains aspect ratio
                  }} 
                />
              </div>
            </Col>
          ))}
       </Row>

      <Row className="justify-content-center">
        <Col xs={12}>
            <p className='alumini-dis'>
              Disclaimer: The company logos displayed in the alumni section of this page are trademarks
              of their respective owners. The presence of these logos does not imply any endorsement or
              direct affiliation with Texila American University. They are provided solely to indicate
              the companies where our alumni are currently employed.
            </p>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Alumini;
