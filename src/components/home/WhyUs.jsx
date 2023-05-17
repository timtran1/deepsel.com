export default function () {
    return (
        <section className="moment-section mt-40">
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
                                {/*<div className="title">a partner to rely on</div>*/}
                                <h2 className={`p-0`}>Why us</h2>
                            </div>
                            <div className="text">With an emphasis on
                                <span className={`text-red-500 font-semibold tracking-widest mx-1`}>high quality</span>
                                and <span
                                    className={`text-red-500 font-semibold tracking-widest ml-1`}>fast delivery</span>,
                                we serve as a trusted partner for clients in a variety of industries.
                            </div>


                            <ul className="accordion-box">


                                <li className="accordion block">
                                    <div className="acc-btn ">
                                        <div className="icon-outer"><span
                                            className="icon icon-plus fa fa-plus"></span> <span
                                            className="icon icon-minus fa fa-minus"></span></div>
                                        Technical expertise
                                    </div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="text">
                                                <p>We draw from only the best tech talents, utilizing industry veterans
                                                    with high standards of quality and professionalism.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="accordion block">
                                    <div className="acc-btn active">
                                        <div className="icon-outer"><span
                                            className="icon icon-plus fa fa-plus"></span> <span
                                            className="icon icon-minus fa fa-minus"></span></div>
                                        Personal approach
                                    </div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="text">
                                                <p>We apply a customer oriented approach, with your interest at the
                                                    core. We take care to deliver impactful
                                                    solutions that accurately solve your
                                                    business needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="accordion block">
                                    <div className="acc-btn">
                                        <div className="icon-outer">
                                            <span className="icon icon-plus fa fa-plus"></span>
                                            <span className="icon icon-minus fa fa-minus"></span>
                                        </div>
                                        Long-term relationship
                                    </div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="text">
                                                <p>We aim to build long-term working relationships with our
                                                    clients. We believe that by doing so, our mutual knowledge and
                                                    understanding can compound into remarkable results.</p>
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
    )
}