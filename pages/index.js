import Head from 'next/head'
import { fab } from '@fortawesome/free-brands-svg-icons'
import CarouselFade from '../components/Carousel.js'
import About from '../components/About'
import Services from '../components/Services.js'

function HomePage() {
  return (
    <>
    <CarouselFade />

        <div className="container">
      <Head>
        <title>Kabad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <About  />
        <Services />



      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }




        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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

        @media (min-width: 575px) and (max-width: 1300px) { 
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
