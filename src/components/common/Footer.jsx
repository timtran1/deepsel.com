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
                                            <a href="index.html"><img src="/images/footer-logo.png" alt=""/></a>
                                        </div>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt.
                                        </div>
                                        <ul className="list-style-one">
                                            <li><span className="icon fa fa-phone"></span> +123 (4567) 890</li>
                                            <li><span className="icon fa fa-envelope"></span> info@pixer.com</li>
                                            <li><span className="icon fa fa-home"></span>380 St Kilda Road,
                                                Melbourne <br/> VIC 3004, Australia
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Links</h4>
                                        <ul className="list-link">
                                            <li><a href="">Home</a></li>
                                            <li><a href="">Services</a></li>
                                            <li><a href="">About us</a></li>
                                            <li><a href="">Testimonials</a></li>
                                            <li><a href="">News</a></li>
                                            <li><a href="">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="big-column col-lg-6 col-md-12 col-sm-12">
                            <div className="row clearfix">


                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Support</h4>
                                        <ul className="list-link">
                                            <li><a href="">Contact Us</a></li>
                                            <li><a href="">Submit a Ticket</a></li>
                                            <li><a href="">Visit Knowledge Base</a></li>
                                            <li><a href="">Support System</a></li>
                                            <li><a href="">Refund Policy</a></li>
                                            <li><a href="">Professional Services</a></li>
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
                                <div className="copyright">{year} &copy; All rights reserved, <a
                                    href="#">Deepsel Inc.</a></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}