import React from "react";
import { useAuth } from "../../context/AuthContext";
import "../../assets/css/bootstrap.css";
import "../../assets/css/owl/owl.carousel.css";
import "../../assets/css/owl/owl.theme.default.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../../assets/css/style.css";
import logo from "../../assets/images/main/logo.png";
import imgCar from "../../assets/images/main/img_car.png";
import closeHmb from "../../assets/images/main/icon/fi_x.png";
import { Link, useNavigate } from "react-router-dom";

const hideSidebar = () => {
  const hideSidebar = document.getElementById("navbarSupportedContent");
  if (hideSidebar) {
    hideSidebar.classList.toggle("show");
  }
};

const NavBar: React.FC = () => {
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <header className="bg-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 fs-14">
                  <li className="nav-item nav-mobile">
                    <a
                      style={{ float: "left" }}
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      <strong>BCR</strong>
                    </a>
                    <button
                      name="btn-hide"
                      className="btn-hide"
                      onClick={hideSidebar}
                      style={{ float: "right" }}
                    >
                      <img src={closeHmb} alt="" />
                    </button>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link active" aria-current="page" href="#">
                      Our Service
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link active" href="#">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link active" href="#">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item me-3">
                    <a className="nav-link active" href="#">
                      FAQ
                    </a>
                  </li>
                </ul>
                {authState.isAuthenticated ? (
                    <button className="btn text-white fs-14 btn-danger" onClick={handleLogout}>Logout</button>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="btn text-white fs-14 btn-header"
                    >
                      <strong>Register</strong>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
          <div className="container mt-3">
            <div className="row">
              <div className="col mt-5">
                <h1 className="fs-36">
                  <strong>
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                  </strong>
                </h1>
                <p className="mt-3 fs-14 w-468">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
              <div className="col">
                <img src={imgCar} className="img mt-24 img-car" alt="img_car" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
