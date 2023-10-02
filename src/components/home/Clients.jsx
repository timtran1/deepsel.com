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
        slidesToShow: (window.innerWidth < 641) ? 1 : (window.innerWidth < 769) ? 2 : (window.innerWidth < 1025) ? 3 : 4,
        slidesToScroll: 1,
        centerPadding: "20px",
        autoPlay: true,
        prevArrow:

                <div className=" cursor-pointer !inline-block w-[30px] h-[30px] max-sm:w-[70%] !-top-[13px] absolute text-2xl text-black">
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: "#000000", height: '30px', width: '30px', position: 'absolute', translate: '-50% -40%'}}/>
                </div>
        ,
        nextArrow:

                <div className=" block cursor-pointer !inline-block max-sm:w-[70%] w-[30px] h-[30px] !-top-[13px] absolute text-2xl text-black">
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#000000", height: '30px', width: '30px', position: 'absolute', translate: '-80% -40%'}}/>
                </div>

    };
    return (

        <section id="clients" className={`pt-32 pb-20`}>
            <div className="sec-title centered">
                <div className="title">trusted by</div>
                <h2>Our clients</h2>
            </div>
            <Slider className={'w-[80%] mx-auto'} {...settings}>
                <Card className="!flex !h-[125px] items-center !top-0 max-sm:!w-[200px] !bottom-0 m-auto justify-center px-2">
                    <a href="https://www.icg.ch/" target="_blank">
                        <img src="/img/icg.png" alt="" className={'max-w-[150px]'}/>
                    </a>
                </Card>

                <Card className="!flex items-center m-auto justify-center max-sm:!w-[200px] !h-[125px] px-2">
                    <a href="https://nativeops.ch/" target="_blank">
                        <img src="/img/nativeops.svg" alt=""  className={'w-[100px]'}/>
                    </a>
                </Card>

                <Card className="!flex items-center flex-grow !h-[125px] align-center justify-center mx-auto w-fit px-2">
                    <a href="https://www.shaw-systems.co.uk/" target="_blank">
                        <img src="/img/shawsystems.png" alt="" className={' max-sm:max-w-[150px] max-w-[200px]'}/>
                    </a>
                </Card>

                <Card className="!flex justify-content-center !h-[125px] max-sm:!w-[200px]  m-auto h-[125px] justify-center w-fit px-2">
                    <a className="" href="https://www.daenzer-consulting.ch/" target="_blank">
                        <img src="/img/danzer-logo.png" alt="" className={'max-w-[150px]'}/>
                    </a>
                </Card>

                 <Card className="!flex !h-[125px] max-sm:!w-[200px] items-center m-auto max-sm:!w-[70%] justify-center px-2">
                    <a href="https://www.icg.ch/" target="_blank">
                        <img src="/img/icg.png" alt="" className={'max-w-[150px]'}/>
                    </a>
                </Card>

                <Card className="!flex items-center h-full m-auto max-sm:!w-[200px] justify-center !h-[125px] px-2">
                    <a href="https://nativeops.ch/" target="_blank">
                        <img src="/img/nativeops.svg" alt=""  className={'w-[100px]'}/>
                    </a>
                </Card>

                <Card className="!flex items-center flex-grow max-sm:!w-[200px] !h-[125px] align-center mx-auto justify-center w-fit px-2">
                    <a href="https://www.shaw-systems.co.uk/" target="_blank">
                        <img src="/img/shawsystems.png" alt="" className={'max-w-[200px]'}/>
                    </a>
                </Card>

                <Card className="!flex justify-content-center max-sm:!w-[200px]  h-full m-auto !h-[125px] justify-center w-fit px-2">
                    <a className="" href="https://www.daenzer-consulting.ch/" target="_blank">
                        <img src="/img/danzer-logo.png" alt="" className={'max-w-[150px]'}/>
                    </a>
                </Card>
            </Slider>
        </section>
    )
}