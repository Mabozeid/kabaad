import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { facebook } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import mainLogo from '../public/v686-taus-06-corporatelogos.png';

export default function Footer() {
  return (
    <>

<footer className="footer">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-sm-6 col-lg-3 mb-30">
                            
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Image
                                      className="mainBrand"
                                      src={mainLogo}
                                      alt="mainLogo"
                                      width="50"
                                      height="50"
                                    /> 
                                <h3>Kabad.</h3>
                                </div>
                                
                                <p className="mb-30">With More Than 20 Years Of Experience, We Help To Develop Your Business, We Provide The Best Service That Comes With The Best Results.</p>
                                
                                <div className="contact-info">
                                    <div className="single-contact mb-0">
                                        <span><i className="fas fa-clock"></i></span>
                                        <div className="info-cont">    
                                            <p>Monday - Fraiday, 9am - 5pm,</p>
                                            <p>Saturday &amp; Sunday - CLOSED</p>
        
                                        </div>
                                    </div>
                                </div>    
                                
                            
                            </div>
                        </div>
                        
                    
                    
                        <div className="col-sm-6 col-lg-3 mb-30">
                            <div className="footer-widget">
                                <h4>Contact Us</h4>
                                
                                <div className="line-footer"></div>
                                
                                <div className="contact-info">
        
                                    <div className="single-contact">
                                        <span><i className="fa fa-phone"></i></span>
                                        <div className="info-cont">
                                            <p>+(002) 0114-9912-318</p>       
                                            <p>+(002) 0111-7457-354</p>
        
                                        </div>
                                    </div>
                                    
                                    <div className="single-contact">
                                        <span><i className="fa fa-envelope"></i></span>
                                        <div className="info-cont">
                                            <p>Hello@example.com</p>
                                            <p>support@yourwebsite.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="single-contact mb-0">
                                        <span><i className="fa fa-location-arrow"></i></span>
                                         <div className="info-cont">
                                            <p>US - Los Angeles 5135 - 4234 </p>
                                            <p>In The Center Street Name Here</p>
                                         </div>
                                    </div>
        
                                    
        
                                </div>
                                
                                
                               
                            </div>
                        </div>
                        
                        
                        <div className="col-sm-6 col-lg-3 mb-30">
                            <div className="footer-widget mb-0">
                                <h4>Company</h4>
                                <div className="line-footer"></div>
                                <div className="row">
                                    <div className="col">
                                        <ul className="footer-link mb-0">
                                            <li>
                                                <a href="about-us.html">
                                                    <span><i className="fas fa-caret-right"></i></span> About Us
                                                </a>
                                            </li>
        
                                            <li>
                                                <a href="our-team.html">
                                                    <span><i className="fas fa-caret-right"></i></span> Meet Our Team
                                                </a>
                                            </li>
        
                                            <li>
                                                <a href="testimonials.html">
                                                    <span><i className="fas fa-caret-right"></i></span> Testimonials
                                                </a>
                                            </li>
        
                                            <li>
                                                <a href="case-study-three.html">
                                                    <span><i className="fas fa-caret-right"></i></span> Case Studies
                                                </a>
                                            </li>
        
                                            <li>
                                                <a href="contact-us.html">
                                                    <span><i className="fas fa-caret-right"></i></span> Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                   
                                    
                                    
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        
                        <div className="col-sm-6 col-lg-3" id="abId0.07993246170368917">
                            <div className="footer-widget" id="abId0.44952832157777967">
                                <h4>Newsletter</h4>
                                <div className="line-footer"></div>
                                <p className="mb-15">Signup for our mailing list to get latest updates and news.</p>
                                
                                <div className="newsletter-item" id="abId0.4416775194793088" abineguid="7341C8D1B86548628C2DBD3CB22B1DED">
                                    <input type="email" name="email" placeholder="Your Email"></input>
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>

                                
                                List Icons Social Media
                                <ul className="social-media">
                                   <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                   <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                   <li><a href="#" className="instagram"><i className="fab fa-instagram"></i></a></li>
                                   <li><a href="#" className="dribbble"><i className="fab fa-dribbble"></i></a></li>
                                </ul> 
                                
                                
                            </div>
                        </div>
                        
                    
                        
                        
                    
                    </div>
                  
                </div>
                
               <div className="footer-bar">
                <div className="container">
                     <div className="footer-copy">
      
                    <div className="copyright">
                        © 2021 HUBA All Rights Reserved By
                        <a href="https://themeforest.net/user/Keep-go" target="_blank">KeepGo</a>
                    </div>
        
        
                    </div>   
                   
                </div> 
                
               </div>
                
               </div> 
            </footer>

    <style jsx global >
        {`
/*===============================================================
start footer
===============================================================*/


footer {
  padding-top: 180px;
  background: #323232;
  position: relative;
  background-image: url('../public/group-people-working-out-business-plan-office.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

}
.footer-default-padding {
  padding-top: 80px;
}
footer .overlay {
  background: rgba(35, 35, 35, 0.95);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.footer-widget h4 {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  color: #ffffff;
  letter-spacing: .5px;
}
.footer-widget .line-footer {
  width: 50px;
  height: 11px;
  margin-top: 20px;
  margin-bottom: 30px;
  background-image: url(../images/aquarius.png);
  background-size: cover;
}

.footer-row {
  margin-bottom: 50px;
  position: relative;
}


.footer-widget .footer-logo img {
  width: 150px;
  margin-bottom: 20px;
}
.contact-info {
  padding-left: 0;
}
.contact-info .single-contact {
  position: relative;
  padding-left: 40px;
  margin-bottom: 30px;
}

.contact-info .single-contact span  {
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.85);
  top: 0;
  font-size: 16px;
}
.contact-info .single-contact .info-cont p {
  color: #ccc;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 15px;
  position: relative;
}



.footer-widget .social-media-footer {
  padding-left: 0;
  margin-bottom: 0;
}
.footer-widget .social-media-footer li {
  display: inline-block;
  padding-right: 15px;
}
.footer-widget .social-media-footer li a {
  font-size: 18px;
  color: #fff;
  transition: .1s;
  
}
.footer-widget .social-media-footer li a:hover {
  color: #f57479;
}
/* COMPANY LINKs */
.footer-widget .footer-link {
  padding-left: 0;
}
.footer-widget .footer-link li {
  border-bottom: 1px solid rgba(214, 214, 214, 0.2);
  transition: .4s;
  display: block;
}
.footer-widget .footer-link li:first-child a {
  padding-top: 0;
}
.footer-widget .footer-link li:hover a {
  padding-left: 8px;
  color: #FFF;
}
.footer-widget .footer-link li a {
  font-size: 13px;
  color: #ccc;
  display: block;
  transition: .4s;
  padding-top: 13px;
  padding-bottom: 13px;
  line-height: 14px;

}
.footer-widget .footer-link li span {
  padding-right: 5px;
  font-size: 10px;
}

/*  newsletter-item */

.footer-widget p {
  font-weight: 500;
  color: #ccc;
  font-size: 14px;
}
.newsletter-item {
  position: relative;
  margin-bottom: 35px;
}
.newsletter-item input {
  height: 50px
}
.newsletter-item button {
  height: 50px;
  box-shadow: none;
  position: absolute;
  cursor: pointer;
  right: 0px;
  width: 50px;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  background: var(--main-color);
  display: inline-block;
  top: 0;
  line-height: 50px;
  border: 1px solid #ffbeab;
  border-radius: 0 15px 15px 0;
}

.footer-bar {
  z-index: 3;
  position: relative;
  background: #232323;
}

footer .copyright {
  font-weight: 500;
  font-size: 14px;
  color: #f4f7fd;
  letter-spacing: 1.7px;
  line-height: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
}
footer .copyright a {
  color: var(--main-color);
  font-weight: 700;
}
.social-media {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 0;
}
.social-media li {
  display: inline-block;
}
.social-media li a {    
  margin-right: 10px;
  transition: .4s;
  width: 40px;
  height: 40px;
  border-radius: 1px;
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  border: 1px solid #ffbeab;
  background: var(--main-color);
  display: block;
  
}
.social-media li a:hover {
  background: #FFF;
  color: #1e2256;
  border: 1px solid #ffffff;
}

/*===============================================================
end footer
===============================================================*/
/`}
    </style>
    </>
  );
}