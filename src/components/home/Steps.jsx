import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeCompare, faGears, faPaperPlane, faUsers} from "@fortawesome/free-solid-svg-icons";
import scroll from "../../ultilities/scroll.js";

export default function () {
    return (
        <section className="steps-section mt-40">
            <div className="auto-container">
                <div className="sec-title centered">
                    <div className="title">Getting started</div>
                    <h2>Easy steps to <br/> <span>start</span> with us</h2>
                </div>

                <div className="outer-container">
                    <div className="row clearfix">

                        <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        {/*<span className="icon flaticon-contact"></span>*/}
                                        <FontAwesomeIcon icon={faPaperPlane}/>
                                    </div>
                                </div>
                                <div className="lower-box">
                                    <h5>
                                        <a href="/#contact" onClick={e => scroll(e, 'contact')}>
                                            Contact us
                                        </a>
                                    </h5>
                                    <div className="text">After an initial consultation to gather your requirements
                                        and budget, a
                                        preliminary cost and timeline estimate is produced.
                                    </div>
                                    <a className="contact" href="/#contact" onClick={e => scroll(e, 'contact')}>
                                        Contact us
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="300ms"
                                 data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        {/*<span className="icon flaticon-network-1"></span>*/}
                                        <FontAwesomeIcon icon={faUsers}/>
                                    </div>
                                </div>
                                <div className="lower-box">
                                    <h5><a>Consultation</a></h5>
                                    <div className="text">Requirements collection and documentation
                                        We talk with stakeholders to drill down and collect more detailed
                                        requirements, and produce a statement of scope, along with any necessary
                                        cost and timeline adjustments..
                                    </div>
                                    {/*<a className="contact" href="#">Appoinment</a>*/}
                                </div>
                            </div>
                        </div>

                        <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="600ms"
                                 data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        {/*<span className="icon flaticon-target"></span>*/}
                                        <FontAwesomeIcon icon={faGears}/>
                                    </div>
                                </div>
                                <div className="lower-box">
                                    <h5><a>Engineering</a></h5>
                                    <div className="text">Our engineers use leading-edge technologies to create
                                        highly available and scalable software systems that solve your business
                                        needs.
                                    </div>
                                    {/*<a className="contact" href="#">Order now</a>*/}
                                </div>
                            </div>
                        </div>

                        <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="900ms"
                                 data-wow-duration="1500ms">
                                <div className="icon-outer">
                                    <div className="icon-box">
                                        {/*<span className="icon flaticon-banknote"></span>*/}
                                        <FontAwesomeIcon icon={faCodeCompare}/>
                                    </div>
                                </div>
                                <div className="lower-box">
                                    <h5><a>Delivery</a></h5>
                                    <div className="text">Product is iteratively tested and delivered, generating a
                                        flexible, evolving, and business-driven solution.
                                    </div>
                                    {/*<a className="contact" href="#">Payment</a>*/}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}