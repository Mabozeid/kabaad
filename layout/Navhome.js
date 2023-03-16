import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import mainLogo from '../public/v686-taus-06-corporatelogos.png';
import Button from 'react-bootstrap/Button';




function Navhome() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navHome">
      <Container>
      <Navbar.Brand  href="/" className="navBrand">
          <Image
          className="mainBrand"
          src={mainLogo}
          alt="."
          width="50"
          height="50"
        />  KABAD.</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">


          <Link  href="/" legacyBehavior>
          <a className='navItem'>Home</a>
          </Link>
          
          <Link  href="/Features" legacyBehavior>
          <a className='navItem'>Features</a>
          </Link>

          <Link href="/Pricing" legacyBehavior>
          <a className='navItem'>Pricing</a>
          </Link>

           <Link  href="/Portfolio" legacyBehavior>
           <a className='navItem'>Portfolio</a>
           </Link>

           <Link href="/News" legacyBehavior>
           <a className='navItem'>News</a>
           </Link>
           
           <Link  href="/Contact" legacyBehavior >
           <a className='navItem'>Contact</a>
           </Link>
          </Nav>
          <Nav>
          {/* <Button variant="primary">Request A Quote</Button>{' '} */}
  <div className='mainBtn'>
    <li>
    Request A Quote
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </li>
    </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

  <style jsx global>{`
.navHome {
// height: 70px ;
background-color: #fff !important;
border-bottom: 1px solid #eee;
}
.navBrand{  
  z-index: 999;
  font-size: 28px;
  color: #40558e !important;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  text-align: center;
  padding-bottom: 15px;
  font-family: "Open Sans", sans-serif;
  line-height: 50px;
  display: flex;
}

  .navItem{    
    font-size: 13px;
    font-weight: 700;
    color: #333;
    padding: 20px 0;
    font-family: "Open Sans", sans-serif;
    margin: 0 20px 0 5px;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.25px;
  }

  .mainBtn li {
  --c: #2d4576;
  color: var(--c);
  border-radius: 0.5em;
  background-color: #2d4576;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: .1em;
  text-align: center;
  line-height: 1.5;
  position: relative;
  overflow: hidden;
  z-index: 1;
  -webkit-transition: .5s;
  -moz-transition: .5s;
  -o-transition: .5s;
  transition: .5s;
  padding: 10px;
}

.mainBtn li span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: #00d8c3;
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}


.mainBtn li:hover span {
    transform: translateY(0) scale(2);
}

.mainBtn li span:nth-child(1) {
    --n: 1;
}

.mainBtn li span:nth-child(2) {
    --n: 2;
}

.mainBtn li span:nth-child(3) {
    --n: 3;
}

.mainBtn li span:nth-child(4) {
    --n: 4;
}

`}</style>
    </>
  );
}

export default Navhome;