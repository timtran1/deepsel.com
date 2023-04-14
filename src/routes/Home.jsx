import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import scroll from "../ultilities/scroll.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faUsers, faGears, faCodeCompare} from "@fortawesome/free-solid-svg-icons";

import '../assets/css/bootstrap.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';


export default function () {
    return (
        <div>
            <Header/>

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
                               className="theme-btn btn-style-three">Hire us today <span
                                className="fa fa-arrow-right"></span>
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

            <section className="moment-section">
                <div className="auto-container">
                    <div className="row clearfix">

                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="/img/moment.png" alt=""/>
                                </div>
                            </div>
                        </div>


                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">

                                <div className="sec-title">
                                    <div className="title">we are pixer</div>
                                    <h2>we are happy to assist <br/> you all time <span>moment</span></h2>
                                </div>
                                <div className="text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                                    used in laying out print, graphic or web designs. The passage is attributed. So some
                                    forward-looking CIOs are putting.
                                </div>


                                <ul className="accordion-box">


                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <div className="icon-outer"><span
                                                className="icon icon-plus fa fa-plus"></span> <span
                                                className="icon icon-minus fa fa-minus"></span></div>
                                            Solutions is the latest software Sigma?
                                        </div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">
                                                    <p>The argument in favor of using to filler text goes something is
                                                        that anybody can do it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="accordion block">
                                        <div className="acc-btn active">
                                            <div className="icon-outer"><span
                                                className="icon icon-plus fa fa-plus"></span> <span
                                                className="icon icon-minus fa fa-minus"></span></div>
                                            Machine learning shows potential to leverage?
                                        </div>
                                        <div className="acc-content current">
                                            <div className="content">
                                                <div className="text">
                                                    <p>The argument in favor of using to filler text goes something is
                                                        that anybody can do it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <div className="icon-outer"><span
                                                className="icon icon-plus fa fa-plus"></span> <span
                                                className="icon icon-minus fa fa-minus"></span></div>
                                            So some forward-looking CIOs are putting?
                                        </div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">
                                                    <p>The argument in favor of using to filler text goes something is
                                                        that anybody can do it.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="news-section">
                <div className="auto-container">

                    <div className="sec-title centered">
                        <div className="title">Our expert team</div>
                        <h2>We re dedic <br/> our devoted srv <span>fetures</span></h2>
                    </div>

                    <div className="row clearfix">


                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-single.html"><img src="/images/resource/news-1.jpg" alt=""/></a>
                                </div>
                                <div className="lower-content">
                                    <h6><a href="blog-single.html">Top aide to possible contender forced to resign over
                                        creepy.</a></h6>
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <div className="author">
                                                <div className="image"><img src="/images/resource/author-4.jpg" alt=""/>
                                                </div>
                                                Rio Smith
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <div className="post-time">10 hours ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-single.html"><img src="/images/resource/news-2.jpg" alt=""/></a>
                                </div>
                                <div className="lower-content">
                                    <h6><a href="blog-single.html">Thirty-two surrogate mothers charged with human
                                        trafficking.</a></h6>
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <div className="author">
                                                <div className="image"><img src="/images/resource/author-5.jpg" alt=""/>
                                                </div>
                                                Jhonny Rip
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <div className="post-time">5 hours ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="news-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-single.html"><img src="/images/resource/news-3.jpg" alt=""/></a>
                                </div>
                                <div className="lower-content">
                                    <h6><a href="blog-single.html">Chinese clients have been released after agreeing to
                                        keep.</a></h6>
                                    <div className="clearfix">
                                        <div className="pull-left">
                                            <div className="author">
                                                <div className="image"><img src="/images/resource/author-6.jpg" alt=""/>
                                                </div>
                                                Mong Wanzhou
                                            </div>
                                        </div>
                                        <div className="pull-right">
                                            <div className="post-time">12 hours ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="contact" className="contact-form-section">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="icons-one"></div>
                        <div className="icons-two"></div>
                        <h3>Have a job for us? <br/> Just shoot us a message.</h3>


                        <div className="default-form">
                            <form method="post" action="blog.html">
                                <div className="row clearfix">

                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="username" placeholder="Your name *" required/>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="Your email *" required/>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="subject" placeholder="Subject *" required/>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="message" placeholder="Message (optional)"></textarea>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
                                        <button className="theme-btn btn-style-one transition-all duration-300"
                                                type="submit"
                                                name="submit-form">Contact us
                                        </button>
                                    </div>

                                </div>
                            </form>

                        </div>

                        <div className="side-image wow rubberBand" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <img src="/img/form-icon.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}