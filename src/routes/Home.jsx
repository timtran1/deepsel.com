import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";

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
                            <h1>Make <span>your</span> software <br/> a reality</h1>
                            <div className="text">
                                Ship your software product fast <br/> with our team of experts.
                            </div>
                            <a href="#" className="theme-btn btn-style-three">Hire us today <span
                                className="fa fa-arrow-right"></span></a>
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
                        <div className="title">Steps for done</div>
                        <h2>Easy steps to do <br/> consult with us <span>us</span></h2>
                    </div>

                    <div className="outer-container">
                        <div className="row clearfix">

                            <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="icon-outer">
                                        <div className="icon-box">
                                            <span className="icon flaticon-contact"></span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="#">Contact us first</a></h5>
                                        <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                                        <a className="contact" href="#">Contact us</a>
                                    </div>
                                </div>
                            </div>

                            <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-delay="300ms"
                                     data-wow-duration="1500ms">
                                    <div className="icon-outer">
                                        <div className="icon-box">
                                            <span className="icon flaticon-network-1"></span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="#">Consult with us</a></h5>
                                        <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                                        <a className="contact" href="#">Appoinment</a>
                                    </div>
                                </div>
                            </div>

                            <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-delay="600ms"
                                     data-wow-duration="1500ms">
                                    <div className="icon-outer">
                                        <div className="icon-box">
                                            <span className="icon flaticon-target"></span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="#">Place Order</a></h5>
                                        <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                                        <a className="contact" href="#">Order now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="services-block-two col-lg-3 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-delay="900ms"
                                     data-wow-duration="1500ms">
                                    <div className="icon-outer">
                                        <div className="icon-box">
                                            <span className="icon flaticon-banknote"></span>
                                        </div>
                                    </div>
                                    <div className="lower-box">
                                        <h5><a href="#">Make Payment</a></h5>
                                        <div className="text">Lorem ipsum dolor sit amet, csectetur adipis icing.</div>
                                        <a className="contact" href="#">Payment</a>
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

            <section className="contact-form-section">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="icons-one"></div>
                        <div className="icons-two"></div>
                        <h3>Have any job for our company? <br/> Just connect with us.</h3>


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
                                        <textarea name="message" placeholder="Message *"></textarea>
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