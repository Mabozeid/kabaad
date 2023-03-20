import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import { fab } from '@fortawesome/free-brands-svg-icons'
import CarouselFade from '../components/Carousel.js'
import About from '../components/About'
import Services from '../components/Services.js'
import News from'../components/News'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <>
    <CarouselFade />

      <div className="">
      <Head>
        <title>Kabad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container>
      <About  />
      </Container>
     
        <Services />
          <News/>
          <Contact />


      <style jsx global>{`
        
        .CarouselItem {
          height: calc(100vh - 70px) !important;
          }
          
          .CarouselItem::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px) !important;
            background-color: #3333338f;
            z-index:199;
          }

          .CarouselCaption {
            z-index: 200;
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            // bottom: 0;
            margin: auto;
            // transform: translate(0, 50%);
            padding: 0 ;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .CarouselCaption p
          {
          color: #fff;
          letter-spacing: 0.75px;
          max-width: 550px;
          margin-right: auto;
          margin-left: auto;
          }
          

          .carousel-indicators{
            margin-bottom: 3rem;
          }


          .CarouselCaption h3 {
            font-size: 60px;
            font-weight: 700;
            color: #00d8c3;
            text-transform: capitalize;
            line-height: 1.1;
            font-family: "Raleway",sans-serif;
            letter-spacing: 1.5px;
            margin-bottom: 20px;
        }

        @media (max-width: 1300px) { 
          .CarouselItem img {
            min-height:100%;
            max-height:100%;
          }
        }

          }  

      `}

    </style>
    </div>
    </> 

  )
}
export default HomePage
