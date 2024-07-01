import "./sidebars.css";
import "./sidebars.js";
import logosquare from "../../assets/images/main/logosquare.png";
import logorectangle from "../../assets/images/main/logorectangle.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const currentPage = pathnames[pathnames.length - 1];

  return (
    <div>
      <main style={{position: "fixed"}}>
        <div
          className="d-flex flex-column flex-shrink-0"
          style={{ width: "4.5rem", backgroundColor: "#0D28A6" }}
        >
          <a
            href="/"
            className="d-block p-3 link-dark text-decoration-none"
            title="Icon-only"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <img src={logosquare} alt="icon" />
            <span className="visually-hidden">Icon-only</span>
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <Link
                to="../admin/dashboard"
                className="nav-link py-3 border-bottom"
                aria-current="page"
                title="Home"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <svg
                  className="bi text-white"
                  width="24"
                  height="24"
                  role="img"
                  aria-label="Home"
                >
                  <use href="#home" />
                </svg>
                <span style={{ fontSize: "8px" }} className="text-white">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="../admin/cars"
                className="nav-link py-3 border-bottom"
                title="Customers"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-truck text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                <span style={{ fontSize: "8px" }} className="text-white">
                  Cars
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="d-flex flex-column flex-shrink-0"
          style={{ width: "100%", backgroundColor: "#fff" }}
        >
          <a
            href="/"
            className="d-block p-3 link-dark text-decoration-none"
            title="Icon-only"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <img src={logorectangle} alt="icon" />
            <span className="visually-hidden">Icon-only</span>
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link py-3 border-bottom"
                aria-current="page"
                title="Home"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                style={{ color: "#8A8A8A" }}
              >
                {currentPage && (
                  <li className="breadcrumb-item active text-uppercase fs-14" aria-current="page">
                    {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                  </li>
                )}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link py-3 border-bottom"
                aria-current="page"
                title="Home"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                style={{ color: "#000", backgroundColor: "#CFD4ED" }}
              >
                {currentPage && (
                  <li className="breadcrumb-item fs-14" aria-current="page">
                    {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                  </li>
                )}
              </a>
            </li>
          </ul>
        </div>
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="bootstrap" viewBox="0 0 118 94">
          <title>Bootstrap</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
          ></path>
        </symbol>
        <symbol id="home" viewBox="0 0 16 16">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </symbol>
      </svg>
    </div>
  );
};

export default Sidebar;
