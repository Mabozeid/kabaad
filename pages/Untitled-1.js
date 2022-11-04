import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import carouselOne from '../public/group-people-working-out-business-plan-office.jpg';
import carouselTwo from '../public/pexels-fauxels-3182747.jpg';
import carouselThree from '../public/pexels-fauxels-3184303.jpg';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item className='CarouselItem'>
        <Image
          className="d-block w-100"
          src= {carouselOne}
          alt="First slide"
        />
        <Carousel.Caption className="CarouselCaption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='CarouselItem'>
        <Image
          className="d-block w-100"
          src= {carouselTwo}
          alt="Second slide"
        />

        <Carousel.Caption className="CarouselCaption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='CarouselItem'>
        <Image
          className="d-block w-100"
          src= {carouselThree}
          alt="Third slide"
        />

        <Carousel.Caption className="CarouselCaption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselFade;