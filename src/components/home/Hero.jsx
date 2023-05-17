import scroll from "../../ultilities/scroll.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function () {
    return (
        <section className="banner-section-two">
            <div className="image-layer" style={{backgroundImage: `url(/img/5.png)`}}></div>
            <div className="auto-container">
                <div className="clearfix">
                    <div className="content">
                        <h1>Bring your <br/> software product to market, <span>fast</span></h1>
                        <div className="text">
                            Make your software product vision to reality<br/> with our team of experts.
                        </div>
                        <a href="/#contact"
                           onClick={e => scroll(e, 'contact')}
                           className="theme-btn btn-style-three">Hire us today
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                        </a>
                    </div>
                </div>
                <div className="image-box ">
                    <figure className="image">
                        <img src="/img/image-3.png" alt=""/>
                    </figure>
                </div>
            </div>
        </section>
    )
}