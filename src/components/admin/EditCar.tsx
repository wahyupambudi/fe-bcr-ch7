import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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

interface EditCarFormProps {
  car: Car;
  onCarUpdated: () => void;
  onCancel: () => void;
}

const EditCarForm: React.FC<EditCarFormProps> = ({
  car,
  onCarUpdated,
  onCancel,
}) => {
  const [carName, setCarName] = useState(car.car_name);
  const [type, setType] = useState(car.type);
  const [desc, setDesc] = useState(car.desc);
  const [seat, setSeat] = useState(car.seat);
  const [transmission, setTransmission] = useState(car.transmission);
  const [year, setYear] = useState(car.year);
  const [price, setPrice] = useState(car.price);
  const [availabillity, setAvailabillity] = useState(car.availabillity);
  const [startRent, setStartRent] = useState(car.start_rent);
  const [endRent, setEndRent] = useState(car.end_rent);
  const [img, setImg] = useState<File | null>(null);

  useEffect(() => {
    setCarName(car.car_name);
    setType(car.type);
    setDesc(car.desc);
    setSeat(car.seat);
    setTransmission(car.transmission);
    setYear(car.year);
    setPrice(car.price);
    setAvailabillity(car.availabillity);
    setStartRent(car.start_rent);
    setEndRent(car.end_rent);
  }, [car]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("car_name", carName);
    formData.append("type", type);
    formData.append("desc", desc);
    formData.append("seat", seat.toString());
    formData.append("transmission", transmission);
    formData.append("year", year);
    formData.append("price", price.toString());
    formData.append("availabillity", availabillity.toString());
    formData.append("start_rent", startRent);
    formData.append("end_rent", endRent);
    if (img) {
      formData.append("img", img);
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `https://be-bcr-ch6-production.up.railway.app/api/v1/cars/update/${car.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onCarUpdated(); // Panggil fungsi ini setelah mobil berhasil diperbarui
      toast.success("Data Berhasil Diupdate");
    } catch (error) {
      toast.error("Data Gagal Diupdate");
      console.error("Failed to update car", error);
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
              value={carName}
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
              value={startRent}
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
              value={endRent}
              onChange={(e) => setEndRent(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary m-r-10">
        Update Car
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditCarForm;
