import Header from "../../components/common/Header.jsx";
import Footer from "../../components/common/Footer.jsx";
import {Link} from "react-router-dom";

export default function () {
    return (
        <>
            <Header/>

            <section className="page-title bg-[url('/img/7.png')]">
                <div className="auto-container">
                    <div className="content">
                        <h1>Job opening</h1>
                        <ul className="page-breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li>Python Developer</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container pb-20">
                <div className="auto-container">
                    <div className="row clearfix">


                        <div className="content-side blog-single col-lg-8 col-md-12 col-sm-12 pb-[300px]">
                            <div className={`inner-box`}>
                                <h4>Python Developer / Part-time / Full Remote</h4>

                                <div className={`lower-content`}>
                                    <div className={`text`}>
                                        <p className={`text-6xl`}><b>TBD</b></p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}