import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import carouselOne from '../public/pexels-fauxels-3184360.jpg';
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
          width={1920}
          height={1280}
        />
        <Carousel.Caption className="CarouselCaption">
        <h3>Best Creative Team
          <br></br>
          With Smart Ideas
          </h3>
          <p>Our Strategies At Work Are The Means By Which To Achieve The Desired Goals, And Achieve Your Goals And Dreams Here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='CarouselItem'>
        <Image
          className="d-block w-100"
          src= {carouselTwo}
          alt="Second slide"
          width={1920}
          height={1280}
        />

        <Carousel.Caption className="CarouselCaption">
          <h3>Find best soluation for Industry
          <br></br>
          With Smart Ideas
          </h3>

          <p>Our Strategies At Work Are The Means By Which To Achieve The Desired Goals, And Achieve Your Goals And Dreams Here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='CarouselItem'>
        <Image
          className="d-block w-100"
          src= {carouselThree}
          alt="Third slide"
          width={1920}
          height={1280}
        />

        <Carousel.Caption className="CarouselCaption">
          <h3>make your life be Easiest
          <br></br>
          With Smart Ideas
          </h3>

          <p>Our Strategies At Work Are The Means By Which To Achieve The Desired Goals, And Achieve Your Goals And Dreams Here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default CarouselFade;