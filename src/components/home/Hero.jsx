import scroll from "../../ultilities/scroll.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function () {
    return (
        <section className="banner-section-two overflow-x-clip">
            <div className="image-layer !bg-repeat" style={{backgroundImage: `url(/img/5.png)`}}></div>
            <div className="auto-container">
                <div className="clearfix">
                    <div className="content">
                        <h1>Software for modern businesses</h1>
                        <div className="text">
                          Innovate and digitize your business processes<br/> with our team of experts.
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