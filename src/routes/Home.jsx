import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import Steps from "../components/home/Steps.jsx";
import WhyUs from "../components/home/WhyUs.jsx";
import Blog from "../components/home/Blog.jsx";
import Contact from "../components/home/Contact.jsx";
import Clients from "../components/home/Clients.jsx";
import Services from "../components/home/Services.jsx";

import '../assets/css/bootstrap.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';


export default function () {
    return (
        <>
            <Header/>
            <Hero/>
            <Services/>
            <WhyUs/>
            <Clients/>
            <Steps/>
            <Blog/>
            <Contact/>
            <Footer/>
        </>
    )
}