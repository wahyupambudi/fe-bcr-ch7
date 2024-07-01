import { useAuth } from "../../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import menu from "../../assets/images/main/icon/fi_menu.png";

const TopNavbar: React.FC = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Navbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img src={menu} alt="Menu Icon" />
        </div>
        <div style={{ display: "flex", gap: 24, height: 40, marginRight: 24 }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="user" style={{ display: "flex", paddingRight: 40 }}>
            <img
              src="https://github.com/mdo.png"
              alt="User Photo"
              style={{ width: "36px", height: "36px", borderRadius: "50%" }}
            />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title=""
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={logout}>Keluar</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
