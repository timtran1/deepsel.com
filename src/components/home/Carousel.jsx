import {useEffect, useRef, useState} from 'react';
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {useTranslation} from "react-i18next";
import {Card} from "@deepsel/lake-ui";
import '../../assets/css/scrollbar.css'


export default function Carousel() {
    let [position, setPosition] = useState(0)

    let clients = [
        {
            id: "icg",
            image: "/img/icg.png",
            path: "https://www.icg.ch/",
        },
        {
            id: "native-ops",
            image: "/img/nativeops.svg",
            path: "https://nativeops.ch/",
        },

        {
            id: "daenzer",
            image: "/img/danzer-logo.png",
            path: "https://www.daenzer-consulting.ch/",
        },
        {
            id: "sekops",
            image: "/img/sekops.svg",
            path: "https://bernardgutermann.wixsite.com/sops",
        },
        {
            id: "shaw-systems",
            image: "/img/shawsystems.png",
            path: "https://www.shaw-systems.co.uk/",
        },
        {
            id: "icg",
            image: "/img/icg.png",
            path: "https://www.icg.ch/",
        },
        {
            id: "native-ops",
            image: "/img/nativeops.svg",
            path: "https://nativeops.swiss/",
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
        },
        {
            id: "shaw-systems",
            image: "/img/shawsystems.png",
            path: "https://www.shaw-systems.co.uk/",
        },
        {
            id: "icg",
            image: "/img/icg.png",
            path: "https://www.icg.ch/",
        },
        {
            id: "native-ops",
            image: "/img/nativeops.svg",
            path: "https://nativeops.ch/",
        },

        {
            id: "daenzer",
            image: "/img/danzer-logo.png",
            path: "https://www.daenzer-consulting.ch/",
        },
        {
            id: "sekops",
            image: "/img/sekops.svg",
            path: "https://bernardgutermann.wixsite.com/sops",
        },
        {
            id: "shaw-systems",
            image: "/img/shawsystems.png",
            path: "https://www.shaw-systems.co.uk/",
        },
    ];


    const ref = useRef(null);
    useEffect(() => {
        return () => {
            if (ref) {
                ref.current.scrollTo(1500, 0)
            }
        };
    }, [ref]);


    useEffect(() => {
            console.log(position)
            if (Math.abs(position % 5) === 0) {
                if (ref) {
                    function scroll() {
                        ref.current.scrollTo(1500, 0)
                    }

                    setTimeout(scroll, 600)
                }
            }
        }
        ,
        [position]
    )
    ;
    return (
        <main className="relative mx-auto pt-2">
            <div
                className={'max-md:w-full w-full lg:w-[800px] xl:w-[1100px] 2xl:w-[1400px] flex justify-items-center justify-center mx-auto'}>
                <button className={'w-[100px] max-md:w-[50px] cursor-pointer bg-white'} onClick={() => {
                    ref.current.scrollBy({left: -300, behavior: 'smooth'})
                    setPosition(position - 1)
                }}>
                    <FontAwesomeIcon icon={faAngleLeft} size={'2xl'}/>
                </button>
                <div className={'w-[300px] md:w-[600px] xl:w-[900px] 2xl:w-[1200px]  overflow-x-hidden'}>
                    <div
                        className=" hide-scrollbar flex flex-row overflow-x-scroll gap-[100px] px-[50px]  text-center"
                        ref={ref}>
                        {clients?.map((client, index) => (
                            <a key={index}
                               href={client.path} target="_blank"
                                // onClick={() => setHash(client.id)}
                            >
                                <Card
                                    className="!flex content-center !w-[200px] h-full m-auto !h-[125px] justify-center w-fit px-2">

                                    <img src={client.image} alt="" className={'max-w-[150px] my-auto'}/>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
                <button className={'w-[100px] cursor-pointer max-md:w-[50px] bg-white'} onClick={() => {
                    ref.current.scrollBy({left: 300, behavior: 'smooth'})
                    setPosition(position + 1)
                }}>
                    <FontAwesomeIcon icon={faAngleRight} size={'2xl'}/>
                </button>
            </div>

        </main>
    );
}
