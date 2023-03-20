import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import contactOne from '../public/4907157.jpg'
import contactImg from '../public/group-people-working-out-business-plan-office.jpg';
function Contact() {

  return (
    <section className='padtobo-100 '>
      {/* <Container>


        <Row>
        <Col md={12}>
            <div className='sectionTitle'>
            <span className='subTitle'>We’d Love To Help You</span>
            <h1>Get in touch</h1>
            </div>
        </Col>
        </Row>
      </Container> */}
      <div className='contactInfo'>

        <div className='contactHead'>
        <div className='contactBio'>
            <span className='contactSubtitle'>We’d Love To Help You</span>
            <h1>Get in touch</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium totam rem loream doloremque laudantium, totam rem aperiam, eaque ipsa natus error sit.
</p>
            </div>

            <Image
            src={contactImg}
            className="contactImg"
            alt='contact'
            />
            </div>

      <div className='contactData'>
      <Image
        src={contactOne}
        className="about-img"
        alt='contact'
        />
        <div className='formData'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Control
          as="textarea"
          placeholder="your Message"
          style={{ margin: "20px auto", height: "100px" }}
        />

        <div className='mainBtn'>
            <button>
            Send Message
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </button>
        </div>

    </Form>
      </div>

        </div>

      </div>
      <style jsx global>
    {`
        .contactInfo {
            height:600px;
        }
    .contactInfo {
        display:flex;
        flex-direction: row;
        position: relative;
        width:100%
    }
    .formData{
        min-width: 80%;
        position: absolute;
        top: 3rem;
        left: -6rem;
        z-index: 2000;
        background-color: #fff;
        padding: 30px;
        border-radius: 20px;
    }
    .contactHead {
        position:relative;
        width:100%;
        height:100%;
    }
    .contactHead::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #3333338f;
        z-index:199;
    }
    .contactBio{
        position: absolute;
        margin: 4rem;
        color: #fff!important;
        z-index: 2000;
    }
    .contactData{
        max-width: 50%;
        position: relative;
        height: 100%;
    }
    .contactImg {
height: 100%;
      }
  `}

   </style>
    </section>
  )
}

export default Contact
