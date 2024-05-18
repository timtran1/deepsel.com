// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
// import Slider from "react-slick";

import Carousel from "./Carousel";


export default function () {


    return (

        <section id="clients" className={`pt-32 pb-20`}>
            <div className="sec-title centered">
                <div className="title">trusted by</div>
                <h2>Our clients</h2>
            </div>
            <Carousel/>

        </section>
    )
}