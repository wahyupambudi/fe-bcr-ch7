import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import ListCars from "./ListCars";
import AddCarForm from "./AddCar";

const Cars: React.FC = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const [showAddCarForm, setShowAddCarForm] = useState(false);

  // check when is logged
  useEffect(() => {
    if (authState.isAuthenticated === false) {
      navigate("/");
    }
  }, [authState.isAuthenticated, navigate]);

  const handleAddCarClick = () => {
    setShowAddCarForm(true);
  };

  const handleCarAdded = () => {
    setShowAddCarForm(false);
  };

  return (
    <div>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <TopNavbar />
          <Breadcrumb />
          <div style={{ backgroundColor: "#f4f5f7", padding: "10px" }}>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary m-r-10"
              >
                All
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary m-r-10"
              >
                Small
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary m-r-10"
              >
                Medium
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary m-r-10"
              >
                Large
              </button>
            </div>
            <div>
              <Row>
                <Col>
                  <div className="d-flex justify-content-between mb-3">
                    <h4>{showAddCarForm ? "Add New Car" : "List Cars"}</h4>
                    {!showAddCarForm && (
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={handleAddCarClick}
                      >
                        + Add New Car
                      </button>
                    )}
                  </div>
                </Col>
              </Row>
              {showAddCarForm ? (
                <AddCarForm
                  onCarAdded={handleCarAdded}
                  onCancel={() => setShowAddCarForm(false)}
                />
              ) : (
                <ListCars />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cars;
