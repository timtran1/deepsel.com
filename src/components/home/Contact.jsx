export default function () {
    return (
        <section id="contact" className="contact-form-section">

            <div className="auto-container">
                <div className="inner-container bg-gradient-to-r to-[#f27121] from-[#e94057] shadow">
                    <div className="icons-one"></div>
                    <div className="icons-two"></div>
                    <h3>Have a job for us? <br/> Send us a message.</h3>

                    <div className="default-form">
                        <form name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact"/>
                            <div className="row clearfix">

                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Your email *" required/>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="name" placeholder="Your name *" required/>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="subject" placeholder="Subject *" required/>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder="Message (optional)"></textarea>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
                                    <button
                                        className="theme-btn px-5 font-semibold py-3 bg-black text-white cursor-pointer rounded-full transition-all duration-300"
                                        type="submit"
                                        name="submit-form">Contact us
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>

                    {/*<div className="side-image wow rubberBand" data-wow-delay="0ms" data-wow-duration="1500ms">*/}
                    {/*    <img src="/img/form-icon.png" alt=""/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}