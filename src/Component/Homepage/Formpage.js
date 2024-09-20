import * as React from 'react';
import { Button, Container, Form, Row, Col} from 'react-bootstrap';

export default function SignUp() {
  const currentUrl = window.location.href;
  var parsedUrl = new URL(currentUrl);
  var params = new URLSearchParams(parsedUrl.search);
  var campaignNameCustom = params.get('campaign_name_custom');
  var utmTerm = params.get('utm_term');
  const [errors, setErrors] = React.useState({});
  const [selectOption, setSelectOption] = React.useState('');
  const [additionalSelectOption, setAdditionalSelectOption] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [isSameAsContactNumber, setIsSameAsContactNumber] = React.useState(false);

  const validate = (data) => {
    let validationErrors = {};

    if (!data.get('name')) {
      validationErrors.name = 'Name is required';
    }

    const email = data.get('email');
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email || !emailPattern.test(email)) {
      validationErrors.email = 'Valid email is required';
    }

    if (!data.get('selectOption')) {
      validationErrors.selectOption = 'Select option is required';
    }

    if (!data.get('contactNumber')) {
      validationErrors.contactNumber = 'Contact number is required';
    }

    if (!data.get('whatsapp')) {
      validationErrors.whatsapp = 'WhatsApp number is required';
    }

    if (!data.get('additionalSelectOption')) {
      validationErrors.additionalSelectOption = 'Additional select option is required';
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({
        name: data.get('name'),
        email: data.get('email'),
        selectOption: data.get('selectOption'),
        contactNumber: data.get('contactNumber'),
        whatsapp: data.get('whatsapp'),
        additionalSelectOption: data.get('additionalSelectOption'),
      });
      setErrors({});
    }
  };

  const handleCheckboxChange = (event) => {
    setIsSameAsContactNumber(event.target.checked);
    if (event.target.checked) {
      setWhatsapp(contactNumber);
    } else {
      setWhatsapp('');
    }
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
    if (isSameAsContactNumber) {
      setWhatsapp(event.target.value);
    }
  };

  return (
    <Container fluid className="my-4">
      <script src='https://www.google.com/recaptcha/api.js'></script>
      <Form action='https://apply.tauedu.org/lp/send_data_via_api_v4_react.php' method='post'>
      <div onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} sm={12} className="mb-3">
            <Form.Group controlId="name">
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col xs={12} sm={12} className="mb-3">
            <Form.Group controlId="email">
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col xs={12} sm={12} className="mb-3">
            <Form.Group controlId="selectOption">
              <Form.Control
                as="select"
                name="selectOption"
                value={selectOption}
                onChange={(e) => setSelectOption(e.target.value)}
                isInvalid={!!errors.selectOption}
              >
                <option value="">Zambia(+260)</option>
                {/* Add more options here */}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.selectOption}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col xs={12} sm={12} className="mb-3">
            <Form.Group controlId="contactNumber">
              <Form.Control
                required
                type="text"
                name="contact"
                placeholder="Enter your contact number"
                value={contactNumber}
                onChange={handleContactNumberChange}
                isInvalid={!!errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.contactNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col xs={12} sm={12} className="mb-3">
            <Form.Group controlId="whatsapp">
              <Form.Control
                required
                type="text"
                name="whatsapp"
                placeholder="Enter your WhatsApp number"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                isInvalid={!!errors.whatsapp}
              />
              <Form.Control.Feedback type="invalid">
                {errors.whatsapp}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col xs={12} sm={12} className="mb-3">
            <Form.Group controlId="additionalSelectOption">
              <Form.Control
                as="select"
                name="additionalSelectOption"
                value={additionalSelectOption}
                onChange={(e) => setAdditionalSelectOption(e.target.value)}
                isInvalid={!!errors.additionalSelectOption}
              >
                <option value="">Current Qualification</option>
                <option value="optionA">CSEC</option>
                <option value="optionB">CAPE</option>
                <option value="optionC">Completed O levels/ Senior Secondary Education</option>
                <option value="optionD">Completed A levels/ Higher Secondary</option>
                <option value="optionE">Grade 12th or A Level</option>
                <option value="optionF">Diploma in Science Streams</option>
                <option value="optionG">Bachelors in Science Streams</option>
                {/* Add more options here */}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.additionalSelectOption}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col xs={12} className="mb-3 text-white">
            <Form.Check
              type="checkbox"
              id="isSameAsContactNumber"
              label="Same as Contact Number"
              checked={isSameAsContactNumber}
              onChange={handleCheckboxChange}
            />
          </Col>
          </Row>
          <div class="g-recaptcha" data-callback="recaptchaCallback1" data-sitekey="6Lei3IcfAAAAAMN9kfexwW8m7NGMVsO7QXQ4L-Sq"></div>
          <Row>
          <Col xs={12} className="mb-3 text-white">
            <Form.Check
              type="checkbox"
              id="allowExtraEmails"
              label="I agree with Texila’s Terms of Service and Privacy Policy and provide my consent to receive marketing communications from Texila American University."
            />
          </Col>
          </Row>
          <input type="hidden" name="url" value={currentUrl} />
                      <input type="hidden" name="ipadd" value="" />
                      <input type="hidden" name="ProspectID" />
                      <input type="hidden" name="capcha_check1" id="capcha_check1" />
                      <input type="hidden" name="page" value="landng_pages_form_submit_send_data_api" />
                      <input type="hidden" name="option" value="landng_pages_data_store_leadsquared" />
                      <input type="hidden" name="send_mail_applicant" value="yes" />
                      <input type="hidden" name="store_leadsquared_lead" value="yes" />
                      <input type="hidden" name="send_sms_applicant" value="yes" />
                      <input type="hidden" name="thank_you_v2_link" value="https://apply.tauedu.org/zm/thank-you/zm-mph-sadc-a-b" />
                      <input type="hidden" name="flag" value="1" />
                      <input type="hidden" name="form_name" value='zm-mph' />
                      <input type="hidden" name="campus" value="Zambia-DBLP" />
                      <input type="hidden" name="program" value="Master of Public Health" />
                      <input type="hidden" name="program_category" value="School of Public Health" />
                      <input type="hidden" name="program_level" value="Master" />
                      <input type="hidden" name="type_of_contact" value="Lead Acquisition" />
                      <input type="hidden" name="netcore_activity_source" value="Google Search" />
                      <input type="hidden" name="lead_source" value="Paid Search" />
                      <input type="hidden" name="lead_source_new" value="Paid Search" />
                      <input type="hidden" name="campaign_name_custom" value={campaignNameCustom} />
                      <input type="hidden" name="utm_source" value="" />
                      <input type="hidden" name="utm_medium" value="Google Ads" />
                      <input type="hidden" name="utm_module" value="Enquiry form" />
                      <input type="hidden" name="utm_campaign" value="" />
                      <input type="hidden" name="utm_term" value={utmTerm} />
                      <input type="hidden" name="no_captcha" value="yes" />
          <Col xs={12}>
          <Button
            type="submit"
            className="w-100"
            variant="warning"
            style={{ backgroundColor: '#f8e71d', color: '#272765', border: 'none', fontWeight:'bold'}}
             >
            Submit
          </Button>
          </Col>
          </div>
      </Form>
    </Container>
  );
}
