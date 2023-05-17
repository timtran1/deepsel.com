import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import {Link} from "react-router-dom";

export default function () {
    return (
        <>
            <Header/>

            <section className="page-title bg-[url('/img/7.png')]">
                <div className="auto-container">
                    <div className="content">
                        <h1>Careers</h1>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container pb-20">
                <div className="auto-container">
                    <div className="row clearfix">


                        <div className="content-side col-lg-8 col-md-12 col-sm-12 pb-[200px]">
                            <div className="sidebar-widget sidebar-blog-category">
                                <div className="sidebar-title">
                                    <h4>Openings</h4>
                                </div>
                                <ul className="blog-cat">
                                    <li><Link to="/react-v">[VIE] <b>React Developer</b> / Part-time / Full Remote<span>(3)</span></Link></li>
                                    <li><Link to="/python-v">[VIE] <b>Python Developer</b> / Part-time / Full Remote<span>(1)</span></Link></li>
                                    <li><Link to="/figma-v">[VIE] <b>Figma Web Designer</b> / Part-time / Full Remote<span>(1)</span></Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}