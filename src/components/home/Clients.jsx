import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import {Card} from "@deepsel/lake-ui";
import {useEffect, useState} from "react";


export default function () {

    const [slideNumber, setSlideNumber] = useState(3);
    useEffect(() => {
        return () => {
            const innerWidth = window.innerWidth;
            console.log(innerWidth);
            if (innerWidth < 641) {
                setSlideNumber(1)
            } else if (innerWidth < 769) {
                setSlideNumber(2)
            } else if (innerWidth < 1025) {
                setSlideNumber(3)
            } else setSlideNumber(4)
            console.log(slideNumber);
        };
    }, [innerWidth]);


    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideNumber,
        slidesToScroll: 1,
        centerPadding: "0px",
        autoPlay: true,
        adaptiveHeight: true,
        prevArrow:

            <div className={`flex items-center`}>
                <div className="hidden md:block cursor-pointer !-top-[13px] absolute text-2xl text-black">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
            </div>
        ,
        nextArrow:
            <div className={`flex items-center`}>
                <div className="hidden md:block cursor-pointer !-top-[13px] absolute text-2xl text-black">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </div>
    };
    return (

        <section id="clients" className={`pt-32 pb-20`}>
            <div className="sec-title centered">
                <div className="title">trusted by</div>
                <h2>Our clients</h2>
            </div>
            <Slider className={'w-75 mx-auto'} {...settings}>
                <Card className="!flex items-center m-auto justify-center !max-w-fit px-2">
                    <a href="https://www.icg.ch/" target="_blank">
                        <img src="/img/icg.png" alt="" className="w-[200px]"/>
                    </a>
                </Card>

                <Card className="!flex items-center m-auto justify-center !max-w-fit px-2">
                    <a href="https://nativeops.ch/" target="_blank">
                        <img src="/img/nativeops.svg" alt="" className="w-[100px]"/>
                    </a>
                </Card>

                <Card className="!flex items-center  !h-full align-center justify-center !max-w-fit px-2">
                    <a href="https://www.shaw-systems.co.uk/" target="_blank">
                        <img src="/img/shawsystems.png" alt="" className="w-[340px]"/>
                    </a>
                </Card>

                <Card className="!flex justify-content-center m-auto !max-w-fit justify-center w-fit px-2">
                    <a className="" href="https://www.daenzer-consulting.ch/" target="_blank">
                        <img src="/img/danzer-logo.png" alt="" className="w-[150px]"/>
                    </a>
                </Card>
            </Slider>
        </section>
    )
}