import React from "react";
import NavBar from "../components/home/NavBar";
import SectionHero from "../components/home/SectionHero";
import WhyUs from "../components/home/SectionWhyus";
import Testimonial from "../components/home/Testimonial";
import SectionBanner from "../components/home/SectionBanner";
import Faq from "../components/home/Faq";
import Footer from "../components/home/Footer";


const Home: React.FC = () => {
    return (
        <div>
            <NavBar />
            <SectionHero />
            <WhyUs />
            <Testimonial />
            <SectionBanner />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home;