import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import  blogOne from '../public/blog-img-1.jpg';
import  blogTwo from '../public/blog-img-1a.jpg';
import  blogThree from '../public/blog-img-1b.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons"
import {
    faClockFour
  } from "@fortawesome/free-solid-svg-icons";
function News() {
  return (
    <section className='padtobo-100 news'>
    <Container>
        <Row>
        <Col md={12}>
            <div className='sectionTitle'>
            <span className='subTitle'>Recent Blog Posts</span>
            <h1>new Feeds</h1>
            </div>
        </Col>

        <Col md={4} >
        <div class="half-blog-card">
			<div class="half-blog-img"> <a href="blog-details.html">      
         <Image
        src={blogOne}
        className="about-img"
        alt='news'
        /></a> </div>
			<div class="half-blog-content">
			<div class="blog-quick-inf mb20"><span> <span>
                                           <FontAwesomeIcon
                                          icon={faCalendarAlt}
                                          style={{ fontSize: 16, color: "#444" }}
                                        />  </span>12 March 21</span> <span>                                 <span>
                                           <FontAwesomeIcon
                                          icon={faClockFour}
                                          style={{ fontSize: 16, color: "#444" }}
                                        />  </span>  5 Min Read</span> </div>
			<h4 class="mb15"><a href="blog-details.html">Best Technology for Mobile Application Development</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget	dolor.</p>							
			</div>
		</div>
        </Col>

        <Col md={4}>
        <div class="half-blog-card">
						<div class="half-blog-img"> <a href="blog-details.html">        
          <Image
        src={blogTwo}
        className="about-img"
        alt='news'
        />
        </a> </div>
						<div class="half-blog-content">
							<div class="blog-quick-inf mb20"><span> <span>
                                           <FontAwesomeIcon
                                          icon={faCalendarAlt}
                                          style={{ fontSize: 16, color: "#444" }}
                                        />  </span>12 March 21</span> <span> 
                                 <span>
                                           <FontAwesomeIcon
                                          icon={faClockFour}
                                          style={{ fontSize: 16, color: "#444" }}
                                        />  </span> 5 Min Read</span> </div>
							<h4 class="mb15"><a href="blog-details.html">Exploring the Key Features of Laravel 7 Framework</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget	dolor.</p>							
						</div>
					</div>
        </Col>
        
        <Col md={4}>
        <div class="half-blog-card">
						<div class="half-blog-img"> <a href="blog-details.html">          <Image
        src={blogThree}
        className="about-img"
        alt='news'
        /></a> </div>
						<div class="half-blog-content">
							<div class="blog-quick-inf mb20"><span> <span>
                                           <FontAwesomeIcon
                                          icon={faCalendarAlt}
                                          style={{ fontSize: 16, color: "#444" }}
                                        />  </span> 12 March 21</span> <span>                                 <span>
                                           <FontAwesomeIcon
                                          icon={faClockFour}
                                          style={{ fontSize: 16, color: "#444" }}
                                        />  </span>  5 Min Read</span> </div>
							<h4 class="mb15"><a href="blog-details.html">Best Technology for Mobile Application Development</a></h4>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget	dolor.</p>							
						</div>
					</div>
        </Col>

        </Row>
    </Container>
    <style jsx global>
    {`
    .news {
        background-color: #f9f9f9;
        width:100%;
    }
.half-blog-card {
    border-radius: 14px;
    overflow: hidden;
    border: 5px solid #fff;
    border-bottom: 0;
    background: #f7f7f7;
    -webkit-box-shadow: 0 10px 15px 0 rgb(0 0 0 / 7%);
    box-shadow: 0 10px 15px 0 rgb(0 0 0 / 7%)
}

.half-blog-img {
    height: 280px
}

.half-blog-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center
}

.half-blog-content {
    padding: 40px 25px;
    background: #fff
}

.half-blog-content h3 {
    font-size: 28px;
    line-height: 38px
}

.blog-quick-inf {
    font-weight: 300;
    font-size: 17px
}

.blog-quick-inf span+span {
    margin-left: 15px
}

.half-blog-content h4 {
    font-weight: 600
}

  `}



   </style>
    </section>

  )
}

export default News
