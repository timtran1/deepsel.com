import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Card} from "@deepsel/lake-ui";

export default function () {
    return (
        <section id="clients" className={`pt-32 pb-20`}>
            <div className="sec-title centered">
                <div className="title">trusted by</div>
                <h2>Our clients</h2>
            </div>
            <div
                className="flex flex-col gap-4 md:gap-16 md:flex-row w-full justify-center items-center p-5">
                <div className={`flex items-center`}>
                    <div className="hidden md:block cursor-pointer text-2xl text-black">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </div>
                </div>

                <Card className="flex items-center justify-center min-h-[110px] px-2">
                    <a href="https://www.icg.ch/" target="_blank">
                        <img src="/img/icg.png" alt="" className="w-[200px]"/>
                    </a>
                </Card>

                <Card className="flex items-center justify-center min-h-[110px] px-2">
                    <a href="https://nativeops.ch/" target="_blank">
                        <img src="/img/nativeops.svg" alt="" className="w-[100px]"/>
                    </a>
                </Card>

                <Card className="flex items-center justify-center min-h-[110px] px-2">
                    <a href="https://www.shaw-systems.co.uk/" target="_blank">
                        <img src="/img/shawsystems.png" alt="" className="w-[340px]"/>
                    </a>
                </Card>

                <Card className="flex items-center justify-center min-h-[110px] px-2">
                    <a href="https://www.daenzer-consulting.ch/" target="_blank">
                        <img src="/img/danzer-logo.png" alt="" className="w-[150px]"/>
                    </a>
                </Card>

                <div className={`flex items-center`}>
                    <div className="hidden md:block cursor-pointer text-2xl text-black">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        </section>
    )
}