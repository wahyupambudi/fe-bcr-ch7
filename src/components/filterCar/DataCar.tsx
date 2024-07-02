import React from "react";
import icUser from "../../assets/images/main/icon/fi_users.png";
import icSetting from "../../assets/images/main/icon/fi_settings.png";
import icCalender from "../../assets/images/main/icon/fi_calendar.png";

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
}

interface DataCarProps {
  car: Car;
}

const DataCar: React.FC<DataCarProps> = ({ car }) => {
  const {
    model,
    manufacture,
    rentPerDay,
    description,
    capacity,
    transmission,
    year,
    image,
  } = car;

  // console.log(description.substring(0, 60));

  return (
    <div className="card shadow p-3 rounded">
      <img className="img-car-filter rounded" src={image} alt="" />
      <p className="card-text fs-14">
        {model} / {manufacture}
      </p>
      <p className="card-title fs-16">
        Rp {new Intl.NumberFormat("id").format(rentPerDay)} / hari
      </p>
      <p className="card-text fs-14 fw-light">{description.substring(0, 60)}</p>
      <ul className="list-unstyled">
        <li className="mb-3">
          <img
            className="icon-20 me-2"
            src={icUser}
            alt="logo"
          />
          {capacity} orang
        </li>
        <li className="mb-3">
          <img
            className="icon-20 me-2"
            src={icSetting}
            alt="logo"
          />
          {transmission}
        </li>
        <li className="mb-3">
          <img
            className="icon-20 me-2"
            src={icCalender}
            alt="logo"
          />
          {year}{" "}
        </li>
      </ul>
      <button className="btn text-white fs-14 btn-header" id="filter-btn">
        Pilih Mobil
      </button>
    </div>

    // <div className="card">
    //   <img className="card-img-top" src={image} alt={manufacture} />
    //   <div className="card-body search-result">
    //     <div className="top">
    //       <p className="body-regular-14">{model}</p>
    //       <p className="title-bold-16">Rp{rentPerDay}/Hari</p>
    //       <p className="body-light-14">{description}</p>
    //     </div>
    //     <p>
    //       <img src=".\images\fi_users.png" height="20px" alt="Users" />
    //       {capacity} Orang
    //     </p>
    //     <p>
    //       <img src=".\images\fi_settings.png" height="20px" alt="Settings" />
    //       {transmission}
    //     </p>
    //     <p>
    //       <img src=".\images\fi_calendar.png" height="20px" alt="Calendar" />
    //       Tahun {year}
    //     </p>
    //   </div>
    //   <button className="btn btn-success body-bold-14">Pilih Mobil</button>
    // </div>
  );
};

export default DataCar;
