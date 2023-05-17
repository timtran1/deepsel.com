import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeCompare, faGears, faPaperPlane, faUsers} from "@fortawesome/free-solid-svg-icons";
import scroll from "../../ultilities/scroll.js";

export default function () {
    return (<section className="steps-section mt-40">
        <div className="auto-container">
            <div className="sec-title centered">
                <div className="title">Getting started</div>
                <h2>Easy steps to <br/> <span>Get Started</span></h2>
            </div>

            <div className="outer-container">
                <div className="row clearfix">

                    <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="icon-outer">
                                <div className="icon-box">
                                        <span className="icon flaticon-contact">
                                            <FontAwesomeIcon icon={faPaperPlane}/>
                                        </span>

                                </div>
                            </div>
                            <div className="lower-box">
                                <h5>
                                    <a href="/#contact" onClick={e => scroll(e, 'contact')}>
                                        Contact us
                                    </a>
                                </h5>
                                <div className="text">Initial consultation to gather your requirements and produce a
                                    cost and timeline estimate.
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
                                                 <span className="icon flaticon-contact">
                                              <FontAwesomeIcon icon={faUsers}/>
                                        </span>
                                </div>
                            </div>
                            <div className="lower-box">
                                <h5><a>Consultation</a></h5>
                                <div className="text">
                                    We collect more
                                    detailed
                                    requirements, consult and suggest changes, and make any necessary adjustments.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="600ms"
                             data-wow-duration="1500ms">
                            <div className="icon-outer">
                                <div className="icon-box">
                                                     <span className="icon flaticon-contact">
                                              <FontAwesomeIcon icon={faGears}/>
                                        </span>
                                </div>
                            </div>
                            <div className="lower-box">
                                <h5><a>Engineering</a></h5>
                                <div className="text">Our engineers use leading-edge technologies to create
                                    highly available and scalable software systems that solve your business
                                    needs.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="900ms"
                             data-wow-duration="1500ms">
                            <div className="icon-outer">
                                <div className="icon-box">
                                                        <span className="icon flaticon-contact">
                                              <FontAwesomeIcon icon={faCodeCompare}/>
                                        </span>
                                </div>
                            </div>
                            <div className="lower-box">
                                <h5><a>Delivery</a></h5>
                                <div className="text">Product is iteratively tested and delivered, generating a
                                    flexible, evolving, and business-driven solution.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>)
}