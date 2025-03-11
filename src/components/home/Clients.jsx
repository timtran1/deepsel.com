// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
// import Slider from "react-slick";
// import Carousel from "./Carousel";

let clients = [
    {
        id: "icg",
        image: "/img/icg.png",
        path: "https://www.icg.ch/",
    },
    {
        id: "native-ops",
        image: "/img/nativeops.svg",
        path: "https://nativeops.swiss",
    },

    {
        id: "daenzer",
        image: "/img/danzer-logo.png",
        path: "https://www.daenzer-consulting.ch/",
    },
    {
        id: "sekops",
        image: "/img/sekops.png",
        path: "https://sekops.ch/",
        className: "py-2",
    },
    {
        id: "gemina",
        image: "/img/gemina.png",
        path: "http://gemina.dev",
        className: "",
    },
    {
        id: "offshored",
        image: "/img/offshored.png",
        path: "http://offshored.dev",
        className: "py-3",
    },
    {
        id: "lexicon",
        image: "/img/lexicon.png",
        path: "/",
        className: "py-2",
    },

    {
        id: "clubloungery",
        image: "/img/clubloungery.png",
        path: "https://clubloungery.com/",
        className: "py-3",
    },
    {
        id: "ddg",
        image: "/img/ddg.svg",
        path: "https://www.ddgcabinetpsy.ch/",
    },
];


export default function Clients() {

    return (
        <section id="clients" className={`pt-32 pb-20`}>
            <div className="sec-title centered">
                <div className="title">trusted by</div>
                <h2>Our clients</h2>
            </div>
            {/*<Carousel/>*/}
            <div className={`flex flex-wrap justify-center items-center max-w-[1000px] mx-auto gap-4`}>
                {clients.map((client, index) => (
                    <a key={index} href={client.path}
                       className={`m-4`}
                       target="_blank"
                       rel="noopener noreferrer"
                    >

                        {/*<div className={`w-[300px] h-[200px] bg-cover bg-center border border-black`}*/}
                        {/*style={{backgroundImage: `url(${client.image})`}}*/}
                        {/*></div>*/}
                        <img className={`h-[90px] ${client.className}`} src={client.image} alt={client.id}/>
                    </a>
                ))}
            </div>
        </section>
    )
}