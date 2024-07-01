import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { useEffect } from "react";
import Breadcrumb from "../Breadcrumb";
import ListData from "./ListData";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { authState} = useAuth();


  useEffect(() => {
    if(authState.isAuthenticated === false) {
      navigate("/")
    }
  }, [authState.isAuthenticated, navigate]);

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
           <ListData />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
