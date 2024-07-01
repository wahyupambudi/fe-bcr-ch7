import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface AddCarFormProps {
  onCarAdded: () => void;
  onCancel: () => void;
}

const AddCarForm: React.FC<AddCarFormProps> = ({ onCarAdded, onCancel }) => {
  const [car_name, setCarName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [seat, setSeat] = useState(0);
  const [transmission, setTransmission] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState(0);
  const [availabillity, setAvailabillity] = useState(true);
  const [start_rent, setStartRent] = useState("");
  const [end_rent, setEndRent] = useState("");
  const [img, setImg] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("car_name", car_name);
    formData.append("type", type);
    formData.append("desc", desc);
    formData.append("seat", seat.toString());
    formData.append("transmission", transmission);
    formData.append("year", year);
    formData.append("price", price.toString());
    formData.append("availabillity", availabillity.toString());
    formData.append("start_rent", start_rent);
    formData.append("end_rent", end_rent);
    if (img) {
      formData.append("img", img);
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post("https://be-bcr-ch6-production.up.railway.app/api/v1/cars/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      onCarAdded(); // Panggil fungsi ini setelah mobil berhasil ditambahkan
      toast.success("Data Berhasil Ditambah");
    } catch (error) {
      toast.error("Data Gagal Ditambah");
      console.error("Failed to add car", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="car_name" className="form-label">
              Car Name
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="car_name"
              value={car_name}
              onChange={(e) => setCarName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="seat" className="form-label">
              Seat
            </label>
            <input
              type="number"
              className="form-control w-100"
              id="seat"
              value={seat}
              onChange={(e) => setSeat(Number(e.target.value))}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control w-100"
              id="img"
              onChange={(e) =>
                setImg(e.target.files ? e.target.files[0] : null)
              }
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="availabillity"
              checked={availabillity}
              onChange={(e) => setAvailabillity(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="availabillity">
              Available
            </label>
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="transmission" className="form-label">
              Transmission
            </label>
            <input
              type="text"
              className="form-control w-100"
              id="transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control w-100"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="start_rent" className="form-label">
              Start Rent
            </label>
            <input
              type="date"
              className="form-control w-100"
              id="start_rent"
              value={start_rent}
              onChange={(e) => setStartRent(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="end_rent" className="form-label">
              End Rent
            </label>
            <input
              type="date"
              className="form-control w-100"
              id="end_rent"
              value={end_rent}
              onChange={(e) => setEndRent(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary m-r-10">
        Add Car
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default AddCarForm;
