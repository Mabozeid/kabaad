import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import Image  from 'next/image';
import about from '../public/tm-single011.jpg';


function test() {
  return (
       <>
       <div className='padtobo-100 '>
       <Row>
        <Col md={6}>
        <Image
        src={about}
        className="about-img"
        alt='about'
        />
        </Col>

        <Col md={6}>
         <div className='aboutInfo'>
          <span className='subTitle'>about us</span>
         <h1 className='aboutHead'>We're an Independent Design & Development Agency.</h1>
        <p>
        Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel dapibusid, mattis velnisi.
        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar facilisis
        </p>
        <h2>Our Mission</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
        </p>

        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
         </div>



        </Col>

      </Row>
       </div>

      <style jsx global>
    {`
    .aboutInfo{
      margin-left:60px;
    }

.aboutInfo h2 {
  font-size: 24px;
  color: #444;
  font-weight: 600;
  margin-bottom: 10px;
}
.subTitle {
  color: #444;
  display: inline-block;
  font-size: 18px;
  text-transform: uppercase;
  position: relative;
  z-index: 2000;
  margin-left: 35px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 1.7;
}

.subTitle::before {
  clip-path: polygon(100% 71%, 62% 0, 24% 100%);
  content: '';
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: var(--main-color);
  z-index: 2000;
  top: 4px;
  left: -38px;
  right: 0;
  bottom: 0;
}
.subTitle::after {
  content: "";
  position: absolute;
  height: 10px;
  width: 110%;
  background-color: #00d8c36e;
  left: -5%;
  right: 0;
  bottom: 4px;
  z-index: -1;
}

    .aboutHead {
    font-size: 45px;
    text-transform: capitalize;
    color: var(--main-color);
    font-weight: 700;
    font-family: "Raleway",sans-serif;
    margin: 20px auto;
    }


`}

   </style>
   </>
  )
}

export default test
