import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <>
<footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Kabaad.</h1>
            <ul className="text-center">

              <li>
                <a href="#">
                <FontAwesomeIcon icon={faArrowRightToBracket} />
                 </a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon icon={faFaceSmile}/></a>
              </li>
              <li>
              <a href="#"><FontAwesomeIcon icon={faFaceSmile}/></a>
              </li>
              <li>
              <a href="#"><FontAwesomeIcon icon={faFaceSmile}/></a>
              </li>
              <li>
              <a href="#"><FontAwesomeIcon icon={faFaceSmile}/></a>
              </li>
              <li>
              <a href="#"><FontAwesomeIcon icon={faFaceSmile}/></a>
              </li>
            </ul>

            <div className="copyright text-center">
              © 2022 Kabaad All Rights Reserved By
              <a href="#">KeepGo</a>
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
  background: #f9f9f9;
  border-top: 1px solid #ddd;
  padding-top: 50px;
  padding-bottom: 50px;
}

footer h1 {
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

footer li {
  margin-right: 10px;
  margin-left: 10px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 50%;
  border: 1px double rgba(224, 224, 224, 0.5);
  cursor: pointer;
  background-color: #fff;
}
footer a {
  color: #333;
  width: 100%;
  height: 100%;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}
footer li:hover {
  background: #0069ff;
}
footer li:hover a {
  color: #fff;
}

footer .copyright {
  font-weight: 600;
  font-size: 14px;
  color: #333;
  letter-spacing: 1.7px;
  line-height: 28px;
  padding-top: 20px;
}

footer .copyright a:hover {
  color: #0069ff;
}
/*===============================================================
    end footer
===============================================================*/`}
    </style>
    </>
  );
}