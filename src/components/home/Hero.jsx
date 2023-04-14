import scroll from "../../ultilities/scroll.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function(){
    return (
                    <section className="banner-section-two">
                <div className="image-layer" style={{backgroundImage: `url(/img/5.png)`}}></div>
                <div className="auto-container">
                    <div className="clearfix">
                        <div className="content">
                            {/*<h1>Make <span>your</span> software <br/> a reality</h1>*/}
                            <h1>Build and ship <span>your</span> <br/> software product to market, fast</h1>
                            <div className="text">
                                Bring your software product vision to reality<br/> with our team of experts.
                            </div>
                            <a href="/#contact"
                               onClick={e => scroll(e, 'contact')}
                               className="theme-btn btn-style-three">Hire us today
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                            </a>
                        </div>
                    </div>
                    <div className="image-box">
                        <figure className="image">
                            <img src="/img/image-3.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </section>
    )
}