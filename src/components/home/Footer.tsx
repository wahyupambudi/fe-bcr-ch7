import iconFb from "../../assets/images/main/icon/fb.png";
import iconIg from "../../assets/images/main/icon/ig.png";
import iconTwitter from "../../assets/images/main/icon/twitter.png";
import iconTwich from "../../assets/images/main/icon/twich.png";
import iconMail from "../../assets/images/main/icon/mail.png";
import logo from "../../assets/images/main/logo.png";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <section>
          <div className="container fs-14 mt-6 w-1141">
            <div className="row mt-5 mb-5">
              <div className="col-md-3 w-268 me-6 p-0 ml-10">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>
              <div className="col-md-3 w-79 me-6 ml-10">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
              </div>
              <div className="col-md-3 w-268 me-6">
                <p>Connect with us</p>
                <a className="footer-a me-2" href="#">
                  <img src={iconFb} alt="logo" />
                </a>
                <a className="footer-a me-2" href="#">
                  <img src={iconIg} alt="logo" />
                </a>
                <a className="footer-a me-2" href="#">
                  <img
                    src={iconTwitter}
                    alt="logo"
                  />
                </a>
                <a className="footer-a me-2" href="#">
                  <img
                    src={iconMail}
                    alt="logo"
                  />
                </a>
                <a className="footer-a me-2" href="#">
                  <img
                    src={iconTwich}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="col-md-3 w-268 ">
                <p>Copyright Binar 2022</p>
                <a className="footer-a" href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
