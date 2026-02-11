import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faEnvelope, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

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
                                            <Link to="/"><img src="/deepsel-logos/deepsel-horizontal-main.svg" width={200} alt=""/></Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Links</h4>
                                        <ul className="list-link">
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/#top">Home</Link></li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><a
                                                href="https://blog.deepsel.com">Blog</a></li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/careers#top">Careers</Link></li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="https://gemina.dev/" target={"_blank"}>Gemina AI</Link></li>
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
                                                <Link to="/#contact">
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/terms-of-service#top">Terms of Service</Link></li>
                                            <li><FontAwesomeIcon icon={faAngleRight} className="mr-2"/><Link
                                                to="/privacy-policy#top">Privacy Policy</Link></li>
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
                                                1111B S Governors Ave # 46739 <br/>Dover DE 19901<br/>USA
                                            </li>
                                        </ul>
                                        <ul className="list-style-one">
                                            <li className="pl-0"><b>Deepsel Vietnam JSC</b></li>
                                            <li>
                                                <FontAwesomeIcon icon={faHome} className="mr-2"/>
                                                Flr.6, IRIS complex, Loc st.,<br/>
                                                Hanoi,
                                                Vietnam
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