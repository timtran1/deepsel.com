export default function () {
    return (
        <header className="main-header">
            <div className="header-upper">
                <div className="auto-container">
                    <div className="clearfix">

                        <div className="pull-left logo-box">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/img/logo.png" width={110} alt="" title=""/>
                                </a>
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
                                        <li><a href="contact.html">Home</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
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