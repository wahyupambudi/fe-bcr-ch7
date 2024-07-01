import React from "react";
import NavBarF from "../components/home/NavBarF";
import Footer from "../components/home/Footer";
import FilterCars from "../components/filterCar/FilterCars";


const FilterCar: React.FC = () => {
    return (
        <div>
            <NavBarF />
            <FilterCars />
            <Footer />
        </div>
    )
}

export default FilterCar;