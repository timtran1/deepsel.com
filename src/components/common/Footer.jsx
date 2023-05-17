import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faHome, faEnvelope, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import scroll from "../../ultilities/scroll.js";

import '../../assets/css/footer.css'

export default function () {
    const year = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="auto-container">

                <div className="widgets-section">
                    <div className="row clearfix">


                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <div className="logo">
                                            <Link to="/"><img src="/img/logo.png" width={150} alt=""/></Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Links</h4>
                                        <ul className="list-link">
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/">Home</Link></li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/blog">Blog</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                            <div className="row clearfix">


                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">

                                        <h4>Support</h4>
                                        <ul className="list-link">
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/>
                                                <a href="/#contact" onClick={event => scroll(e, 'contact')}>
                                                    Contact Us
                                                </a>
                                            </li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/terms-of-service">Terms of Service</Link></li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/privacy-policy">Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <ul className="list-style-one">
                                            <li className="pl-0"><b>Deepsel Inc.</b></li>
                                            {/*<li>*/}
                                            {/*    <a href="tel:4156551009">*/}
                                            {/*        <FontAwesomeIcon icon={faPhone} className="mr-2 text-[#666666]"/>*/}
                                            {/*        (415) 655 1009*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                            <li><a href="mailto:info@deepsel.com">
                                                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#666666]"/>
                                                info@deepsel.com
                                            </a></li>
                                            <li>
                                                <FontAwesomeIcon icon={faHome} className="mr-2"/>
                                                2261 Market Street #4441 <br/>San
                                                Francisco
                                                CA, 94114
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">


                            <div className="copyright-column col-lg-6 col-md-6 col-sm-12">
                                <div className="copyright">{year} &copy; Deepsel Inc., <a
                                    href="#">All rights reserved</a></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}