import {Link} from "react-router-dom";
import scroll from "../../ultilities/scroll.js";

export default function () {
    return (
        <header className="main-header">
            <div className="header-upper">
                <div className="auto-container">
                    <div className="clearfix">

                        <div className="pull-left logo-box">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/img/logo.png" width={110} alt="" title=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer clearfix">

                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div style={{visibility: 'visible'}}
                                     className="navbar-collapse collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="https://lakeui.deepsel.com/" target={"_blank"}>Lake UI</Link></li>
                                        <li>
                                            <a href="/#contact" onClick={e => scroll(e, 'contact')}>
                                                Contact us
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </nav>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}