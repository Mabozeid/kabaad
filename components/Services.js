import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Image  from 'next/image';
import marketing from "../public/bullhorn.png";
import branding from  "../public/branding.png";
import appdevelopment from  "../public/app-development.png";
import strategy from  "../public/analysis.png";
import uiux from  "../public/design.png";
import keyword from  "../public/keyword.png";

function Services() {
  return (
    <Container>


            <Row>
            <Col md={12}>
              <div className='sectionTitle'>
              <h1>Main Features</h1>
              </div>
            </Col>
        <Col md={4}>
        <div className='serviceItem'> 
        <Image
        src={branding}
        className="about-img"
        alt='about'
        width={50}
        height={50}
        />
        <h2>Branding</h2>
        <p>Lorem ipsum dolor consectetur adipisicing elit do eiusm incididunt a labore et dolore magna aliqua consectetur adipisicing elit.
        </p>
        </div>
        </Col>

        <Col md={4}>
        <div className='serviceItem'>
          <div className='serviceImg'>
          <Image
          src={uiux}
          className="about-img"
          alt='about'
          width={50}
          height={50}
          />
          </div> 

        <h2>UX & UI Design</h2>
        <p>Lorem ipsum dolor consectetur adipisicing elit do eiusm incididunt a labore et dolore magna aliqua consectetur adipisicing elit.
        </p>
        </div>
        </Col>

       <Col md={4}>
       <div className='serviceItem'> 
       <Image
        src={marketing}
        className="about-img"
        alt='about'
        width={50}
        height={50}
        />
       <h2>business strategy</h2>
        <p>Lorem ipsum dolor consectetur adipisicing elit do eiusm incididunt a labore et dolore magna aliqua consectetur adipisicing elit.
        </p>
        </div>
        </Col>

        <Col md={4}>
        <div className='serviceItem'> 
        <Image
        src={strategy}
        className="about-img"
        alt='about'
        width={50}
        height={50}
        />
        <h2>Digital Marketing</h2>
        <p>Lorem ipsum dolor consectetur adipisicing elit do eiusm incididunt a labore et dolore magna aliqua consectetur adipisicing elit.
        </p>
        </div>
        </Col>

        <Col md={4}>
        <div className='serviceItem'> 
        <Image
        src={appdevelopment}
        className="about-img"
        alt='about'
        width={50}
        height={50}
        />
        <h2>App Development</h2>
        <p>Lorem ipsum dolor consectetur adipisicing elit do eiusm incididunt a labore et dolore magna aliqua consectetur adipisicing elit.
        </p>
        </div>
        </Col>

        <Col md={4}>
        <div className='serviceItem'> 
        <Image
        src={keyword}
        className="about-img"
        alt='about'
        width={50}
        height={50}
        />
        <h2>Keyword Research</h2>
        <p>Lorem ipsum dolor consectetur adipisicing elit do eiusm incididunt a labore et dolore magna aliqua consectetur adipisicing elit.
        </p>
        </div>
        </Col>

      </Row>
      <style jsx global>
    {`
    .sectionTitle{
      text-align:center;
      margin-bottom:50px;
    }
    .sectionTitle h1{
      font-size: 45px;
      text-transform: capitalize;
      color: var(--main-color);
      font-weight: 700;
      font-family: "Raleway",sans-serif;
      margin: 20px auto;
    }

    .serviceItem {
      padding: 50px;
      width: 100%;
      background-color: #fff;
      text-align: center;
      border: 1px solid  #ddd;
      margin-bottom: 50px;
      border-radius: 25px;

    }
    .serviceItem:hover {
      box-shadow:0px 10px 25px rgb(68 68 68 / 0.2);
      background-color:var(--main-color);

    }
    .serviceItem h2{
    font-size: 25px;
    padding-bottom: 10px;
    color:var(--main-color);
    padding-top: 10px
    }
    .serviceItem:hover h2 , .serviceItem:hover p{
      color:#fff;
    }
    .serviceItem img:before {
      content: "";
      position:absolute;
      height:100px;
      width:100px;
      background-color:#fff;
    }
  `}



   </style>
    </Container>
  )
}

export default Services
