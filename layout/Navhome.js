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
    <button>
    Request A Quote
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
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
`}</style>
    </>
  );
}

export default Navhome;