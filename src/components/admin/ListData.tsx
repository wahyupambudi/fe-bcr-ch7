import axios from "axios";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "../../assets/css/dataTables.dataTables.css";
import "datatables.net";

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

const ListData: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const tableRef = useRef<HTMLTableElement>(null);

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
    if (tableRef.current) {
      $(tableRef.current).DataTable();
    }
  }, [cars]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <div className="table-wrapper card" style={{ padding: "10px" }}>
        <h4>List Order</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>User Email</th>
              <th>Car</th>
              <th>Start Rent</th>
              <th>Finish Rent</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "13px" }}>
            <tr>
              <td>1</td>
              <td>User Email</td>
              <td>Car</td>
              <td>Start Rent</td>
              <td>Finish Rent</td>
              <td>Price</td>
              <td>Status</td>
            </tr>
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                «
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                9
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                »
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="table-wrapper card" style={{ padding: "10px" }}>
        <h4>List Cars</h4>

        <table ref={tableRef} className="display">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Start Rent</th>
              <th>Finish Rent</th>
              <th>Created at</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "13px" }}>
            {cars.map((car, index) => (
              <tr key={car.id}>
                <td>{index + 1}</td>
                <td>{car.car_name}</td>
                <td>{car.type}</td>
                <td>Rp {new Intl.NumberFormat("id").format(car.price)} </td>
                <td>{new Date(car.start_rent).toLocaleString()}</td>
                <td>{new Date(car.end_rent).toLocaleString()}</td>
                <td>{new Date(car.created_At).toLocaleString()}</td>
                <td>{new Date(car.updated_At).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListData;
