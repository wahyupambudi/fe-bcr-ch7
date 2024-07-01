import React, { useState, useEffect, useRef } from "react";
import DataCar from "./DataCar";
import "../../assets/css/car-rental.css";

interface Car {
  id: string;
  model: string;
  manufacture: string;
  rentPerDay: number;
  description: string;
  capacity: number;
  transmission: string;
  year: number;
  image: string;
  available: boolean;
  availableAt: string;
}

const SearchBar: React.FC = () => {
  const [formData, setFormData] = useState({
    driverType: "",
    date: "",
    time: "",
    passengers: "",
  });

  const [dateType, setDateType] = useState<"text" | "date">("text");
  const [timeType, setTimeType] = useState<"text" | "time">("text");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  const driverInput = useRef<HTMLSelectElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const timeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { driverType, date, time } = formData;
    setIsButtonEnabled(driverType !== "" && date !== "" && time !== "");
  }, [formData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        const data = await response.json();
        localStorage.setItem("CARS", JSON.stringify(data));
        setCars(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    const localData = localStorage.getItem("CARS");
    if (localData) {
      setCars(JSON.parse(localData));
    } else {
      fetchData();
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSearch = () => {
    const { date, time, passengers } = formData;
    const orderDate = new Date(date + "T" + time + ":00.000Z");
    const seat = +passengers;

    const filtered = cars.filter(
      (car) => new Date(car.availableAt) < orderDate && car.capacity >= seat
    );
    setFilteredCars(filtered);
  };

  return (
    <>
      <section style={{ position: "relative" }} className="mt-45">
        <div className="container w-1047 shadow p-3 rounded fs-12 bg-body">
          <div className="row justify-content-around">
            <div className="col-md-2">
              <label className="form-label w-200" htmlFor="driverType">
                Tipe Driver
              </label>
              <select
                id="driverType"
                value={formData.driverType}
                onChange={handleInputChange}
                ref={driverInput}
                className="form-select fs-12 h-36 placeholder"
              >
                <option
                  disabled
                  value=""
                  hidden
                  className="form-control fs-12 h-36 placeholder"
                >
                  Pilih Tipe Driver
                </option>
                <option value="Dengan sopir" className="optionEl">
                  Dengan Driver
                </option>
                <option value="Tanpa sopir" className="optionEl">
                  Tanpa Driver (Lepas Kunci)
                </option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label w-200" htmlFor="date">
                Tanggal
              </label>
              <input
                type={dateType}
                id="date"
                placeholder="Pilih Tanggal"
                onFocus={() => setDateType("date")}
                onBlur={() => setDateType("text")}
                value={formData.date}
                onChange={handleInputChange}
                ref={dateInput}
                className="form-control fs-12 h-36 placeholder"
              />
            </div>
            <div className="col-md-2">
              <label className="form-label w-200" htmlFor="time">
                Waktu Jemput/Ambil
              </label>
              <input
                type={timeType}
                id="time"
                placeholder="Pilih Waktu"
                onFocus={() => setTimeType("time")}
                onBlur={() => setTimeType("text")}
                value={formData.time}
                onChange={handleInputChange}
                ref={timeInput}
                className="form-control fs-12 h-36 placeholder"
              />
            </div>
            <div className="col-md-2">
              <label className="form-label w-200" htmlFor="passengers">
                Jumlah Penumpang
              </label>
              <input
                id="passengers"
                maxLength={1}
                placeholder="Jumlah Penumpang"
                value={formData.passengers}
                onChange={handleInputChange}
                className="form-control fs-12 h-36 placeholder"
              />
            </div>
            <div className="col-md-2">
              <label
                htmlFor=""
                className="form-label w-200"
                style={{ visibility: "hidden" }}
              >
                cari
              </label>
              <button
                className="btn text-white fs-14 btn-header"
                id="search-btn"
                onClick={handleSearch}
                disabled={!isButtonEnabled}
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container w-1047 p-0">
          <br />
          <div className="row" id="cars-container">
            {filteredCars.map((car) => (
              // eslint-disable-next-line react/jsx-key
              <div className="col-md-4">
                <DataCar key={car.id} car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
