import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className='footer'>
      <Row>
        <Col>
          <p className='text-center footer-head m-2'>
            © {currentYear} Texila American University. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;