import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import rent from "../../assets/images/main/icon/fi_key.png";
import clock from "../../assets/images/main/icon/fi_clock.png";
import { Button, Col, Modal, Row } from "react-bootstrap";
import deleteCar from "../../assets/images/main/deleteCar.png";
import { toast } from "react-toastify";
import EditCarForm from "./EditCar";

interface Car {
  id: number;
  user_id: number;
  car_name: string;
  type: string;
  desc: string;
  seat: number;
  transmission: string;
  year: string;
  price: number;
  availabillity: boolean;
  start_rent: string;
  end_rent: string;
  img: string;
  created_At: Date;
  updated_At: Date;
  deleted_At: Date | null;
}

const ListCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const fetchCars = async () => {
    try {
      const token = localStorage.getItem("token"); // Ambil token dari localStorage
      const response = await axios.get("https://be-bcr-ch6-production.up.railway.app/api/v1/cars", {
        headers: {
          Authorization: `Bearer ${token}`, // Tambahkan token ke header Authorization
        },
      });
      setCars(response.data.cars);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch cars");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleDelete = async () => {
    if (selectedCar) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://be-bcr-ch6-production.up.railway.app/api/v1/cars/delete/${selectedCar.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCars(cars.filter((car) => car.id !== selectedCar.id));
        setShowModal(false);
        toast.success("Data Berhasil Dihapus");
      } catch (error) {
      toast.error("Data Gagal Dihapus");
      console.error("Failed to delete car", error);
      }
    }
  };

  const handleEdit = (car: Car) => {
    setSelectedCar(car);
    setShowEditForm(true);
  };

  const handleCarUpdated = () => {
    setShowEditForm(false);
    fetchCars();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <img
          src={deleteCar}
          alt=""
          style={{ width: "100px", margin: "0 auto" }}
        />
        <Modal.Header>
          <Modal.Title style={{ margin: "0 auto" }}>
            Menghapus Data Mobil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
          menghapus?
        </Modal.Body>
        <Modal.Footer style={{ margin: "0 auto" }}>
          <Button variant="danger" onClick={handleDelete}>
            Ya
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
      {showEditForm && selectedCar ? (
        <EditCarForm
          car={selectedCar}
          onCarUpdated={handleCarUpdated}
          onCancel={() => setShowEditForm(false)}
        />
      ) : (
        <>
          <div className="row" id="cars-container">
            {cars.map((car) => (
              // eslint-disable-next-line react/jsx-key
              <div className="col-md-4">
                <div className="card shadow p-3 rounded">
                  <img className="img-car-filter rounded" src={car.img} alt="" />
                  <p className="card-text fs-14">
                    {car.car_name} / {car.type}{" "}
                  </p>
                  <p className="card-title fs-16">
                    Rp {new Intl.NumberFormat("id").format(car.price)} / hari
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 fs-14">
                      <img className="icon-20 me-2" src={rent} alt="logo" />
                      {format(new Date(car.start_rent), "dd-MM-yyyy")} -{" "}
                      {format(new Date(car.end_rent), "dd-MM-yyyy")}
                    </li>
                    <li className="mb-3 fs-14">
                      <img className="icon-20 me-2" src={clock} alt="logo" />
                      UpdatedAt{" "}
                      {format(new Date(car.updated_At), "dd-MM-yyyy, HH:mm")}
                    </li>
                  </ul>
                  <Row>
                    <Col>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          style={{ width: "100%", marginRight: "10px" }}
                          onClick={() => {
                            setSelectedCar(car);
                            setShowModal(true);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                            style={{ marginRight: "5px" }}
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                          </svg>
                          Delete
                        </button>
                        <button
                          className="btn text-white fs-14 btn-header"
                          id="filter-btn"
                          style={{ width: "100%" }}
                          onClick={() => handleEdit(car)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                            style={{ marginRight: "5px" }}
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                          </svg>
                          Edit
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <br />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListCars;
