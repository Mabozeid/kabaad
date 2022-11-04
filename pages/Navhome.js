import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navhome() {
  return (
    <>
      <Navbar bg="light" variant="light" className="navHome">
        <Container>
          <Navbar.Brand href="/" className="navBrand">KABAAD.</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/" className='navItem'>Home</Nav.Link>
            <Nav.Link href="/features" className='navItem'>Features</Nav.Link>
            <Nav.Link href="/Pricing" className='navItem'>Pricing</Nav.Link>
            <Nav.Link href="/Portfolio" className='navItem'>Portfolio</Nav.Link>
            <Nav.Link href="/News" className='navItem'>News</Nav.Link>
            <Nav.Link href="/Contact" className='navItem'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  <style jsx global>{`
.navHome {
height: 70px ;
background-color: #fff !important;
border-bottom: 1px solid #eee;
}
.navBrand{  
  z-index: 999;
  font-size: 28px;
  color: #0069ff !important;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  text-align: center;
  padding-bottom: 15px;
  font-family: "Open Sans", sans-serif;
}

  .navItem{    
    font-size: 13px;
    font-weight: 700;
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